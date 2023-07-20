package com.debjit.pal.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.debjit.pal.springbootbackend.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}