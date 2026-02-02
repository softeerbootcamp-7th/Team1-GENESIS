package com.genesis.unipocket.accountbook.facade.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.genesis.unipocket.accountbook.persistence.entity.AccountBookEntity;
import com.genesis.unipocket.global.common.enums.CountryCode;
import java.time.LocalDate;
import lombok.Builder;
import lombok.Getter;

/**
 * <b>가계부 공통 DTO</b>
 * <p>
 * 퍼사드 <-> 서비스 간 통신에 사용되는 DTO
 * 가계부 퍼사드 계층에서 입출력에 사용되는 DTO
 * </p>
 * @author bluefishez
 * @since 2026-01-30
 */
@Builder
@Getter
public class AccountBookDto {

	private final Long id;

	private final Long userId;

	private final String title;

	private final CountryCode localCountryCode;

	private final CountryCode baseCountryCode;

	private final Integer budget;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private final LocalDate startDate;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private final LocalDate endDate;

	public static AccountBookDto from(AccountBookEntity entity) {
		var builder =
				AccountBookDto.builder()
						.id(entity.getId())
						.userId(entity.getUserId())
						.title(entity.getTitle())
						.localCountryCode(entity.getLocalCountryCode())
						.baseCountryCode(entity.getBaseCountryCode())
						.startDate(entity.getStartDate())
						.endDate(entity.getEndDate());

		if (entity.getBudget() != null) {
			builder.budget(entity.getBudget());
		}

		return builder.build();
	}
}
