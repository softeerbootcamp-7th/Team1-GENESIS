package com.genesis.unipocket.user.command.presentation.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <b>로그인 응답 DTO</b>
 * @author 김동균
 * @since 2026-01-30
 */
@Getter
@AllArgsConstructor
public class LoginResponse {

    private String accessToken;

    private String refreshToken;

    private Long userId;
}