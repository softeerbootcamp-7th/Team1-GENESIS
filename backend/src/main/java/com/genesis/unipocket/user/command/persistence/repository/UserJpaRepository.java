package com.genesis.unipocket.user.command.persistence.repository;

import com.genesis.unipocket.user.command.persistence.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * <b>사용자 Repository</b>
 * @author 김동균
 * @since 2026-01-30
 */
public interface UserJpaRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmail(String email);

    boolean existsByEmail(String email);
}