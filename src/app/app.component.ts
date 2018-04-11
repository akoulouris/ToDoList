import { Component } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public items;
  lists:any[];
  todolist:AngularFireList<any>;
  constructor(private db:AngularFireDatabase){
    //this.comments = db.list('/comments').valueChanges();
    //db.list('/comments', ref => ref.orderByKey().limitToLast(1)).valueChanges()
    //db.list('/items', ref => ref.orderByChild('size').equalTo('large'))


    db.list('/lists').valueChanges()
      .subscribe(lists=>{
        this.lists =lists;
       
      })
     

  }
  ngOnInit(){
    this.getlist().snapshotChanges()
      .subscribe(lists=>{
        this.lists =lists;
       lists.forEach(element=>{
        var x = element.payload.toJSON();
        x["$key"] = element.key;
       //this.items.push(x);
      console.log(this.items);
      })
      
      })
      this.items = this.db.list('/lists');
  }
  getlist(){
    this.items = this.db.list('/list');
    //console.log( this.items);
    return this.items;
   }

  public Addtitle(sName: string){
    let newName =  sName;
    this.items.push({
      Title: newName,
      isChecked: false
     
  });
}
public checkOrUncheckTitle($key:string,flag:boolean){
  //console.log(flag);
  console.log($key);
  this.items.update($key,{isChecKed:flag});
}

removeTitle($key:string){
 // console.log($key);
  this.items.remove($key);
}
removeAll(){
  this.items.remove();
}
}
