package com.hostl.mgmt.repository;

import com.hostl.mgmt.domain.Champ;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Champ entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChampRepository extends JpaRepository<Champ, Long> {}
