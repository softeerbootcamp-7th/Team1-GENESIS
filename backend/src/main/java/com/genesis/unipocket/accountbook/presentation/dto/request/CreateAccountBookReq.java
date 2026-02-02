package com.genesis.unipocket.accountbook.presentation.dto.request;

import com.genesis.unipocket.global.common.enums.CountryCode;
import com.genesis.unipocket.global.exception.ErrorCode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * <b>POST /api/account-books 입력</b>
 *
 * @author bluefishez
 * @since 2026-01-30
 */
public record CreateAccountBookReq(
		@NotBlank(message = CODE) @Size(max = 255, message = CODE) String title,
		@NotNull(message = CODE) CountryCode localCountryCode,
		@NotNull(message = CODE) CountryCode baseCountryCode,
		@DateTimeFormat(pattern = "yyyy-MM-dd") @NotNull(message = CODE) LocalDate startDate,
		@DateTimeFormat(pattern = "yyyy-MM-dd") @NotNull(message = CODE) LocalDate endDate) {

	public static final String CODE = ErrorCode.CodeLiterals.ACCOUNT_BOOK_CREATE_VALIDATION_FAILED;
}
