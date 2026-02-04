package com.genesis.unipocket.global.exception;

/**
 * <b>토큰 관련 예외</b>
 *
 * <p>
 * JWT 토큰의 검증, 만료, 블랙리스트 등의 문제 발생 시 사용되는 예외
 */
public class TokenException extends BusinessException {

	public TokenException(ErrorCode errorCode) {
		super(errorCode);
	}
}
