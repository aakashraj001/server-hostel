package com.hostl.mgmt.domain;

import static com.hostl.mgmt.domain.ChampTestSamples.*;
import static com.hostl.mgmt.domain.DocumentTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.hostl.mgmt.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class DocumentTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Document.class);
        Document document1 = getDocumentSample1();
        Document document2 = new Document();
        assertThat(document1).isNotEqualTo(document2);

        document2.setId(document1.getId());
        assertThat(document1).isEqualTo(document2);

        document2 = getDocumentSample2();
        assertThat(document1).isNotEqualTo(document2);
    }

    @Test
    void champTest() throws Exception {
        Document document = getDocumentRandomSampleGenerator();
        Champ champBack = getChampRandomSampleGenerator();

        document.setChamp(champBack);
        assertThat(document.getChamp()).isEqualTo(champBack);

        document.champ(null);
        assertThat(document.getChamp()).isNull();
    }
}
