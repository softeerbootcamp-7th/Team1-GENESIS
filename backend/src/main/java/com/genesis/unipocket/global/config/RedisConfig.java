package com.genesis.unipocket.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

/**
 * <b>Redis 설정</b>
 *
 * <p>
 * 토큰 블랙리스트 관리를 위한 Redis 연결 설정
 */
@Configuration
public class RedisConfig {

	/**
	 * Redis에 문자열 데이터를 저장하기 위한 RedisTemplate 빈
	 *
	 * @param connectionFactory Redis 연결 팩토리
	 * @return RedisTemplate<String, String>
	 */
	@Bean
	public RedisTemplate<String, String> redisTemplate(RedisConnectionFactory connectionFactory) {
		RedisTemplate<String, String> template = new RedisTemplate<>();
		template.setConnectionFactory(connectionFactory);

		// Key와 Value 모두 String으로 직렬화
		StringRedisSerializer serializer = new StringRedisSerializer();
		template.setKeySerializer(serializer);
		template.setValueSerializer(serializer);
		template.setHashKeySerializer(serializer);
		template.setHashValueSerializer(serializer);

		template.afterPropertiesSet();
		return template;
	}
}
