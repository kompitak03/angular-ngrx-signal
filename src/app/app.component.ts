import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BooksStore } from './data/books.store';
import { JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  template: `
    <input type="text" [formControl]="search" />
    <p>Loading: {{ booksStore.isLoading() }}</p>
    <p>Books count: {{ booksStore.booksCount() }}</p>
    <p>Pagination: {{ booksStore.filter() | json }}</p>
    <p>Query: {{ booksStore.filter.query() }}</p>
    <p>Order: {{ booksStore.filter.order() }}</p>
    <pre>Books: {{ booksStore.books() | json }}</pre>
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-ngrx-signal';

  search = new FormControl<string>('');
  booksStore = inject(BooksStore);

  constructor() {
    this.booksStore.loadAll();
    this.search.valueChanges.subscribe((searchVal) => {
      this.booksStore.loadByQuery(searchVal!);
    });
  }
}
