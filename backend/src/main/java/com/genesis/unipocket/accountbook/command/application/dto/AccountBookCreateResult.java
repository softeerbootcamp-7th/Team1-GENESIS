package com.genesis.unipocket.accountbook.command.application.dto;

import com.genesis.unipocket.global.common.enums.CountryCode;
import java.time.LocalDate;

public record AccountBookCreateResult(
		Long accountBookId,
		String userId,
		String title,
		CountryCode localCountryCode,
		CountryCode baseCountryCode,
		Integer budget,
		LocalDate startDate,
		LocalDate endDate) {}
