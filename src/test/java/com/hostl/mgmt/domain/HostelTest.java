package com.hostl.mgmt.domain;

import static com.hostl.mgmt.domain.HostelTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.hostl.mgmt.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class HostelTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Hostel.class);
        Hostel hostel1 = getHostelSample1();
        Hostel hostel2 = new Hostel();
        assertThat(hostel1).isNotEqualTo(hostel2);

        hostel2.setId(hostel1.getId());
        assertThat(hostel1).isEqualTo(hostel2);

        hostel2 = getHostelSample2();
        assertThat(hostel1).isNotEqualTo(hostel2);
    }
}
