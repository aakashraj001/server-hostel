package com.hostl.mgmt.web.rest;

import static com.hostl.mgmt.domain.ChampAsserts.*;
import static com.hostl.mgmt.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hostl.mgmt.IntegrationTest;
import com.hostl.mgmt.domain.Champ;
import com.hostl.mgmt.domain.enumeration.Status;
import com.hostl.mgmt.domain.enumeration.UserType;
import com.hostl.mgmt.repository.ChampRepository;
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
 * Integration tests for the {@link ChampResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class ChampResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_LOGIN = "AAAAAAAAAA";
    private static final String UPDATED_LOGIN = "BBBBBBBBBB";

    private static final String DEFAULT_PASSWORD = "AAAAAAAAAA";
    private static final String UPDATED_PASSWORD = "BBBBBBBBBB";

    private static final UserType DEFAULT_TYPE = UserType.ADMIN;
    private static final UserType UPDATED_TYPE = UserType.MANAGER;

    private static final Status DEFAULT_STATUS = Status.ACTIVE;
    private static final Status UPDATED_STATUS = Status.INACTIVE;

    private static final String DEFAULT_ADDRESS = "AAAAAAAAAA";
    private static final String UPDATED_ADDRESS = "BBBBBBBBBB";

    private static final Long DEFAULT_MOBILE_NO = 1L;
    private static final Long UPDATED_MOBILE_NO = 2L;

    private static final String ENTITY_API_URL = "/api/champs";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private ChampRepository champRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restChampMockMvc;

    private Champ champ;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Champ createEntity(EntityManager em) {
        Champ champ = new Champ()
            .name(DEFAULT_NAME)
            .login(DEFAULT_LOGIN)
            .password(DEFAULT_PASSWORD)
            .type(DEFAULT_TYPE)
            .status(DEFAULT_STATUS)
            .address(DEFAULT_ADDRESS)
            .mobileNo(DEFAULT_MOBILE_NO);
        return champ;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Champ createUpdatedEntity(EntityManager em) {
        Champ champ = new Champ()
            .name(UPDATED_NAME)
            .login(UPDATED_LOGIN)
            .password(UPDATED_PASSWORD)
            .type(UPDATED_TYPE)
            .status(UPDATED_STATUS)
            .address(UPDATED_ADDRESS)
            .mobileNo(UPDATED_MOBILE_NO);
        return champ;
    }

    @BeforeEach
    public void initTest() {
        champ = createEntity(em);
    }

    @Test
    @Transactional
    void createChamp() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Champ
        var returnedChamp = om.readValue(
            restChampMockMvc
                .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(champ)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            Champ.class
        );

        // Validate the Champ in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertChampUpdatableFieldsEquals(returnedChamp, getPersistedChamp(returnedChamp));
    }

    @Test
    @Transactional
    void createChampWithExistingId() throws Exception {
        // Create the Champ with an existing ID
        champ.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restChampMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(champ)))
            .andExpect(status().isBadRequest());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllChamps() throws Exception {
        // Initialize the database
        champRepository.saveAndFlush(champ);

        // Get all the champList
        restChampMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(champ.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)))
            .andExpect(jsonPath("$.[*].login").value(hasItem(DEFAULT_LOGIN)))
            .andExpect(jsonPath("$.[*].password").value(hasItem(DEFAULT_PASSWORD)))
            .andExpect(jsonPath("$.[*].type").value(hasItem(DEFAULT_TYPE.toString())))
            .andExpect(jsonPath("$.[*].status").value(hasItem(DEFAULT_STATUS.toString())))
            .andExpect(jsonPath("$.[*].address").value(hasItem(DEFAULT_ADDRESS.toString())))
            .andExpect(jsonPath("$.[*].mobileNo").value(hasItem(DEFAULT_MOBILE_NO.intValue())));
    }

    @Test
    @Transactional
    void getChamp() throws Exception {
        // Initialize the database
        champRepository.saveAndFlush(champ);

        // Get the champ
        restChampMockMvc
            .perform(get(ENTITY_API_URL_ID, champ.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(champ.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME))
            .andExpect(jsonPath("$.login").value(DEFAULT_LOGIN))
            .andExpect(jsonPath("$.password").value(DEFAULT_PASSWORD))
            .andExpect(jsonPath("$.type").value(DEFAULT_TYPE.toString()))
            .andExpect(jsonPath("$.status").value(DEFAULT_STATUS.toString()))
            .andExpect(jsonPath("$.address").value(DEFAULT_ADDRESS.toString()))
            .andExpect(jsonPath("$.mobileNo").value(DEFAULT_MOBILE_NO.intValue()));
    }

    @Test
    @Transactional
    void getNonExistingChamp() throws Exception {
        // Get the champ
        restChampMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingChamp() throws Exception {
        // Initialize the database
        champRepository.saveAndFlush(champ);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the champ
        Champ updatedChamp = champRepository.findById(champ.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedChamp are not directly saved in db
        em.detach(updatedChamp);
        updatedChamp
            .name(UPDATED_NAME)
            .login(UPDATED_LOGIN)
            .password(UPDATED_PASSWORD)
            .type(UPDATED_TYPE)
            .status(UPDATED_STATUS)
            .address(UPDATED_ADDRESS)
            .mobileNo(UPDATED_MOBILE_NO);

        restChampMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedChamp.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedChamp))
            )
            .andExpect(status().isOk());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedChampToMatchAllProperties(updatedChamp);
    }

    @Test
    @Transactional
    void putNonExistingChamp() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        champ.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restChampMockMvc
            .perform(
                put(ENTITY_API_URL_ID, champ.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(champ))
            )
            .andExpect(status().isBadRequest());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchChamp() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        champ.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restChampMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(champ))
            )
            .andExpect(status().isBadRequest());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamChamp() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        champ.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restChampMockMvc
            .perform(put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(champ)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateChampWithPatch() throws Exception {
        // Initialize the database
        champRepository.saveAndFlush(champ);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the champ using partial update
        Champ partialUpdatedChamp = new Champ();
        partialUpdatedChamp.setId(champ.getId());

        partialUpdatedChamp.type(UPDATED_TYPE).status(UPDATED_STATUS);

        restChampMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedChamp.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedChamp))
            )
            .andExpect(status().isOk());

        // Validate the Champ in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertChampUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedChamp, champ), getPersistedChamp(champ));
    }

    @Test
    @Transactional
    void fullUpdateChampWithPatch() throws Exception {
        // Initialize the database
        champRepository.saveAndFlush(champ);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the champ using partial update
        Champ partialUpdatedChamp = new Champ();
        partialUpdatedChamp.setId(champ.getId());

        partialUpdatedChamp
            .name(UPDATED_NAME)
            .login(UPDATED_LOGIN)
            .password(UPDATED_PASSWORD)
            .type(UPDATED_TYPE)
            .status(UPDATED_STATUS)
            .address(UPDATED_ADDRESS)
            .mobileNo(UPDATED_MOBILE_NO);

        restChampMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedChamp.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedChamp))
            )
            .andExpect(status().isOk());

        // Validate the Champ in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertChampUpdatableFieldsEquals(partialUpdatedChamp, getPersistedChamp(partialUpdatedChamp));
    }

    @Test
    @Transactional
    void patchNonExistingChamp() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        champ.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restChampMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, champ.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(champ))
            )
            .andExpect(status().isBadRequest());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchChamp() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        champ.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restChampMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(champ))
            )
            .andExpect(status().isBadRequest());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamChamp() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        champ.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restChampMockMvc
            .perform(patch(ENTITY_API_URL).with(csrf()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(champ)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Champ in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteChamp() throws Exception {
        // Initialize the database
        champRepository.saveAndFlush(champ);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the champ
        restChampMockMvc
            .perform(delete(ENTITY_API_URL_ID, champ.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return champRepository.count();
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

    protected Champ getPersistedChamp(Champ champ) {
        return champRepository.findById(champ.getId()).orElseThrow();
    }

    protected void assertPersistedChampToMatchAllProperties(Champ expectedChamp) {
        assertChampAllPropertiesEquals(expectedChamp, getPersistedChamp(expectedChamp));
    }

    protected void assertPersistedChampToMatchUpdatableProperties(Champ expectedChamp) {
        assertChampAllUpdatablePropertiesEquals(expectedChamp, getPersistedChamp(expectedChamp));
    }
}
