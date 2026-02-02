package com.genesis.unipocket.accountbook.persistence.repository;

import com.genesis.unipocket.accountbook.persistence.entity.AccountBookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountBookJpaRepository extends JpaRepository<AccountBookEntity, Long> {}
