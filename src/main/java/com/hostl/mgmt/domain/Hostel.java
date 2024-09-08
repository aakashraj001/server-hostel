package com.hostl.mgmt.domain;

import jakarta.persistence.*;
import java.io.Serializable;

/**
 * A Hostel.
 */
@Entity
@Table(name = "hostel")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Hostel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "address")
    private String address;

    @Column(name = "capacity")
    private Long capacity;

    @Column(name = "no_of_rooms")
    private Long noOfRooms;

    @Column(name = "floors")
    private Long floors;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Hostel id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Hostel name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return this.address;
    }

    public Hostel address(String address) {
        this.setAddress(address);
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getCapacity() {
        return this.capacity;
    }

    public Hostel capacity(Long capacity) {
        this.setCapacity(capacity);
        return this;
    }

    public void setCapacity(Long capacity) {
        this.capacity = capacity;
    }

    public Long getNoOfRooms() {
        return this.noOfRooms;
    }

    public Hostel noOfRooms(Long noOfRooms) {
        this.setNoOfRooms(noOfRooms);
        return this;
    }

    public void setNoOfRooms(Long noOfRooms) {
        this.noOfRooms = noOfRooms;
    }

    public Long getFloors() {
        return this.floors;
    }

    public Hostel floors(Long floors) {
        this.setFloors(floors);
        return this;
    }

    public void setFloors(Long floors) {
        this.floors = floors;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Hostel)) {
            return false;
        }
        return getId() != null && getId().equals(((Hostel) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Hostel{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", address='" + getAddress() + "'" +
            ", capacity=" + getCapacity() +
            ", noOfRooms=" + getNoOfRooms() +
            ", floors=" + getFloors() +
            "}";
    }
}
