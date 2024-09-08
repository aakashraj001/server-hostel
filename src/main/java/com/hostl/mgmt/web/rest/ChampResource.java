package com.hostl.mgmt.web.rest;

import com.hostl.mgmt.domain.Champ;
import com.hostl.mgmt.repository.ChampRepository;
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
 * REST controller for managing {@link com.hostl.mgmt.domain.Champ}.
 */
@RestController
@RequestMapping("/api/champs")
@Transactional
public class ChampResource {

    private final Logger log = LoggerFactory.getLogger(ChampResource.class);

    private static final String ENTITY_NAME = "hostelMgmtChamp";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ChampRepository champRepository;

    public ChampResource(ChampRepository champRepository) {
        this.champRepository = champRepository;
    }

    /**
     * {@code POST  /champs} : Create a new champ.
     *
     * @param champ the champ to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new champ, or with status {@code 400 (Bad Request)} if the champ has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Champ> createChamp(@RequestBody Champ champ) throws URISyntaxException {
        log.debug("REST request to save Champ : {}", champ);
        if (champ.getId() != null) {
            throw new BadRequestAlertException("A new champ cannot already have an ID", ENTITY_NAME, "idexists");
        }
        champ = champRepository.save(champ);
        return ResponseEntity.created(new URI("/api/champs/" + champ.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, champ.getId().toString()))
            .body(champ);
    }

    /**
     * {@code PUT  /champs/:id} : Updates an existing champ.
     *
     * @param id the id of the champ to save.
     * @param champ the champ to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated champ,
     * or with status {@code 400 (Bad Request)} if the champ is not valid,
     * or with status {@code 500 (Internal Server Error)} if the champ couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Champ> updateChamp(@PathVariable(value = "id", required = false) final Long id, @RequestBody Champ champ)
        throws URISyntaxException {
        log.debug("REST request to update Champ : {}, {}", id, champ);
        if (champ.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, champ.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!champRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        champ = champRepository.save(champ);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, champ.getId().toString()))
            .body(champ);
    }

    /**
     * {@code PATCH  /champs/:id} : Partial updates given fields of an existing champ, field will ignore if it is null
     *
     * @param id the id of the champ to save.
     * @param champ the champ to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated champ,
     * or with status {@code 400 (Bad Request)} if the champ is not valid,
     * or with status {@code 404 (Not Found)} if the champ is not found,
     * or with status {@code 500 (Internal Server Error)} if the champ couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Champ> partialUpdateChamp(@PathVariable(value = "id", required = false) final Long id, @RequestBody Champ champ)
        throws URISyntaxException {
        log.debug("REST request to partial update Champ partially : {}, {}", id, champ);
        if (champ.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, champ.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!champRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Champ> result = champRepository
            .findById(champ.getId())
            .map(existingChamp -> {
                if (champ.getName() != null) {
                    existingChamp.setName(champ.getName());
                }
                if (champ.getLogin() != null) {
                    existingChamp.setLogin(champ.getLogin());
                }
                if (champ.getPassword() != null) {
                    existingChamp.setPassword(champ.getPassword());
                }
                if (champ.getType() != null) {
                    existingChamp.setType(champ.getType());
                }
                if (champ.getStatus() != null) {
                    existingChamp.setStatus(champ.getStatus());
                }
                if (champ.getAddress() != null) {
                    existingChamp.setAddress(champ.getAddress());
                }
                if (champ.getMobileNo() != null) {
                    existingChamp.setMobileNo(champ.getMobileNo());
                }

                return existingChamp;
            })
            .map(champRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, champ.getId().toString())
        );
    }

    /**
     * {@code GET  /champs} : get all the champs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of champs in body.
     */
    @GetMapping("")
    public List<Champ> getAllChamps() {
        log.debug("REST request to get all Champs");
        return champRepository.findAll();
    }

    /**
     * {@code GET  /champs/:id} : get the "id" champ.
     *
     * @param id the id of the champ to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the champ, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Champ> getChamp(@PathVariable("id") Long id) {
        log.debug("REST request to get Champ : {}", id);
        Optional<Champ> champ = champRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(champ);
    }

    /**
     * {@code DELETE  /champs/:id} : delete the "id" champ.
     *
     * @param id the id of the champ to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChamp(@PathVariable("id") Long id) {
        log.debug("REST request to delete Champ : {}", id);
        champRepository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
