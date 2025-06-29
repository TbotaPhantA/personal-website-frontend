import { LanguageCodesEnum } from '@/backend/infrastructure/shared/enums/languageCodesEnum';
import { IsEnum, IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateBookReviewDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @IsNotEmpty()
  @IsEnum(LanguageCodesEnum)
  language: LanguageCodesEnum;

  @IsNotEmpty()
  @MaxLength(16383)
  content: string;

  @IsNotEmpty()
  @IsUrl()
  @MaxLength(4095)
  imageHref: string;
}
