package com.hostl.mgmt.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hostl.mgmt.domain.enumeration.Status;
import com.hostl.mgmt.domain.enumeration.UserType;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Champ.
 */
@Entity
@Table(name = "champ")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Champ implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private UserType type;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Lob
    @Column(name = "address")
    private String address;

    @Column(name = "mobile_no")
    private Long mobileNo;

    @JsonIgnoreProperties(value = { "champ" }, allowSetters = true)
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(unique = true)
    private Room room;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "champ")
    @JsonIgnoreProperties(value = { "champ" }, allowSetters = true)
    private Set<Document> documents = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "room", "documents", "parent" }, allowSetters = true)
    private Champ parent;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Champ id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Champ name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogin() {
        return this.login;
    }

    public Champ login(String login) {
        this.setLogin(login);
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return this.password;
    }

    public Champ password(String password) {
        this.setPassword(password);
        return this;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserType getType() {
        return this.type;
    }

    public Champ type(UserType type) {
        this.setType(type);
        return this;
    }

    public void setType(UserType type) {
        this.type = type;
    }

    public Status getStatus() {
        return this.status;
    }

    public Champ status(Status status) {
        this.setStatus(status);
        return this;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getAddress() {
        return this.address;
    }

    public Champ address(String address) {
        this.setAddress(address);
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getMobileNo() {
        return this.mobileNo;
    }

    public Champ mobileNo(Long mobileNo) {
        this.setMobileNo(mobileNo);
        return this;
    }

    public void setMobileNo(Long mobileNo) {
        this.mobileNo = mobileNo;
    }

    public Room getRoom() {
        return this.room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Champ room(Room room) {
        this.setRoom(room);
        return this;
    }

    public Set<Document> getDocuments() {
        return this.documents;
    }

    public void setDocuments(Set<Document> documents) {
        if (this.documents != null) {
            this.documents.forEach(i -> i.setChamp(null));
        }
        if (documents != null) {
            documents.forEach(i -> i.setChamp(this));
        }
        this.documents = documents;
    }

    public Champ documents(Set<Document> documents) {
        this.setDocuments(documents);
        return this;
    }

    public Champ addDocument(Document document) {
        this.documents.add(document);
        document.setChamp(this);
        return this;
    }

    public Champ removeDocument(Document document) {
        this.documents.remove(document);
        document.setChamp(null);
        return this;
    }

    public Champ getParent() {
        return this.parent;
    }

    public void setParent(Champ champ) {
        this.parent = champ;
    }

    public Champ parent(Champ champ) {
        this.setParent(champ);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Champ)) {
            return false;
        }
        return getId() != null && getId().equals(((Champ) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Champ{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", login='" + getLogin() + "'" +
            ", password='" + getPassword() + "'" +
            ", type='" + getType() + "'" +
            ", status='" + getStatus() + "'" +
            ", address='" + getAddress() + "'" +
            ", mobileNo=" + getMobileNo() +
            "}";
    }
}
