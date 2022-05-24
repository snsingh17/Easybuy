import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  product={
    name:'',
    discount:0,
    avilable:0,
    shelf:0,
    row:0,
    price:0,
    quantity:0,
  };
  productId: string='new';
  constructor(private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.getprodect();
    
  }
  getprodect(){
    this.productId= this.route.snapshot.params.productId || 'new';

    if(this.productId !== 'new')
    {
       this.firestore.doc(`products/${this.productId}`).valueChanges().subscribe((product:any)=>(this.product=product));
    }
  }
 
  saveproduct():void
  {
    if(this.productId == 'new')
    {
    this.firestore.collection('products').add(this.product).then(()=>{
      this.product=null;
      this.router.navigateByUrl('/searchproduct');
    });
    }
    else{
      this.firestore.doc(`products/${this.productId}`).update(this.product).then(()=>{
        this.product=null;
        this.router.navigateByUrl('/searchproduct');
      });
    
  }
  }

  deleteproduct():void
  {
   
     if(this.productId !=='new')
     {
       console.log(this.product)
      this.firestore.doc(`products/${this.productId}`).delete()
      .then(()=>{
        this.product = null;
        this.router.navigateByUrl('/searchproduct');
     });
  }
}

}
