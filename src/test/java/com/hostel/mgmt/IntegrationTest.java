package com.hostel.mgmt;

import com.hostel.mgmt.config.AsyncSyncConfiguration;
import com.hostel.mgmt.config.EmbeddedSQL;
import com.hostel.mgmt.config.JacksonConfiguration;
import com.hostel.mgmt.config.TestSecurityConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = { HostelMgmtApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class }
)
@EmbeddedSQL
public @interface IntegrationTest {
}
