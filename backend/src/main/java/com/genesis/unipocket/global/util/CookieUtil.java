package com.genesis.unipocket.global.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

@Component
public class CookieUtil {

	public void addCookie(HttpServletResponse response, String name, String value, int maxAge) {
		Cookie cookie = new Cookie(name, value);
		cookie.setPath("/");
		cookie.setMaxAge(maxAge);
		cookie.setHttpOnly(true);
		// cookie.setSecure(true); // HTTPS only
		response.addCookie(cookie);
	}

	public void deleteCookie(HttpServletResponse response, String name) {
		Cookie cookie = new Cookie(name, null);
		cookie.setPath("/");
		cookie.setMaxAge(0);
		cookie.setHttpOnly(true);
		response.addCookie(cookie);
	}
}
