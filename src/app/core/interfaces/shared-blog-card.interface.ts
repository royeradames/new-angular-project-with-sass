import { IImage } from './image.interface'

export interface ISharedBlogCard {
  headerImage: IImage;
  date: string;
  title: string;
  titleLink: string;
  description: string;
  avatarImage: IImage;
  authorsName: string;
}

