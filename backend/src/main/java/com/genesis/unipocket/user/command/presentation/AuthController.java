package com.genesis.unipocket.user.command.presentation;

import com.genesis.unipocket.global.util.CookieUtil;
import com.genesis.unipocket.user.command.presentation.dto.request.LogoutRequest;
import com.genesis.unipocket.user.command.presentation.dto.request.ReissueRequest;
import com.genesis.unipocket.user.command.presentation.dto.response.LoginResponse;
import com.genesis.unipocket.user.command.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <b>인증 컨트롤러</b>
 * <p>
 * 토큰 재발급, 로그아웃 등 인증 세션 관리 기능을 담당합니다.
 * </p>
 */
@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

	private final AuthService authService;
	private final CookieUtil cookieUtil;

	@Value("${jwt.access-token-expiration}")
	private long accessTokenExpirationMs;

	/**
	 * 토큰 재발급 (Refresh Token Rotation)
	 */
	@PostMapping("/reissue")
	public LoginResponse reissue(
			@RequestBody ReissueRequest request, HttpServletResponse response) {
		log.info("토큰 재발급 요청");

		AuthService.TokenPair tokenPair = authService.reissue(request.getRefreshToken());

		// Access Token 쿠키 갱신
		cookieUtil.addCookie(
				response,
				"access_token",
				tokenPair.accessToken(),
				(int) (accessTokenExpirationMs / 1000));

		// Refresh Token 쿠키 갱신
		cookieUtil.addCookie(
				response, "refresh_token", tokenPair.refreshToken(), 10 * 24 * 60 * 60);

		return LoginResponse.of(
				tokenPair.accessToken(),
				tokenPair.refreshToken(),
				null, // userId는 재발급 시 불필요
				accessTokenExpiresIn());
	}

	/**
	 * 로그아웃 (토큰 블랙리스트 등록)
	 */
	@PostMapping("/logout")
	public void logout(@RequestBody LogoutRequest request, HttpServletResponse response) {
		log.info("로그아웃 요청");

		authService.logout(request.getAccessToken(), request.getRefreshToken());

		// 쿠키 삭제
		cookieUtil.deleteCookie(response, "access_token");
		cookieUtil.deleteCookie(response, "refresh_token");
	}

	/**
	 * Access Token 만료 시간 (초) 계산
	 */
	private long accessTokenExpiresIn() {
		return accessTokenExpirationMs / 1000;
	}
}
