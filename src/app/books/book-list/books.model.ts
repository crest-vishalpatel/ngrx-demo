export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    }
    publishedDate: string;
  }
}