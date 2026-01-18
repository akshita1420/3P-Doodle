package com._P_Doodle.Backend.Security;

import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;



@Component
public class JwtUtil {

   private Jwt jwt(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication!=null && !(authentication.getCredentials() instanceof Jwt)){
            throw new IllegalArgumentException("Invalid JWT Token OR CHECK IF TOKEN IS PRESENT");
        }
        return (Jwt) authentication.getCredentials();
    }

    public Map<String,Object> GetClaims(){
        return jwt().getClaims();
    }
    public String GetUserId(){
        return jwt().getSubject();
    }

    public String GetEmail(){
        return jwt().getClaimAsString("email");
    }
    
}