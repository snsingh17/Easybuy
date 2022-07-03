import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private nav: NavController, private router: Router) { }

 

  searchpro(){
    this.nav.navigateForward(['searchproduct']);
  }

  scan(){

    this.nav.navigateForward(['scan']);
    // this.barcodeScanner.scan().then(barcodeData => {
    //   console.log('Barcode data', barcodeData);
    //  }).catch(err => {
    //      console.log('Error', err);
    //  });
  }
  ngOnInit() {
  }
  

}
