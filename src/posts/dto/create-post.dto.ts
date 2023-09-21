import { Max, Min, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @Min(1)
  @Max(99)
  priority: number;
}
