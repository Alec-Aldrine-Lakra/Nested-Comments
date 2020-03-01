import { Component, OnInit, Input } from '@angular/core';
import {CommentsService} from '../comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: any;
  public showEdit: boolean;
  public inputComment: string;
  constructor(private com: CommentsService) { }

  ngOnInit() {
  }

  reply(){
    this.showEdit= true;
  }
  
  addSubComment(){
    this.com.addComment(this.comment._id, this.inputComment)
  }

}
