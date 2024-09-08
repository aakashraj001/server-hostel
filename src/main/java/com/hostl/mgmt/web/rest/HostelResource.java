package com.hostl.mgmt.web.rest;

import com.hostl.mgmt.domain.Hostel;
import com.hostl.mgmt.repository.HostelRepository;
import com.hostl.mgmt.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.hostl.mgmt.domain.Hostel}.
 */
@RestController
@RequestMapping("/api/hostels")
@Transactional
public class HostelResource {

    private final Logger log = LoggerFactory.getLogger(HostelResource.class);

    private static final String ENTITY_NAME = "hostelMgmtHostel";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final HostelRepository hostelRepository;

    public HostelResource(HostelRepository hostelRepository) {
        this.hostelRepository = hostelRepository;
    }

    /**
     * {@code POST  /hostels} : Create a new hostel.
     *
     * @param hostel the hostel to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new hostel, or with status {@code 400 (Bad Request)} if the hostel has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Hostel> createHostel(@RequestBody Hostel hostel) throws URISyntaxException {
        log.debug("REST request to save Hostel : {}", hostel);
        if (hostel.getId() != null) {
            throw new BadRequestAlertException("A new hostel cannot already have an ID", ENTITY_NAME, "idexists");
        }
        hostel = hostelRepository.save(hostel);
        return ResponseEntity.created(new URI("/api/hostels/" + hostel.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, hostel.getId().toString()))
            .body(hostel);
    }

    /**
     * {@code PUT  /hostels/:id} : Updates an existing hostel.
     *
     * @param id the id of the hostel to save.
     * @param hostel the hostel to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated hostel,
     * or with status {@code 400 (Bad Request)} if the hostel is not valid,
     * or with status {@code 500 (Internal Server Error)} if the hostel couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Hostel> updateHostel(@PathVariable(value = "id", required = false) final Long id, @RequestBody Hostel hostel)
        throws URISyntaxException {
        log.debug("REST request to update Hostel : {}, {}", id, hostel);
        if (hostel.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, hostel.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!hostelRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        hostel = hostelRepository.save(hostel);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, hostel.getId().toString()))
            .body(hostel);
    }

    /**
     * {@code PATCH  /hostels/:id} : Partial updates given fields of an existing hostel, field will ignore if it is null
     *
     * @param id the id of the hostel to save.
     * @param hostel the hostel to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated hostel,
     * or with status {@code 400 (Bad Request)} if the hostel is not valid,
     * or with status {@code 404 (Not Found)} if the hostel is not found,
     * or with status {@code 500 (Internal Server Error)} if the hostel couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Hostel> partialUpdateHostel(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Hostel hostel
    ) throws URISyntaxException {
        log.debug("REST request to partial update Hostel partially : {}, {}", id, hostel);
        if (hostel.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, hostel.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!hostelRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Hostel> result = hostelRepository
            .findById(hostel.getId())
            .map(existingHostel -> {
                if (hostel.getName() != null) {
                    existingHostel.setName(hostel.getName());
                }
                if (hostel.getAddress() != null) {
                    existingHostel.setAddress(hostel.getAddress());
                }
                if (hostel.getCapacity() != null) {
                    existingHostel.setCapacity(hostel.getCapacity());
                }
                if (hostel.getNoOfRooms() != null) {
                    existingHostel.setNoOfRooms(hostel.getNoOfRooms());
                }
                if (hostel.getFloors() != null) {
                    existingHostel.setFloors(hostel.getFloors());
                }

                return existingHostel;
            })
            .map(hostelRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, hostel.getId().toString())
        );
    }

    /**
     * {@code GET  /hostels} : get all the hostels.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of hostels in body.
     */
    @GetMapping("")
    public List<Hostel> getAllHostels() {
        log.debug("REST request to get all Hostels");
        return hostelRepository.findAll();
    }

    /**
     * {@code GET  /hostels/:id} : get the "id" hostel.
     *
     * @param id the id of the hostel to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the hostel, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Hostel> getHostel(@PathVariable("id") Long id) {
        log.debug("REST request to get Hostel : {}", id);
        Optional<Hostel> hostel = hostelRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(hostel);
    }

    /**
     * {@code DELETE  /hostels/:id} : delete the "id" hostel.
     *
     * @param id the id of the hostel to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHostel(@PathVariable("id") Long id) {
        log.debug("REST request to delete Hostel : {}", id);
        hostelRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
