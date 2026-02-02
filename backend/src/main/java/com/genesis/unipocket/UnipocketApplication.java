package com.genesis.unipocket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

// test 용 주석
@EnableJpaAuditing
@SpringBootApplication
public class UnipocketApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnipocketApplication.class, args);
	}
}
