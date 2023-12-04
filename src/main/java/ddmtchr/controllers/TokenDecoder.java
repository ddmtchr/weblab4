package ddmtchr.controllers;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

@Component
public class TokenDecoder {
    private final String PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2riQIqon4MP5pt0H13fUDJQdGKHZbnKZ0lEAE3N5bLXx53qn4VX7QzS2qxgu0F+3ac+au89lutJbQNnRKQrgvwhViurhrBkuhZ4HkBq5lACixHaqD/kQNt76bZPiewWUwQkv124FKkKrr6jhWISbilrkF8jlTJag8tXFK9gbsVIOv2OLBHPrRUcfXPnkpPHnKKKrGZgTzl+LqxQO1HCETSskFTVZYO0wU72Dp1F4oxxOYyE+s3OfDocFaxtw4EtN5XhRtfsi5s4jk/hct9xcZ2ZDIrEFaAkpQ3AT+1nkYlmTFXA9EGD3Adldasvz3XXkkcYvRs0NjSNKghw7gcZjmQIDAQAB";

    public String getUsernameFromAuth(String auth) {
        String token = auth.substring(7);
        Jws<Claims> claimsJws = Jwts.parser().setSigningKey(getPublicKey(PUBLIC_KEY)).parseClaimsJws(token);
        return claimsJws.getBody().get("preferred_username", String.class);
    }

    private PublicKey getPublicKey(String publicKeyString) {
        try {
            byte[] keyBytes = Base64.getDecoder().decode(publicKeyString);
            X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            return keyFactory.generatePublic(keySpec);
        } catch (Exception e) {
            throw new RuntimeException("Failed to get public key", e);
        }
    }
}
