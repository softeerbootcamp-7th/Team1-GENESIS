package com.genesis.unipocket.accountbook.presentation.dto.request;

import com.genesis.unipocket.global.common.enums.CountryCode;
import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * <b>POST /api/account-books 입력</b>
 * @author bluefishez
 * @since 2026-01-30
 */
@Getter
@AllArgsConstructor
public class CreateAccountBookReq {

	@NotBlank
	@Size(max = 255)
	private final String title;

	@NotNull
	private final CountryCode localCountryCode;

	@NotNull
	private final CountryCode baseCountryCode;

	@NotNull
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private final LocalDate startDate;

	@NotNull
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private final LocalDate endDate;
}
