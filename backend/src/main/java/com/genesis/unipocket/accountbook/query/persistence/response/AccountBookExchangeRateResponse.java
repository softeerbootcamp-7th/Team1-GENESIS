package com.genesis.unipocket.accountbook.query.persistence.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.genesis.unipocket.global.common.enums.CountryCode;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public record AccountBookExchangeRateResponse(
		CountryCode baseCountryCode,
		CountryCode localCountryCode,
		BigDecimal exchangeRate,
		@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
				LocalDateTime budgetCreatedAt) {}
