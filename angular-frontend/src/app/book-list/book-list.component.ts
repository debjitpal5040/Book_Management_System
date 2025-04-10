import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class BookListComponent implements OnInit {

  books!: Book[];

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getBooksList().subscribe(data => {
      this.books = data;
    });
  }

  bookDetails(id: number) {
    this.router.navigate(['book-details', id]);
  }

  updateBook(id: number) {
    this.router.navigate(['update-book', id]);
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.getBooks();
    })
  }
}
