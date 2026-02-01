package com.genesis.unipocket.user.command.persistence.repository;

import com.genesis.unipocket.user.command.persistence.entity.UserEntity;
import com.genesis.unipocket.user.command.persistence.entity.UserTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * <b>사용자 토큰 Repository</b>
 * @author 김동균
 * @since 2026-01-30
 */
public interface UserTokenJpaRepository extends JpaRepository<UserTokenEntity, Long> {

    Optional<UserTokenEntity> findByRefreshToken(String refreshToken);

    Optional<UserTokenEntity> findByUserAndIsRevokedFalse(UserEntity user);
}