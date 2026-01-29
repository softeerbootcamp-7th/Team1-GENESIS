package com.genesis.unipocket.global.config;

import java.time.Duration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestClient;

/**
 * RestClient 설정
 * OAuth2 Provider (Google, Kakao)와 HTTP 통신을 위한 RestClient Bean 생성
 */
@Configuration
public class RestClientConfig {

	@Bean
	public RestClient restClient() {
		return RestClient.builder().requestFactory(clientHttpRequestFactory()).build();
	}

	/**
	 * HTTP 요청 팩토리 설정
	 * - 연결 타임아웃: 5초
	 * - 읽기 타임아웃: 10초
	 */
	private ClientHttpRequestFactory clientHttpRequestFactory() {
		SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
		factory.setConnectTimeout(Duration.ofSeconds(5)); // 연결 타임아웃
		factory.setReadTimeout(Duration.ofSeconds(10)); // 읽기 타임아웃
		return factory;
	}
}
