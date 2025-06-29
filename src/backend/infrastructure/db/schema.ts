import { UserRoleEnum } from '@/shared/enums/userRole.enum';

export interface BookReviewTable {
  language_code: 'en' | 'ru';
  book_title: string;
  review_body: string;
  image_href: string;
}

export interface Users {
  username: string;
  role: UserRoleEnum;
  password_hash: string;
}

export interface Database {
  book_reviews: BookReviewTable;
  users: Users;
}
