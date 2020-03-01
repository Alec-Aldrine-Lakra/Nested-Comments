import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  public subcomments: BehaviorSubject<any> = new BehaviorSubject({});
  constructor() { }

  addComment(parent: string, com: string){
    this.subcomments.next({parent, com});
  }
}
