import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCommentService {

  private commentSource = new BehaviorSubject('');
  public commentAdded = this.commentSource.asObservable();
  public readonly commentAddedMessage = "Comment Added";

  constructor() { }

  announceCommentAdded(message: string) {
    this.commentSource.next(message)
  }
}
