<<<<<<<< HEAD:backend/src/main/java/com/genesis/unipocket/auth/common/dto/oauth/OAuthUserInfo.java
package com.genesis.unipocket.auth.common.dto.oauth;
========
package com.genesis.unipocket.user.common.dto.oauth;
>>>>>>>> origin/backend-service:backend/src/main/java/com/genesis/unipocket/user/common/dto/oauth/OAuthUserInfo.java

/**
 * <b>OAuth 사용자 정보 인터페이스</b>
 *
 * @author 김동균
 * @since 2026-01-30
 */
public interface OAuthUserInfo {

	String getProviderId();

	String getEmail();

	String getName();

	String getProfileImageUrl();
}
