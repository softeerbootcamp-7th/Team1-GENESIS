package com.genesis.unipocket.accountbook.command.facade;

import com.genesis.unipocket.accountbook.command.application.AccountBookService;
import com.genesis.unipocket.accountbook.command.facade.converter.AccountBookFacadeConverter;
import com.genesis.unipocket.accountbook.command.presentation.dto.request.AccountBookCreateRequest;
import com.genesis.unipocket.accountbook.command.presentation.dto.response.AccountBookCreateResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AccountBookOrchestrator {
	private final AccountBookService accountBookService;
	private final AccountBookFacadeConverter converter;

	public AccountBookCreateResponse createAccountBook(
			String userId, AccountBookCreateRequest req) {

		// TODO: User 도메인과 연결 (로그인 필터 구현 이후)
		String username = "유저";

		var params = converter.toCommand(userId, username, req);
		var result = accountBookService.create(params);

		return converter.toRes(result);
	}
}
