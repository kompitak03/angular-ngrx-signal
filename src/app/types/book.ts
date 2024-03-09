export type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  averageRating: number;
  ratingsCount: number;
};

export const mockBooks: Book[] = [
  {
    id: 1,
    title: 'The Luminaries',
    author: 'Elie Wiesel',
    description:
      'A haunting and deeply moving novel about faith, family, and the power of stories to transform our lives.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/512bBX9kKbL.jpg',
    averageRating: 4.2,
    ratingsCount: 34,
  },
  {
    id: 2,
    title: 'The Nightingale',
    author: 'Kristin Hannah',
    description:
      'A sweeping, historical novel about the power of art and storytelling to endure even in the darkest of times.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41JXyOiVXzL.jpg',
    averageRating: 4.4,
    ratingsCount: 21,
  },
  {
    id: 3,
    title: 'The Poisonwood Bible',
    author: 'Barbara Kingsolver',
    description:
      'A powerful and gripping novel, winner of the Pulitzer Prize, about a missionary family who challenges all their assumptions about God and family in the Belgian Congo.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51JUYNKn3jL.jpg',
    averageRating: 4.2,
    ratingsCount: 27,
  },
  {
    id: 4,
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot',
    description:
      'A fascinating and important book about the NIH’s unconventional approach to cancer research, told through the life of Henrietta Lacks, the poor black tobacco farmer whose cancer cells have been cultured for decades.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/510RxmI8ZlL.jpg',
    averageRating: 4.4,
    ratingsCount: 26,
  },
  {
    id: 5,
    title: 'The Brief Wondrous Life of Oscar Wao',
    author: 'Jhumpa Lahiri',
    description:
      'A Pulitzer Prize-winning novel that explores the experiences of a young Dominican-American man growing up in Boston, told through a unique blend of magical realism and memoir.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/511qk5KzFmL.jpg',
    averageRating: 4.3,
    ratingsCount: 24,
  },
  {
    id: 6,
    title: 'The Argonauts',
    author: 'Maggie Nelson',
    description:
      'A sweeping, elegiac novel about the unraveling of a family, told through the stories of three generations.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51XJ8JEvRjL.jpg',
    averageRating: 4.4,
    ratingsCount: 23,
  },
  {
    id: 7,
    title: 'The 7 1/2 Deaths of Evelyn Hardcastle',
    author: 'Stuart Turton',
    description:
      'A brilliant, playful mystery about a woman who wakes up every morning in a new body, all while trying to solve a murder that has been shrouded in mystery for over 40 years.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/518Mhz60d6L.jpg',
    averageRating: 4.5,
    ratingsCount: 21,
  },
];
