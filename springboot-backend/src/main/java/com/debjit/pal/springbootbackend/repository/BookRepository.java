package com.debjit.pal.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.debjit.pal.springbootbackend.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}