package com.genesis.unipocket.user.command.persistence.repository;

import com.genesis.unipocket.global.config.OAuth2Properties.ProviderType;
import com.genesis.unipocket.user.command.persistence.entity.SocialAuthEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * <b>소셜 인증 Repository</b>
 * @author 김동균
 * @since 2026-01-30
 */
public interface SocialAuthJpaRepository extends JpaRepository<SocialAuthEntity, Long> {

    Optional<SocialAuthEntity> findByProviderTypeAndProviderId(
            ProviderType providerType,
            String providerId
    );

    boolean existsByProviderTypeAndProviderId(
            ProviderType providerType,
            String providerId
    );
}