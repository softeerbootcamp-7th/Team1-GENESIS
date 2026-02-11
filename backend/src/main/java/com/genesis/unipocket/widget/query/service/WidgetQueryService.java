package com.genesis.unipocket.widget.query.service;

import static com.genesis.unipocket.widget.common.enums.Period.WEEKLY;

import com.genesis.unipocket.expense.common.enums.Category;
import com.genesis.unipocket.global.common.enums.CountryCode;
import com.genesis.unipocket.global.common.enums.CurrencyCode;
import com.genesis.unipocket.global.exception.BusinessException;
import com.genesis.unipocket.global.exception.ErrorCode;
import com.genesis.unipocket.widget.common.enums.CurrencyType;
import com.genesis.unipocket.widget.common.enums.Period;
import com.genesis.unipocket.widget.common.validate.UserAccountBookValidator;
import com.genesis.unipocket.widget.query.persistence.WidgetQueryRepository;
import com.genesis.unipocket.widget.query.persistence.response.BudgetWidgetResponse;
import com.genesis.unipocket.widget.query.persistence.response.CategoryWidgetResponse;
import com.genesis.unipocket.widget.query.persistence.response.CategoryWidgetResponse.CategoryItem;
import com.genesis.unipocket.widget.query.persistence.response.CurrencyWidgetResponse;
import com.genesis.unipocket.widget.query.persistence.response.CurrencyWidgetResponse.CurrencyItem;
import com.genesis.unipocket.widget.query.persistence.response.MonthlyWidgetResponse;
import com.genesis.unipocket.widget.query.persistence.response.PaymentWidgetResponse;
import com.genesis.unipocket.widget.query.persistence.response.PaymentWidgetResponse.PaymentItem;
import com.genesis.unipocket.widget.query.persistence.response.PeriodWidgetResponse;
import com.genesis.unipocket.widget.query.persistence.response.PeriodWidgetResponse.PeriodItem;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.YearMonth;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WidgetQueryService {

	private final WidgetQueryRepository widgetQueryRepository;
	private final UserAccountBookValidator userAccountBookValidator;

	public BudgetWidgetResponse getBudgetWidget(UUID userId, Long accountBookId) {
		userAccountBookValidator.validateUserAccountBook(userId, accountBookId);
		return BudgetWidgetResponse.builder()
				.budget(widgetQueryRepository.getBudget(accountBookId))
				.baseCountryCode(
						widgetQueryRepository.getAccountBookCountryCode(
								accountBookId, CurrencyType.BASE))
				.localCountryCode(
						widgetQueryRepository.getAccountBookCountryCode(
								accountBookId, CurrencyType.LOCAL))
				.baseSpentAmount(
						widgetQueryRepository.getTotalSpentByAccountBookId(
								accountBookId, CurrencyType.BASE))
				.localSpentAmount(
						widgetQueryRepository.getTotalSpentByAccountBookId(
								accountBookId, CurrencyType.LOCAL))
				.build();
	}

	public CategoryWidgetResponse getCategoryWidget(UUID userId, Long accountBookId) {
		userAccountBookValidator.validateUserAccountBook(userId, accountBookId);

		CountryCode countryCode =
				widgetQueryRepository.getAccountBookCountryCode(accountBookId, CurrencyType.BASE);

		List<Object[]> rows = widgetQueryRepository.findCategorySpentByAccountBookId(accountBookId);

		BigDecimal totalAmount =
				rows.stream().map(r -> toBigDecimal(r[1])).reduce(BigDecimal.ZERO, BigDecimal::add);

		BigDecimal unclassifiedAmount =
				rows.stream()
						.filter(r -> r[0] == Category.UNCLASSIFIED)
						.map(r -> toBigDecimal(r[1]))
						.findFirst()
						.orElse(BigDecimal.ZERO);

		List<Object[]> classifiedRows =
				rows.stream().filter(r -> r[0] != Category.UNCLASSIFIED).toList();

		List<Object[]> topRows = classifiedRows.stream().limit(6).toList();

		BigDecimal overflowSum =
				classifiedRows.stream()
						.skip(6)
						.map(r -> toBigDecimal(r[1]))
						.reduce(BigDecimal.ZERO, BigDecimal::add);

		unclassifiedAmount = unclassifiedAmount.add(overflowSum);

		List<Object[]> finalRows = new java.util.ArrayList<>(topRows.size() + 1);
		finalRows.addAll(topRows);

		if (unclassifiedAmount.compareTo(BigDecimal.ZERO) > 0) {
			finalRows.add(new Object[] {Category.UNCLASSIFIED, unclassifiedAmount});
		}

		List<CategoryItem> items = buildCategoryItemsWithPercentFix(finalRows, totalAmount);

		return new CategoryWidgetResponse(totalAmount, countryCode, items);
	}
}
