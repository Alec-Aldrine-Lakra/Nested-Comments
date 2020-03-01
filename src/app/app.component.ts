import { Component } from '@angular/core';
import {CommentsService} from './comments.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comments';
  public inputComment: string;
  public comments: any = [{
    _id: "msxo1tjiss",
    parent: "0",
    com: "This is stress",
    sub: [{
      _id:"dzb25a9l93",
      parent:"msxo1tjiss",
      com:"This is releif",
      sub:[]
    },{
      _id:"yy5yp5xuj9",
      parent: "msxo1tjiss",
      com: "Chill bro",
      sub:[{
        _id:"rlyr1d6ek",
        parent:"yy5yp5xuj9",
        com: "Puff puff pass ani feel bho",
        sub:[]
      }]
    }]
  },{
    _id: "far9481fkg",
    parent: "0",
    com: "Hahahhaa",
    sub:[]
  }];
  public subCom: any;

  constructor(private com: CommentsService){}

  ngOnInit() {
    this.inputComment="";
    this.subCom = this.com.subcomments.subscribe(val=>{
      if(Object.keys(val).length>0){
        this.addSubComment(val);
      }
    })
  }

  addComment(){
    this.comments.push({
      _id: this.randstr(),
      parent: "0",
      com: this.inputComment,
      sub:[]
    })
  }

  addSubComment(com: any){
    com._id= this.randstr();
    com.sub = [];
    console.log(com);
    console.log(this.comments);
    this.recurseComments(com,0,this.comments);
  }

  recurseComments(com,i,arr){
      if(com.parent === arr[i]._id){
        arr[i].sub.push(com);
        return;
      } else {
        if(arr[i].sub.length>0) 
          return this.recurseComments(com,i,arr[i].sub);
        else if(i+1<arr.length)
          return this.recurseComments(com,i+1,arr);
      }
  }

  randstr()
  {
      return Math.random().toString(36).slice(3);
  }

  ngOnDestroy(){
    this.subCom.unsubscribe();
  }
}
