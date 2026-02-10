package com.genesis.unipocket.auth.command.facade.port;

import com.genesis.unipocket.auth.common.dto.LoginResult;
import com.genesis.unipocket.auth.common.dto.oauth.OAuthUserInfo;
import com.genesis.unipocket.global.config.OAuth2Properties.ProviderType;

/**
 * <b>사용자 로그인 처리 포트</b>
 *
 * @author 김동균
 * @since 2026-02-10
 */
public interface UserLoginProcessor {
	LoginResult loginOrRegister(OAuthUserInfo userInfo, ProviderType providerType);
}
