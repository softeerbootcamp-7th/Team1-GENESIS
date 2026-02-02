package com.genesis.unipocket.accountbook.persistence.entity;

import com.genesis.unipocket.global.base.BaseEntity;
import com.genesis.unipocket.global.common.enums.CountryCode;
import com.genesis.unipocket.global.exception.BusinessException;
import com.genesis.unipocket.global.exception.ErrorCode;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * <b>가계부 JPA 엔티티</b>
 * <p>
 * 가계부 엔티티입니다. <br>
 * 해당 도메인 특성상, 다른 도메인과의 관계를 일으키는 엔티티입니다. <br>
 * 가계부 내 일어나는 도메인 로직을 포함합니다.
 * </p>
 * @author bluefishez
 * @since 2026-02-01
 */
@Table(name = "account_book")
@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AccountBookEntity extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name = "account_book_id")
	private Long id;

	// TODO: User 모델을 받으면 새롭게 주입 예정
	@Column(nullable = false, name = "user_id")
	private Long userId;

	@Column(columnDefinition = "CHAR(4)")
	@Enumerated(value = EnumType.STRING)
	private CountryCode localCountryCode;

	@Column(columnDefinition = "CHAR(4)")
	@Enumerated(value = EnumType.STRING)
	private CountryCode baseCountryCode;

	@Column(nullable = false, length = 255)
	private String title;

	@Column(nullable = true)
	private Integer budget;

	@Column(name = "start_date", nullable = false, columnDefinition = "DATE")
	private LocalDate startDate;

	@Column(name = "end_date", nullable = false, columnDefinition = "DATE")
	private LocalDate endDate;

	public static AccountBookEntity create(
			Long userId,
			String title,
			CountryCode localCountryCode,
			CountryCode baseCountryCode,
			LocalDate startDate,
			LocalDate endDate) {

		AccountBookEntity entity = new AccountBookEntity();

		entity.userId = userId;
		entity.localCountryCode = localCountryCode;
		entity.baseCountryCode = baseCountryCode;

		if (!entity.validateCountryCodes()) {
			throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE);
		}

		entity.updateTitle(title);
		entity.changeAccountBookPeriod(startDate, endDate);

		return entity;
	}

	public void updateTitle(String title) {
		if (title == null) {
			throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE);
		}

		this.title = title.length() > 255 ? title.substring(0, 255) : title;
	}

	public void resetBudget() {
		this.budget = null;
	}

	public void updateBudget(int budget) {
		if (budget < 0) {
			throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE);
		}

		this.budget = budget;
	}

	public boolean isBudgetSet() {
		return this.budget != null;
	}

	private boolean validateCountryCodes() {
		return this.localCountryCode != this.baseCountryCode;
	}

	public void changeAccountBookPeriod(LocalDate startDate, LocalDate endDate) {
		if (startDate.isAfter(endDate)) {
			throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE);
		}

		this.startDate = startDate;
		this.endDate = endDate;
	}
}
