package com.aarti.expensetracker.util;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import java.nio.charset.StandardCharsets;
import  io.jsonwebtoken.Claims;
import java.util.function.Function;
import java.util.Date;
import javax.crypto.SecretKey;

@Component
public class JwtUtil {
    private final SecretKey secretKey = Keys.hmacShaKeyFor("ThisIsASecretKeyForJwtAuthentication123456".getBytes());
    public String generateToken(String email){
        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis()+86400000))
                .signWith(secretKey)
                .compact();
    }
    private Claims extractAllClaims(String token){
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
    public String extractUsername(String token){
        return extractAllClaims(token).getSubject();
    }
    public boolean validateToken(String token, String email){
        return extractUsername(token).equals(email);
    }
}
