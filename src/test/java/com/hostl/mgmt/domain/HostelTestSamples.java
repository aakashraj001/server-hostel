package com.hostl.mgmt.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class HostelTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Hostel getHostelSample1() {
        return new Hostel().id(1L).name("name1").capacity(1L).noOfRooms(1L).floors(1L);
    }

    public static Hostel getHostelSample2() {
        return new Hostel().id(2L).name("name2").capacity(2L).noOfRooms(2L).floors(2L);
    }

    public static Hostel getHostelRandomSampleGenerator() {
        return new Hostel()
            .id(longCount.incrementAndGet())
            .name(UUID.randomUUID().toString())
            .capacity(longCount.incrementAndGet())
            .noOfRooms(longCount.incrementAndGet())
            .floors(longCount.incrementAndGet());
    }
}
