package com.genesis.unipocket.accountbook;

import com.genesis.unipocket.accountbook.dto.request.CreateAccountBookReq;
import com.genesis.unipocket.accountbook.dto.response.CreateAccountBookRes;
import com.genesis.unipocket.accountbook.facade.AccountBookFacade;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/account-books")
public class AccountBookController {

	private final AccountBookFacade accountBookFacade;

	@PostMapping
	public ResponseEntity<CreateAccountBookRes> createAccountBook(
			@Valid @RequestBody CreateAccountBookReq req) {

		long userId = 1L;

		var accountDto = accountBookFacade.createAccountBook(userId, req);

		return ResponseEntity.status(HttpStatus.CREATED)
				.body(CreateAccountBookRes.from(accountDto));
	}
}
