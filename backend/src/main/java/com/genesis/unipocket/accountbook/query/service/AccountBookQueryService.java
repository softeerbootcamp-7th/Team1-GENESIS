package com.genesis.unipocket.accountbook.query.service;

import com.genesis.unipocket.accountbook.query.persistence.repository.AccountBookQueryRepository;
import com.genesis.unipocket.accountbook.query.persistence.response.AccountBookDetailResponse;
import com.genesis.unipocket.accountbook.query.persistence.response.AccountBookExchangeRateResponse;
import com.genesis.unipocket.accountbook.query.persistence.response.AccountBookQueryResponse;
import com.genesis.unipocket.accountbook.query.persistence.response.AccountBookSummaryResponse;
import com.genesis.unipocket.expense.command.application.ExchangeRateService;
import com.genesis.unipocket.global.common.enums.CurrencyCode;
import com.genesis.unipocket.global.exception.BusinessException;
import com.genesis.unipocket.global.exception.ErrorCode;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountBookQueryService {

	private final AccountBookQueryRepository repository;
	private final ExchangeRateService exchangeRateService;

	public AccountBookQueryResponse getAccountBook(Long accountBookId) {
		return repository
				.findById(accountBookId)
				.orElseThrow(() -> new BusinessException(ErrorCode.ACCOUNT_BOOK_NOT_FOUND));
	}

	public AccountBookDetailResponse getAccountBookDetail(String userId, Long accountBookId) {
		return repository
				.findDetailById(userId, accountBookId)
				.orElseThrow(() -> new BusinessException(ErrorCode.ACCOUNT_BOOK_NOT_FOUND));
	}

	public AccountBookExchangeRateResponse getAccountBookExchangeRate(
			String userId, Long accountBookId) {
		AccountBookDetailResponse accountBookDetail = getAccountBookDetail(userId, accountBookId);

		CurrencyCode baseCurrencyCode = accountBookDetail.baseCountryCode().getCurrencyCode();
		CurrencyCode localCurrencyCode = accountBookDetail.localCountryCode().getCurrencyCode();
		LocalDateTime budgetCreatedAt =
				accountBookDetail.budgetCreatedAt() != null
						? accountBookDetail.budgetCreatedAt()
						: LocalDateTime.now();
		var exchangeRate =
				exchangeRateService.getExchangeRate(
						baseCurrencyCode, localCurrencyCode, budgetCreatedAt);

		return new AccountBookExchangeRateResponse(
				accountBookDetail.baseCountryCode(),
				accountBookDetail.localCountryCode(),
				exchangeRate,
				budgetCreatedAt);
	}

	public List<AccountBookSummaryResponse> getAccountBooks(String userId) {
		// TODO: Implement logic to get mainAccountBookId from User setting or similar
		Long mainAccountBookId = 1L;
		return repository.findAllByUserId(userId, mainAccountBookId);
	}
}
