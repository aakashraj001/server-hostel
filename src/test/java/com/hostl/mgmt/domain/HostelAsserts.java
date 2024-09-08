package com.hostl.mgmt.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class HostelAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertHostelAllPropertiesEquals(Hostel expected, Hostel actual) {
        assertHostelAutoGeneratedPropertiesEquals(expected, actual);
        assertHostelAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertHostelAllUpdatablePropertiesEquals(Hostel expected, Hostel actual) {
        assertHostelUpdatableFieldsEquals(expected, actual);
        assertHostelUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertHostelAutoGeneratedPropertiesEquals(Hostel expected, Hostel actual) {
        assertThat(expected)
            .as("Verify Hostel auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertHostelUpdatableFieldsEquals(Hostel expected, Hostel actual) {
        assertThat(expected)
            .as("Verify Hostel relevant properties")
            .satisfies(e -> assertThat(e.getName()).as("check name").isEqualTo(actual.getName()))
            .satisfies(e -> assertThat(e.getAddress()).as("check address").isEqualTo(actual.getAddress()))
            .satisfies(e -> assertThat(e.getCapacity()).as("check capacity").isEqualTo(actual.getCapacity()))
            .satisfies(e -> assertThat(e.getNoOfRooms()).as("check noOfRooms").isEqualTo(actual.getNoOfRooms()))
            .satisfies(e -> assertThat(e.getFloors()).as("check floors").isEqualTo(actual.getFloors()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertHostelUpdatableRelationshipsEquals(Hostel expected, Hostel actual) {}
}