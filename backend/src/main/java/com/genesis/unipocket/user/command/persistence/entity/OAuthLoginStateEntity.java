package com.genesis.unipocket.user.command.persistence.entity;

import com.genesis.unipocket.global.config.OAuth2Properties.ProviderType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

/**
 * <b>OAuth 로그인 State Entity</b>
 * @author 김동균
 * @since 2026-01-30
 */
@Entity
@Table(name = "oauth_login_states")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class OAuthLoginStateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String state;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ProviderType providerType;

    @Column(nullable = false)
    private LocalDateTime expiresAt;

    @Column(nullable = false)
    private Boolean isUsed = false;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Builder
    public OAuthLoginStateEntity(String state, ProviderType providerType, LocalDateTime expiresAt) {
        this.state = state;
        this.providerType = providerType;
        this.expiresAt = expiresAt;
    }

    public void markAsUsed() {
        this.isUsed = true;
    }

    public boolean isExpired() {
        return LocalDateTime.now().isAfter(expiresAt);
    }
}