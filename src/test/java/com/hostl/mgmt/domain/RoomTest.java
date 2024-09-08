package com.hostl.mgmt.domain;

import static com.hostl.mgmt.domain.ChampTestSamples.*;
import static com.hostl.mgmt.domain.RoomTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.hostl.mgmt.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class RoomTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Room.class);
        Room room1 = getRoomSample1();
        Room room2 = new Room();
        assertThat(room1).isNotEqualTo(room2);

        room2.setId(room1.getId());
        assertThat(room1).isEqualTo(room2);

        room2 = getRoomSample2();
        assertThat(room1).isNotEqualTo(room2);
    }

    @Test
    void champTest() throws Exception {
        Room room = getRoomRandomSampleGenerator();
        Champ champBack = getChampRandomSampleGenerator();

        room.setChamp(champBack);
        assertThat(room.getChamp()).isEqualTo(champBack);
        assertThat(champBack.getRoom()).isEqualTo(room);

        room.champ(null);
        assertThat(room.getChamp()).isNull();
        assertThat(champBack.getRoom()).isNull();
    }
}
