declare module "*-translations.json" {
  export const pages: {
    main: {
      home: {
        greeting: {
          row1: string,
          row2: {
            col1: string,
            col2: string,
          },
          row3: string
        }
      },
      about: {
        title: string,
        description: string,
      },
      books: {
        title: string,
      },
      contact: {
        title: string,
      }
    }
  };
  export const sidebar: {
    homeButton: string,
    aboutButton: string,
    booksButton: string,
    contactButton: string,
    links: { title: string }
  }
}
