package com.genesis.unipocket.user.command.facade.provide;

import com.genesis.unipocket.auth.command.facade.port.UserLoginProcessor;
import com.genesis.unipocket.auth.common.dto.LoginResult;
import com.genesis.unipocket.auth.common.dto.oauth.OAuthUserInfo;
import com.genesis.unipocket.global.config.OAuth2Properties.ProviderType;
import com.genesis.unipocket.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * <b>사용자 로그인 Provider</b>
 *
 * @author 김동균
 * @since 2026-02-10
 */
@Component
@RequiredArgsConstructor
public class UserLoginProvider implements UserLoginProcessor {

	private final UserService userService;

	@Override
	public LoginResult loginOrRegister(OAuthUserInfo userInfo, ProviderType providerType) {
		return userService.loginOrRegister(userInfo, providerType);
	}
}
