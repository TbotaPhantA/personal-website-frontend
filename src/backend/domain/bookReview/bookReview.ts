import { LanguageCodesEnum } from '@/backend/infrastructure/shared/enums/languageCodesEnum';
import { CreateBookReviewDto } from '@/backend/domain/bookReview/dto/createBookReview.dto';
import { DeepReadonly } from 'next/dist/shared/lib/deep-readonly';

export class BookReview {
  constructor(private readonly state: BookReviewState) {}

  export(): DeepReadonly<BookReviewState> {
    return this.state;
  }

  createByDto(dto: CreateBookReviewDto): BookReview {
    return new BookReview({ ...dto, bookReviewId: -1 });
  }
}

interface BookReviewState {
  bookReviewId: number;
  title: string;
  language: LanguageCodesEnum;
  content: string;
  imageHref: string;
}
