interface DownloadObject {
  fileType: string;
  fileSize: string;
  downloadLink: string;
}
export type BookType = {
  title: string;
  authors: string[];
  isbn: string;
  description: string;
  numberOfPages: number;
  edition: string;
  keywords: string[];
  genre: string[];
  publicationDate: string;
  publisher: string;
  language: string;
  coverImage: string;
  rating: number;
  downloads: number;
  downloadLinks: DownloadObject[];
}
