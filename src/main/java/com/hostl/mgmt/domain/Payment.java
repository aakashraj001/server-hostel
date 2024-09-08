package com.hostl.mgmt.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hostl.mgmt.domain.enumeration.PaymentMode;
import com.hostl.mgmt.domain.enumeration.Status;
import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

/**
 * A Payment.
 */
@Entity
@Table(name = "payment")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Payment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "uuid")
    private UUID uuid;

    @Enumerated(EnumType.STRING)
    @Column(name = "mode")
    private PaymentMode mode;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "value")
    private Long value;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "room", "documents", "parent" }, allowSetters = true)
    private Champ champ;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Payment id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UUID getUuid() {
        return this.uuid;
    }

    public Payment uuid(UUID uuid) {
        this.setUuid(uuid);
        return this;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public PaymentMode getMode() {
        return this.mode;
    }

    public Payment mode(PaymentMode mode) {
        this.setMode(mode);
        return this;
    }

    public void setMode(PaymentMode mode) {
        this.mode = mode;
    }

    public LocalDate getDate() {
        return this.date;
    }

    public Payment date(LocalDate date) {
        this.setDate(date);
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Long getValue() {
        return this.value;
    }

    public Payment value(Long value) {
        this.setValue(value);
        return this;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    public Status getStatus() {
        return this.status;
    }

    public Payment status(Status status) {
        this.setStatus(status);
        return this;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Champ getChamp() {
        return this.champ;
    }

    public void setChamp(Champ champ) {
        this.champ = champ;
    }

    public Payment champ(Champ champ) {
        this.setChamp(champ);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Payment)) {
            return false;
        }
        return getId() != null && getId().equals(((Payment) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Payment{" +
            "id=" + getId() +
            ", uuid='" + getUuid() + "'" +
            ", mode='" + getMode() + "'" +
            ", date='" + getDate() + "'" +
            ", value=" + getValue() +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
