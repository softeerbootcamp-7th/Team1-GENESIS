package com.genesis.unipocket.widget.query.persistence.response;

import com.genesis.unipocket.global.common.enums.CountryCode;
import java.math.BigDecimal;
import lombok.Builder;

@Builder
public record BudgetWidgetResponse(
		BigDecimal budget,
		CountryCode baseCountryCode,
		CountryCode localCountryCode,
		BigDecimal baseSpentAmount,
		BigDecimal localSpentAmount) {}
