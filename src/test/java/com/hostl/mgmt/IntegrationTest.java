package com.hostl.mgmt;

import com.hostl.mgmt.config.AsyncSyncConfiguration;
import com.hostl.mgmt.config.EmbeddedKafka;
import com.hostl.mgmt.config.EmbeddedSQL;
import com.hostl.mgmt.config.JacksonConfiguration;
import com.hostl.mgmt.config.TestSecurityConfiguration;
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
@EmbeddedKafka
public @interface IntegrationTest {
}
