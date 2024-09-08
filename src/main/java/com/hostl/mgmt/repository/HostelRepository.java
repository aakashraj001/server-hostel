package com.hostl.mgmt.repository;

import com.hostl.mgmt.domain.Hostel;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Hostel entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HostelRepository extends JpaRepository<Hostel, Long> {}
