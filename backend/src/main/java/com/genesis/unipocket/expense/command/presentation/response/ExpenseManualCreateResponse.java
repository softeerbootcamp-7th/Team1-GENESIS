package com.genesis.unipocket.expense.command.presentation.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.genesis.unipocket.expense.command.application.result.ExpenseResult;
import com.genesis.unipocket.global.common.enums.Category;
import com.genesis.unipocket.global.common.enums.CurrencyCode;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public record ExpenseManualCreateResponse(
		Long expenseId,
		Long accountBookId,
		String merchantName,
		Category category,
		PaymentMethodResponse paymentMethod,
		BigDecimal localCurrencyAmount,
		CurrencyCode localCurrencyCode,
		BigDecimal baseCurrencyAmount,
		CurrencyCode baseCurrencyCode,
		@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'") LocalDateTime occurredAt) {

	public static ExpenseManualCreateResponse from(ExpenseResult result) {
		return new ExpenseManualCreateResponse(
				result.expenseId(),
				result.accountBookId(),
				result.displayMerchantName() != null
						? result.displayMerchantName()
						: result.merchantName(),
				result.category(),
				PaymentMethodResponse.from(
						result.userCardId(),
						result.cardCompany(),
						result.cardLabel(),
						result.cardLastDigits()),
				result.localCurrencyAmount(),
				result.localCurrencyCode(),
				result.baseCurrencyAmount(),
				result.baseCurrencyCode(),
				result.occurredAt());
	}
}
