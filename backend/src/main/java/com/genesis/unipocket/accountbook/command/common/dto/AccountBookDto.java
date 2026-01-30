package com.genesis.unipocket.accountbook.command.common.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.genesis.unipocket.global.common.enums.CountryCode;
import java.time.LocalDate;
import lombok.Builder;
import lombok.Data;

/**
 * <b>가계부 공통 DTO</b>
 * <p>
 * 여러 퍼사드 계층에서 통신할 때 사용
 * </p>
 * @author bluefishez
 * @since 2026-01-30
 */
@Builder
@Data
public class AccountBookDto {

	private final Long id;

	private final Long userId;

	private final String title;

	private final CountryCode localCountryCode;

	private final CountryCode baseCountryCode;

	private final int budget;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-DD")
	private final LocalDate startDate;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-DD")
	private final LocalDate endDate;
}
