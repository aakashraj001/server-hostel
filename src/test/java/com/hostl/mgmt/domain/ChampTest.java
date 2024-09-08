package com.hostl.mgmt.domain;

import static com.hostl.mgmt.domain.ChampTestSamples.*;
import static com.hostl.mgmt.domain.ChampTestSamples.*;
import static com.hostl.mgmt.domain.DocumentTestSamples.*;
import static com.hostl.mgmt.domain.RoomTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.hostl.mgmt.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class ChampTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Champ.class);
        Champ champ1 = getChampSample1();
        Champ champ2 = new Champ();
        assertThat(champ1).isNotEqualTo(champ2);

        champ2.setId(champ1.getId());
        assertThat(champ1).isEqualTo(champ2);

        champ2 = getChampSample2();
        assertThat(champ1).isNotEqualTo(champ2);
    }

    @Test
    void roomTest() throws Exception {
        Champ champ = getChampRandomSampleGenerator();
        Room roomBack = getRoomRandomSampleGenerator();

        champ.setRoom(roomBack);
        assertThat(champ.getRoom()).isEqualTo(roomBack);

        champ.room(null);
        assertThat(champ.getRoom()).isNull();
    }

    @Test
    void documentTest() throws Exception {
        Champ champ = getChampRandomSampleGenerator();
        Document documentBack = getDocumentRandomSampleGenerator();

        champ.addDocument(documentBack);
        assertThat(champ.getDocuments()).containsOnly(documentBack);
        assertThat(documentBack.getChamp()).isEqualTo(champ);

        champ.removeDocument(documentBack);
        assertThat(champ.getDocuments()).doesNotContain(documentBack);
        assertThat(documentBack.getChamp()).isNull();

        champ.documents(new HashSet<>(Set.of(documentBack)));
        assertThat(champ.getDocuments()).containsOnly(documentBack);
        assertThat(documentBack.getChamp()).isEqualTo(champ);

        champ.setDocuments(new HashSet<>());
        assertThat(champ.getDocuments()).doesNotContain(documentBack);
        assertThat(documentBack.getChamp()).isNull();
    }

    @Test
    void parentTest() throws Exception {
        Champ champ = getChampRandomSampleGenerator();
        Champ champBack = getChampRandomSampleGenerator();

        champ.setParent(champBack);
        assertThat(champ.getParent()).isEqualTo(champBack);

        champ.parent(null);
        assertThat(champ.getParent()).isNull();
    }
}
