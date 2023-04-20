import booksStyles from '../styles/anchors/Books.module.scss';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';
import BooksList from '@/components/BooksList/BooksList';

interface HomeProps {
  id: string;
}

const response = {
  bookReviews: [
    {
      id: "01GYG4XDBBFHSZJQFDYHZFH5QR",
      article: {
        id: "01GYG4XDBBMMTFKKM3H7SWRXM9",
        originalLanguageId: "en",
        originalTitle: "Domain-Driven Design",
        originalContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare erat dictum elit consequat fermentum. Integer pretium egestas arcu non dapibus. Nullam odio lectus, eleifend varius feugiat et, pulvinar ut odio. Nullam sed mattis justo. Suspendisse sodales mollis venenatis. Vestibulum iaculis enim tincidunt augue imperdiet, quis facilisis velit ultrices. Nullam vehicula sollicitudin enim. Sed fermentum ligula sit amet ornare dictum. Sed magna nibh, fringilla a tincidunt vitae, viverra id est. Vivamus eu risus mi. In dictum libero at maximus vehicula. Pellentesque in est malesuada, sagittis justo in, sagittis erat. Nam porta, quam nec aliquet interdum, urna turpis fermentum nulla, nec accumsan nunc est vel ex. Phasellus in lacus ac lacus dapibus vulputate.\n\n  Morbi ut libero vitae sapien consectetur rhoncus. Fusce at cursus justo, imperdiet vulputate augue. Nulla quis ligula eget orci tristique posuere. Praesent velit ante, tempus ultrices leo sed, accumsan vehicula purus. Duis fringilla augue at justo blandit, quis scelerisque magna elementum. Sed vestibulum varius consectetur. Integer congue auctor ex, a pulvinar mi tempor quis. Donec euismod metus neque, eu scelerisque ipsum eleifend eu. Nunc congue, nisi quis feugiat eleifend, est lectus accumsan dui, id aliquam ex libero ut erat. In et faucibus est. Curabitur fermentum id justo sed ultricies. In hac habitasse platea dictumst. Phasellus purus dui, molestie eget enim sit amet, lobortis dapibus justo.\n\n  Nullam efficitur urna nisi, vel efficitur lorem feugiat sit amet. Ut sollicitudin, velit eu dignissim placerat, mauris dolor fermentum turpis, sit amet finibus dui magna eget metus. Proin dictum justo nec nunc faucibus vulputate. Ut mauris est, elementum vel turpis quis, gravida scelerisque elit. Praesent nibh urna, eleifend aliquam maximus vel, iaculis non dui. Aenean condimentum felis lobortis, ultricies mauris eget, pharetra sem. Aenean id tortor arcu.\n\n  Vestibulum quam lectus, facilisis ac est sit amet, viverra semper augue. Aliquam erat volutpat. Donec eget viverra purus, quis bibendum tortor. Morbi semper rutrum nulla eu hendrerit. Vestibulum ac massa accumsan, porttitor dolor eget, vestibulum ante. In dictum congue facilisis. Sed faucibus nulla vel vehicula commodo. Suspendisse ut eleifend est. Pellentesque hendrerit in felis non mattis.\n\n  Nunc porttitor tempus auctor. Etiam dictum urna sit amet nisl consequat, at vulputate sem sollicitudin. Nulla elementum dignissim justo quis feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam at odio sed odio dapibus aliquam. Pellentesque pulvinar tortor tortor, sit amet iaculis metus porttitor sed. Sed a orci felis. Mauris eu congue libero. Sed aliquet laoreet varius. Nulla a mi vitae nulla efficitur vehicula fermentum sit amet odio. Aliquam consectetur convallis ex, non lacinia lacus maximus a. Fusce sagittis porta lacus ac semper. Nullam ut enim dui. In vitae enim tempus, hendrerit massa pretium, commodo turpis.",
        translations: [
          {
            id: "01GYG4XDBC5YDA5Z6ZVDZAQBTQ",
            articleId: "01GYG4XDBBMMTFKKM3H7SWRXM9",
            languageId: "ru",
            title: "Предметно-Ориентированное Проектирование",
            content: "С другой стороны консультация с широким активом играет важную роль в формировании модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации. Таким образом новая модель организационной деятельности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.\n\nРазнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа соответствующий условий активизации. Таким образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании форм развития.\n\nЗначимость этих проблем настолько очевидна, что новая модель организационной деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия. Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения систем массового участия.\n\nПовседневная практика показывает, что постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Разнообразный и богатый опыт рамки и место обучения кадров требуют определения и уточнения модели развития. Равным образом укрепление и развитие структуры позволяет оценить значение систем массового участия.\n\nИдейные соображения высшего порядка, а также консультация с широким активом способствует подготовки и реализации новых предложений. Товарищи! начало повседневной работы по формированию позиции способствует подготовки и реализации новых предложений.",
          }
        ]
      }
    },
    {
      id: "01GYG54CKAZQA4R8C5K0HZM60N",
      article: {
        id: "01GYG54CKAAXYQ4FXA2RFPWGR7",
        originalLanguageId: "en",
        originalTitle: "Building Microservices",
        originalContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare erat dictum elit consequat fermentum. Integer pretium egestas arcu non dapibus. Nullam odio lectus, eleifend varius feugiat et, pulvinar ut odio. Nullam sed mattis justo. Suspendisse sodales mollis venenatis. Vestibulum iaculis enim tincidunt augue imperdiet, quis facilisis velit ultrices. Nullam vehicula sollicitudin enim. Sed fermentum ligula sit amet ornare dictum. Sed magna nibh, fringilla a tincidunt vitae, viverra id est. Vivamus eu risus mi. In dictum libero at maximus vehicula. Pellentesque in est malesuada, sagittis justo in, sagittis erat. Nam porta, quam nec aliquet interdum, urna turpis fermentum nulla, nec accumsan nunc est vel ex. Phasellus in lacus ac lacus dapibus vulputate.\n\n  Morbi ut libero vitae sapien consectetur rhoncus. Fusce at cursus justo, imperdiet vulputate augue. Nulla quis ligula eget orci tristique posuere. Praesent velit ante, tempus ultrices leo sed, accumsan vehicula purus. Duis fringilla augue at justo blandit, quis scelerisque magna elementum. Sed vestibulum varius consectetur. Integer congue auctor ex, a pulvinar mi tempor quis. Donec euismod metus neque, eu scelerisque ipsum eleifend eu. Nunc congue, nisi quis feugiat eleifend, est lectus accumsan dui, id aliquam ex libero ut erat. In et faucibus est. Curabitur fermentum id justo sed ultricies. In hac habitasse platea dictumst. Phasellus purus dui, molestie eget enim sit amet, lobortis dapibus justo.\n\n  Nullam efficitur urna nisi, vel efficitur lorem feugiat sit amet. Ut sollicitudin, velit eu dignissim placerat, mauris dolor fermentum turpis, sit amet finibus dui magna eget metus. Proin dictum justo nec nunc faucibus vulputate. Ut mauris est, elementum vel turpis quis, gravida scelerisque elit. Praesent nibh urna, eleifend aliquam maximus vel, iaculis non dui. Aenean condimentum felis lobortis, ultricies mauris eget, pharetra sem. Aenean id tortor arcu.\n\n  Vestibulum quam lectus, facilisis ac est sit amet, viverra semper augue. Aliquam erat volutpat. Donec eget viverra purus, quis bibendum tortor. Morbi semper rutrum nulla eu hendrerit. Vestibulum ac massa accumsan, porttitor dolor eget, vestibulum ante. In dictum congue facilisis. Sed faucibus nulla vel vehicula commodo. Suspendisse ut eleifend est. Pellentesque hendrerit in felis non mattis.\n\n  Nunc porttitor tempus auctor. Etiam dictum urna sit amet nisl consequat, at vulputate sem sollicitudin. Nulla elementum dignissim justo quis feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam at odio sed odio dapibus aliquam. Pellentesque pulvinar tortor tortor, sit amet iaculis metus porttitor sed. Sed a orci felis. Mauris eu congue libero. Sed aliquet laoreet varius. Nulla a mi vitae nulla efficitur vehicula fermentum sit amet odio. Aliquam consectetur convallis ex, non lacinia lacus maximus a. Fusce sagittis porta lacus ac semper. Nullam ut enim dui. In vitae enim tempus, hendrerit massa pretium, commodo turpis.",
        translations: [
          {
            id: "01GYG54CKAD105KCHP7K4R09PY",
            articleId: "01GYG54CKAAXYQ4FXA2RFPWGR7",
            languageId: "ru",
            title: "Построение Микросервисов",
            content: "С другой стороны консультация с широким активом играет важную роль в формировании модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации. Таким образом новая модель организационной деятельности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.\n\nРазнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа соответствующий условий активизации. Таким образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании форм развития.\n\nЗначимость этих проблем настолько очевидна, что новая модель организационной деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия. Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения систем массового участия.\n\nПовседневная практика показывает, что постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Разнообразный и богатый опыт рамки и место обучения кадров требуют определения и уточнения модели развития. Равным образом укрепление и развитие структуры позволяет оценить значение систем массового участия.\n\nИдейные соображения высшего порядка, а также консультация с широким активом способствует подготовки и реализации новых предложений. Товарищи! начало повседневной работы по формированию позиции способствует подготовки и реализации новых предложений.",
          }
        ]
      }
    },
  ]
};

export function Books({ id }: HomeProps) {
  const { locale } = useRouter();
  const t = chooseTranslation(locale);

  return (
    <div id={id} className={booksStyles.BooksAnchor} data-aos="zoom-in">
      <div className={booksStyles.BooksAnchorTitle}>{t.pages.main.books.title}</div>
      <BooksList bookReviews={response.bookReviews} />
    </div>
  )
}
