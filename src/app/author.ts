import { Firebase } from './firebase';

export class Author extends Firebase {
  public displayName: string;
  public photoUrl: string;

  constructor(obj?: any) {
    super(obj);
    this.displayName = obj && obj.displayName || '';
    this.photoUrl = obj && obj.photoUrl || '';
  }
}
