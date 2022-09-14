package com.generation.dacg.repositories;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.generation.dacg.models.UsuarioModel;

@Repository
public interface UsuarioRepository  extends CrudRepository<UsuarioModel, Long> {

	public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);

}
