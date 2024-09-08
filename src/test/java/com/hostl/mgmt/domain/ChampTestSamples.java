package com.hostl.mgmt.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class ChampTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Champ getChampSample1() {
        return new Champ().id(1L).name("name1").login("login1").password("password1").mobileNo(1L);
    }

    public static Champ getChampSample2() {
        return new Champ().id(2L).name("name2").login("login2").password("password2").mobileNo(2L);
    }

    public static Champ getChampRandomSampleGenerator() {
        return new Champ()
            .id(longCount.incrementAndGet())
            .name(UUID.randomUUID().toString())
            .login(UUID.randomUUID().toString())
            .password(UUID.randomUUID().toString())
            .mobileNo(longCount.incrementAndGet());
    }
}
