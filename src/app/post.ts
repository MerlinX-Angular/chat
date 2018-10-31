import { Firebase } from './firebase';

export class Post extends Firebase {
  public authorKey: string;
  public body: string;
  public postImage: string;
  public postName: string;


  constructor(obj?: any) {
    super(obj);
    this.authorKey = obj && obj.authorKey || '';
    this.body = obj && obj.body || '';
    this.postImage = obj && obj.postImage || '';
    this.postName = obj && obj.postName || '';
  }
}
