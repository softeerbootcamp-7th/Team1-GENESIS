package com.genesis.unipocket.global.exception.oauth;

import com.genesis.unipocket.global.exception.BusinessException;
import com.genesis.unipocket.global.exception.ErrorCode;

/**
 * <b>잘못된 OAuth Provider 예외</b>
 * <p>
 * 지원하지 않는 OAuth Provider를 요청했을 때 발생하는 예외입니다.
 * </p>
 * @author bluefishez
 * @since 2026-01-29
 */
public class InvalidProviderException extends BusinessException {

	public InvalidProviderException() {
		super(ErrorCode.INVALID_OAUTH_PROVIDER);
	}
}
