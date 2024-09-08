package com.hostl.mgmt.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hostl.mgmt.domain.enumeration.RoomType;
import jakarta.persistence.*;
import java.io.Serializable;

/**
 * A Room.
 */
@Entity
@Table(name = "room")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Room implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "room_no")
    private String roomNo;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private RoomType type;

    @Column(name = "cost")
    private Float cost;

    @Column(name = "beds")
    private Long beds;

    @Column(name = "floor")
    private Integer floor;

    @JsonIgnoreProperties(value = { "room", "documents", "parent" }, allowSetters = true)
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "room")
    private Champ champ;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Room id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomNo() {
        return this.roomNo;
    }

    public Room roomNo(String roomNo) {
        this.setRoomNo(roomNo);
        return this;
    }

    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }

    public RoomType getType() {
        return this.type;
    }

    public Room type(RoomType type) {
        this.setType(type);
        return this;
    }

    public void setType(RoomType type) {
        this.type = type;
    }

    public Float getCost() {
        return this.cost;
    }

    public Room cost(Float cost) {
        this.setCost(cost);
        return this;
    }

    public void setCost(Float cost) {
        this.cost = cost;
    }

    public Long getBeds() {
        return this.beds;
    }

    public Room beds(Long beds) {
        this.setBeds(beds);
        return this;
    }

    public void setBeds(Long beds) {
        this.beds = beds;
    }

    public Integer getFloor() {
        return this.floor;
    }

    public Room floor(Integer floor) {
        this.setFloor(floor);
        return this;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Champ getChamp() {
        return this.champ;
    }

    public void setChamp(Champ champ) {
        if (this.champ != null) {
            this.champ.setRoom(null);
        }
        if (champ != null) {
            champ.setRoom(this);
        }
        this.champ = champ;
    }

    public Room champ(Champ champ) {
        this.setChamp(champ);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Room)) {
            return false;
        }
        return getId() != null && getId().equals(((Room) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Room{" +
            "id=" + getId() +
            ", roomNo='" + getRoomNo() + "'" +
            ", type='" + getType() + "'" +
            ", cost=" + getCost() +
            ", beds=" + getBeds() +
            ", floor=" + getFloor() +
            "}";
    }
}
