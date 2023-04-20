export interface BookReview {
  id: string,
  article: {
    id: string,
    originalLanguageId: string,
    originalTitle: string,
    originalContent: string,
    translations: [
      {
        id: string,
        articleId: string,
        languageId: string,
        title: string,
        content: string,
      }
    ]
  }
}
