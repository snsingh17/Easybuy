import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.page.html',
  styleUrls: ['./searchproduct.page.scss'],
})
export class SearchproductPage implements OnInit {
  
  products: any;

  constructor(private firestore: AngularFirestore) { 
   

  }
  ngOnInit() {
    this.firestore.collection('products').valueChanges({idField: 'productId'}).subscribe((a)=>{
        this.products =a ;
        console.log(a);
     
    });
  }
   

}

