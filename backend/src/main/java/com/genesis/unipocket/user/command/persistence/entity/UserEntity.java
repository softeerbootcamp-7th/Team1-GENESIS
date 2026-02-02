package com.genesis.unipocket.user.command.persistence.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

/**
 * <b>사용자 Entity</b>
 */
@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "profile_img_url", length = 255)
    private String profileImgUrl;

    @Column(nullable = false, length = 20)
    private String role = "ROLE_USER";

    @Column(nullable = false, length = 20)
    private String status = "ACTIVE";

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "last_login_at")
    private LocalDateTime lastLoginAt;

    // 해결 포인트: 기본값을 0L로 설정하거나 nullable = true로 변경
    // 여기서는 ERD를 존중하여 0L을 기본으로 넣었습니다.
    @Column(name = "main_bucket_id", nullable = false)
    private Long mainBucketId = 0L;

    @Builder
    public UserEntity(String email, String name, String profileImgUrl, Long mainBucketId) {
        this.email = email;
        this.name = name;
        this.profileImgUrl = profileImgUrl;
        // 빌더에서 mainBucketId가 null로 들어오면 0L로 방어
        this.mainBucketId = (mainBucketId != null) ? mainBucketId : 0L;
    }

    public void updateProfile(String name, String profileImgUrl) {
        this.name = name;
        this.profileImgUrl = profileImgUrl;
    }

    public void deactivate() {
        this.status = "INACTIVE";
    }
}