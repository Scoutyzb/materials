package com.xjtu.materials.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Author: Liang
 * @Description:
 * @Date: Created in 20:13 2019/1/20
 */
@Configuration
public class WebAppConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/cif/**").addResourceLocations("file:D:\\data\\cif\\");
        registry.addResourceHandler("/cif/**").addResourceLocations("file:D:\\data\\");
    }

//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedMethods("*")
//                .allowedOrigins("*")
//                .allowedHeaders("*");
//    }
}
