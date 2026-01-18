package com._P_Doodle.Backend.Security;

import java.beans.Customizer;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;


@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
        //enabling cors as domains are different for frontend and backend
            .csrf(csrf -> csrf.disable())
            .cors(cors -> {})
            .sessionManagement(
                httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer
                    .sessionCreationPolicy(org.springframework.security.config.http.SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/Home/**").authenticated()
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2-> oauth2.jwt(jwt -> {}))
            .build();

        
    }
    
}
