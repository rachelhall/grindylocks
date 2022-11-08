import { IPark } from "./park";
import { ITag } from "./tag";

export interface IPost {
  id: number;
  user: number;
  account: number;
  title: string;
  description: string;
  park: IPark;
  image: string;
  tags: ITag[];
}
