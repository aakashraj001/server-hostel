package com.hostl.mgmt.web.rest;

import static com.hostl.mgmt.domain.HostelAsserts.*;
import static com.hostl.mgmt.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hostl.mgmt.IntegrationTest;
import com.hostl.mgmt.domain.Hostel;
import com.hostl.mgmt.repository.HostelRepository;
import jakarta.persistence.EntityManager;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link HostelResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class HostelResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_ADDRESS = "AAAAAAAAAA";
    private static final String UPDATED_ADDRESS = "BBBBBBBBBB";

    private static final Long DEFAULT_CAPACITY = 1L;
    private static final Long UPDATED_CAPACITY = 2L;

    private static final Long DEFAULT_NO_OF_ROOMS = 1L;
    private static final Long UPDATED_NO_OF_ROOMS = 2L;

    private static final Long DEFAULT_FLOORS = 1L;
    private static final Long UPDATED_FLOORS = 2L;

    private static final String ENTITY_API_URL = "/api/hostels";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private HostelRepository hostelRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restHostelMockMvc;

    private Hostel hostel;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Hostel createEntity(EntityManager em) {
        Hostel hostel = new Hostel()
            .name(DEFAULT_NAME)
            .address(DEFAULT_ADDRESS)
            .capacity(DEFAULT_CAPACITY)
            .noOfRooms(DEFAULT_NO_OF_ROOMS)
            .floors(DEFAULT_FLOORS);
        return hostel;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Hostel createUpdatedEntity(EntityManager em) {
        Hostel hostel = new Hostel()
            .name(UPDATED_NAME)
            .address(UPDATED_ADDRESS)
            .capacity(UPDATED_CAPACITY)
            .noOfRooms(UPDATED_NO_OF_ROOMS)
            .floors(UPDATED_FLOORS);
        return hostel;
    }

    @BeforeEach
    public void initTest() {
        hostel = createEntity(em);
    }

    @Test
    @Transactional
    void createHostel() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Hostel
        var returnedHostel = om.readValue(
            restHostelMockMvc
                .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(hostel)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            Hostel.class
        );

        // Validate the Hostel in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertHostelUpdatableFieldsEquals(returnedHostel, getPersistedHostel(returnedHostel));
    }

    @Test
    @Transactional
    void createHostelWithExistingId() throws Exception {
        // Create the Hostel with an existing ID
        hostel.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restHostelMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(hostel)))
            .andExpect(status().isBadRequest());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllHostels() throws Exception {
        // Initialize the database
        hostelRepository.saveAndFlush(hostel);

        // Get all the hostelList
        restHostelMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(hostel.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)))
            .andExpect(jsonPath("$.[*].address").value(hasItem(DEFAULT_ADDRESS.toString())))
            .andExpect(jsonPath("$.[*].capacity").value(hasItem(DEFAULT_CAPACITY.intValue())))
            .andExpect(jsonPath("$.[*].noOfRooms").value(hasItem(DEFAULT_NO_OF_ROOMS.intValue())))
            .andExpect(jsonPath("$.[*].floors").value(hasItem(DEFAULT_FLOORS.intValue())));
    }

    @Test
    @Transactional
    void getHostel() throws Exception {
        // Initialize the database
        hostelRepository.saveAndFlush(hostel);

        // Get the hostel
        restHostelMockMvc
            .perform(get(ENTITY_API_URL_ID, hostel.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(hostel.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME))
            .andExpect(jsonPath("$.address").value(DEFAULT_ADDRESS.toString()))
            .andExpect(jsonPath("$.capacity").value(DEFAULT_CAPACITY.intValue()))
            .andExpect(jsonPath("$.noOfRooms").value(DEFAULT_NO_OF_ROOMS.intValue()))
            .andExpect(jsonPath("$.floors").value(DEFAULT_FLOORS.intValue()));
    }

    @Test
    @Transactional
    void getNonExistingHostel() throws Exception {
        // Get the hostel
        restHostelMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingHostel() throws Exception {
        // Initialize the database
        hostelRepository.saveAndFlush(hostel);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the hostel
        Hostel updatedHostel = hostelRepository.findById(hostel.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedHostel are not directly saved in db
        em.detach(updatedHostel);
        updatedHostel
            .name(UPDATED_NAME)
            .address(UPDATED_ADDRESS)
            .capacity(UPDATED_CAPACITY)
            .noOfRooms(UPDATED_NO_OF_ROOMS)
            .floors(UPDATED_FLOORS);

        restHostelMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedHostel.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedHostel))
            )
            .andExpect(status().isOk());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedHostelToMatchAllProperties(updatedHostel);
    }

    @Test
    @Transactional
    void putNonExistingHostel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hostel.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restHostelMockMvc
            .perform(
                put(ENTITY_API_URL_ID, hostel.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(hostel))
            )
            .andExpect(status().isBadRequest());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchHostel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hostel.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHostelMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(hostel))
            )
            .andExpect(status().isBadRequest());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamHostel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hostel.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHostelMockMvc
            .perform(put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(hostel)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateHostelWithPatch() throws Exception {
        // Initialize the database
        hostelRepository.saveAndFlush(hostel);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the hostel using partial update
        Hostel partialUpdatedHostel = new Hostel();
        partialUpdatedHostel.setId(hostel.getId());

        partialUpdatedHostel.name(UPDATED_NAME).noOfRooms(UPDATED_NO_OF_ROOMS);

        restHostelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedHostel.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedHostel))
            )
            .andExpect(status().isOk());

        // Validate the Hostel in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertHostelUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedHostel, hostel), getPersistedHostel(hostel));
    }

    @Test
    @Transactional
    void fullUpdateHostelWithPatch() throws Exception {
        // Initialize the database
        hostelRepository.saveAndFlush(hostel);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the hostel using partial update
        Hostel partialUpdatedHostel = new Hostel();
        partialUpdatedHostel.setId(hostel.getId());

        partialUpdatedHostel
            .name(UPDATED_NAME)
            .address(UPDATED_ADDRESS)
            .capacity(UPDATED_CAPACITY)
            .noOfRooms(UPDATED_NO_OF_ROOMS)
            .floors(UPDATED_FLOORS);

        restHostelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedHostel.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedHostel))
            )
            .andExpect(status().isOk());

        // Validate the Hostel in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertHostelUpdatableFieldsEquals(partialUpdatedHostel, getPersistedHostel(partialUpdatedHostel));
    }

    @Test
    @Transactional
    void patchNonExistingHostel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hostel.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restHostelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, hostel.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(hostel))
            )
            .andExpect(status().isBadRequest());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchHostel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hostel.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHostelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(hostel))
            )
            .andExpect(status().isBadRequest());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamHostel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        hostel.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restHostelMockMvc
            .perform(patch(ENTITY_API_URL).with(csrf()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(hostel)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Hostel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteHostel() throws Exception {
        // Initialize the database
        hostelRepository.saveAndFlush(hostel);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the hostel
        restHostelMockMvc
            .perform(delete(ENTITY_API_URL_ID, hostel.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return hostelRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected Hostel getPersistedHostel(Hostel hostel) {
        return hostelRepository.findById(hostel.getId()).orElseThrow();
    }

    protected void assertPersistedHostelToMatchAllProperties(Hostel expectedHostel) {
        assertHostelAllPropertiesEquals(expectedHostel, getPersistedHostel(expectedHostel));
    }

    protected void assertPersistedHostelToMatchUpdatableProperties(Hostel expectedHostel) {
        assertHostelAllUpdatablePropertiesEquals(expectedHostel, getPersistedHostel(expectedHostel));
    }
}
