package ddmtchr.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@EnableWebSecurity
@PropertySource("classpath:application.properties")
public class SecurityConfig {
    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")
    private String jwkSetUri;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        JwtAuthenticationConverter jwtConverter = new JwtAuthenticationConverter();
        http.csrf().disable().authorizeHttpRequests(authorizeRequests ->
                authorizeRequests.requestMatchers("/points/**").permitAll().anyRequest().authenticated()
        );
        http.oauth2ResourceServer().jwt().jwtAuthenticationConverter(jwtConverter).jwkSetUri(jwkSetUri);
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        return http.build();
    }
}
