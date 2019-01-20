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
        //registry.addResourceHandler("/images/**").addResourceLocations("file:E:\\IDEA\\IntelliJ IDEA 2018.2\\workspace\\pic_gradient\\src\\main\\resources\\static\\images\\");
        registry.addResourceHandler("/cif/**").addResourceLocations("D:\\cif\\");
    }
}
