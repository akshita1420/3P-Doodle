package com._P_Doodle.Backend.Security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.util.Date;

import java.util.function.Function;

import javax.crypto.SecretKey;

@Component
public class JwtUtil {

    public <T> T ExtractClaims(@AutheJwt token){
        return token.getClaims();
    }

    //Single claim extraction
    private <T> T ExtractClaim(String token , Function<Claims,T> claimsResolver) {
        final Claims claims = ExtractallClaims(token);
        return claimsResolver.apply(claims);
    }

    //Extracts username from the token
    public String ExtractUsername(String token){
        return ExtractClaim(token,Claims::getSubject);
    }

     



    //Extracting expiration date from token
    //Need to switch to Instant for better time handling and readablility 
    private Date extractExpiration(String token) {
        return ExtractClaim(token,Claims::getExpiration);
    }

   
}