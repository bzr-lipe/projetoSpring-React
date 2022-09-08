package com.felipebezerra.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.felipebezerra.dsmeta.entities.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long> {

}
