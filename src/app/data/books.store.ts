import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Book, mockBooks } from '../types/book';
import { computed } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  pipe,
  switchMap,
  tap,
} from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

type BooksState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ books, filter }) => ({
    booksCount: computed(() => books().length),
    sortedBooks: computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return books().sort((a, b) => direction * a.title.localeCompare(b.title));
    }),
  })),
  withMethods((store) => ({
    updateQuery(query: string): void {
      // 👇 Updating state using the `patchState` function.
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    },
    async loadAll(): Promise<void> {
      patchState(store, { isLoading: true });
      setTimeout(() => {
        const books = mockBooks;
        patchState(store, { books, isLoading: false });
      }, 3000);
    },

    loadByQuery: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          return of(mockBooks).pipe(
            map((books) =>
              books.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase())
              )
            ),
            tapResponse({
              next: (books) => patchState(store, { books }),
              error: console.error,
              finalize() {
                return patchState(store, { isLoading: false });
              },
            })
          );
        })
      )
    ),
  }))
);
