package com.felipebezerra.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.felipebezerra.dsmeta.entities.Sale;
import com.felipebezerra.dsmeta.repositories.SalesRepository;


@Service
public class SaleService {
	
	@Autowired
	private SalesRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
		}
}
