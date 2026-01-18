package com._P_Doodle.Backend.Security;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:5173", "https://3pdoodle.vercel.app") // Frontend
                                                                                                                 // origins
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                // allowCredentials is set to false to avoid issues with cookies in cross-origin
                // requests
                // as we are not using cookies for authentication here
                .allowCredentials(false);
    }

}
