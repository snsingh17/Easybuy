(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginscreen-loginscreen-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginscreen/loginscreen.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginscreen/loginscreen.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <!-- <ion-title>loginscreen</ion-title> -->\r\n  </ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n  <ion-back-button defaulthref=\"login\" text=\"\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"ion-no-margin\">\r\n      <ion-img src=\"assets/icon/back.png\"></ion-img>\r\n      <ion-card-content>\r\n\r\n    <form [formGroup]=\"validationFormUser\" (ngSubmit)=\"LoginUser(validationFormUser.value)\">\r\n        <div class=\"wrapform\">\r\n         <ion-item>\r\n            <ion-input type=\"text\" name=\"email\" formControlName=\"email\"  placeholder=\"Email\">\r\n           <ion-icon name=\"mail-outline\"></ion-icon>\r\n           </ion-input>\r\n           </ion-item>\r\n           <div>\r\n               <ng-container *ngFor=\"let validation of validationUserMessage.email\">\r\n                     <div class=\"error_message\" *ngIf=\"validationFormUser.get('email').hasError(validation.type) && (validationFormUser.get('email').dirty || validationFormUser.get('email').touched)\">\r\n                        {{validation.message}}\r\n                     </div>\r\n               </ng-container>\r\n           </div>\r\n\r\n           <ion-item>\r\n\r\n             <ion-input type=\"password\" name=\"password\" formControlName=\"password\"  placeholder=\"**************\" >\r\n             <ion-icon name=\"lock-closed\"></ion-icon>\r\n             </ion-input>\r\n             </ion-item>\r\n\r\n             <div>\r\n                 <ng-container *ngFor=\"let validation of validationUserMessage.password\">\r\n                      <div class=\"error_message\" *ngIf=\"validationFormUser.get('password').hasError(validation.type) && (validationFormUser.get('password').dirty || validationFormUser.get('password').touched)\">\r\n                         {{validation.message}}\r\n                      </div>\r\n                  </ng-container>\r\n             </div>\r\n\r\n        </div>\r\n         <div class=\"password_forgot\">\r\n            <ion-button fill=\"clear\" class=\"ion-no-padding\">ForgotPasword?</ion-button>\r\n         </div>\r\n         <div class=\"sign-btn-wrap\">\r\n            <ion-button  shape=\"round\" type=\"submit\"  fill=\"solid\" class=\"sign-btn\" [disabled]=\"!validationFormUser.valid\" >Login</ion-button>\r\n           </div>\r\n\r\n           <div class=\"text-tag\">\r\n           <span>Or via Social Media</span>\r\n           </div>\r\n\r\n           <div class=\"social-btns\">\r\n               <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\r\n             <ion-img src=\"assets/icon/fb.png\"></ion-img>\r\n               </ion-button>\r\n               <ion-button fill=\"clear\"  class=\"googlebtn ion-no-padding\">\r\n             <ion-img src=\"assets/imgs/google.png\"></ion-img>\r\n               </ion-button>\r\n               <ion-button fill=\"clear\"  class=\"applebtn ion-no-padding\">\r\n             <ion-img src=\"assets/imgs/apple.png\"></ion-img>\r\n               </ion-button>\r\n\r\n             </div>\r\n\r\n\r\n\r\n      </form>\r\n      </ion-card-content>\r\n\r\n\r\n    </ion-card>\r\n\r\n\r\n    <div class=\"ion-card-footer\">\r\n     <span>Don’t have an account?</span><button class=\"ion-no-padding\" (click)=\"goTosignup()\" >Sign Up</button>\r\n      </div>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/loginscreen/loginscreen-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/loginscreen/loginscreen-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LoginscreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginscreenPageRoutingModule", function() { return LoginscreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loginscreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginscreen.page */ "./src/app/pages/loginscreen/loginscreen.page.ts");




const routes = [
    {
        path: '',
        component: _loginscreen_page__WEBPACK_IMPORTED_MODULE_3__["LoginscreenPage"]
    }
];
let LoginscreenPageRoutingModule = class LoginscreenPageRoutingModule {
};
LoginscreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginscreenPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/loginscreen/loginscreen.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginscreen/loginscreen.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginscreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginscreenPageModule", function() { return LoginscreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginscreen-routing.module */ "./src/app/pages/loginscreen/loginscreen-routing.module.ts");
/* harmony import */ var _loginscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginscreen.page */ "./src/app/pages/loginscreen/loginscreen.page.ts");








let LoginscreenPageModule = class LoginscreenPageModule {
};
LoginscreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginscreenPageRoutingModule"]
        ],
        declarations: [_loginscreen_page__WEBPACK_IMPORTED_MODULE_6__["LoginscreenPage"]]
    })
], LoginscreenPageModule);



/***/ }),

/***/ "./src/app/pages/loginscreen/loginscreen.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginscreen/loginscreen.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color:#E1EAF9 !important;\n  --ion-item-background: transparent !important;\n}\n\n.wrapform {\n  margin-top: 15px;\n}\n\n.error_message {\n  font-size: 6px;\n  color: red;\n}\n\nion-item {\n  color: #647B9D;\n  --border-color: #D4D7DB;\n  --highlight-color-focused:#1248A0;\n  --padding-start:0;\n  --inner-padding-end:0;\n  font-size: 12px;\n}\n\nion-item ion-input {\n  color: #647B9D;\n}\n\nion-item ion-icon {\n  padding-right: 6px;\n  font-size: 18px;\n}\n\nion-item ion-input:hover {\n  color: #1248A0;\n}\n\n.password_forgot {\n  text-align: right;\n}\n\n.password_forgot ion-button {\n  font-size: 12px;\n  color: #0A4296;\n}\n\n.sign-btn-wrap {\n  text-align: center;\n  padding-top: 20px;\n}\n\n.sign-btn-wrap .sign-btn {\n  --ion-primary-color:#215AB7;\n  --background-activated:#E1EAF9;\n  --background-focused:#E1EAF9;\n  --background-hover:#647B9D;\n  color: #F4F6FA;\n  border-radius: 25px;\n  --background:#215AB7;\n  background-color: #215AB7;\n}\n\n.text-tag {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n  color: #898585;\n}\n\n.social-btns {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.social-btns ion-button {\n  width: 40px;\n  padding-left: 5px !important;\n}\n\nion-card {\n  --ion-background-color: transparent !important;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n\n.ion-card-footer {\n  width: 100%;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.ion-card-footer span {\n  color: #85888D;\n  font-size: 12px;\n  font-weight: 200;\n}\n\n.ion-card-footer button {\n  background-color: transparent;\n  font-size: 14px;\n  font-weight: 600;\n  padding-left: 3px;\n  color: #535558;\n}\n\n.ion-card-footer button:hover {\n  color: #969393;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5zY3JlZW4vbG9naW5zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDSSxjQUFBO0VBQ0YsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFJRSxlQUFBO0FBQUo7O0FBRUs7RUFDRSxjQUFBO0FBQVA7O0FBR0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFETjs7QUFJSTtFQUNFLGNBQUE7QUFGTjs7QUFVQTtFQUNFLGlCQUFBO0FBUEY7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVdBO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtBQVJIOztBQVNFO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBUEo7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUEo7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFXQTtFQUNFLDhDQUFBO0VBQ0UsMkJBQUE7RUFDQSx3Q0FBQTtBQVJKOztBQVdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVJGOztBQVVFO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVlFO0VBQ0csNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWTDs7QUFjRTtFQUNFLGNBQUE7QUFaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luc2NyZWVuL2xvZ2luc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLW9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0UxRUFGOSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBmb3Jte1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmVycm9yX21lc3NhZ2V7XHJcbiAgZm9udC1zaXplOiA2cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICBjb2xvcjojNjQ3QjlEO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjRDREN0RCO1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IzEyNDhBMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6MDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOjA7XHJcbiAgXHJcblxyXG5cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAvLyAtLWNvbG9yLWZvY3VzZWQ6IzEyNDhBMCAhaW1wb3J0YW50O1xyXG4gICAgIGlvbi1pbnB1dHtcclxuICAgICAgIGNvbG9yOiM2NDdCOUQ7XHJcblxyXG4gICAgIH1cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQ6aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiAjMTI0OEEwO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLnBhc3N3b3JkX2ZvcmdvdHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAvLyBjb2xvcjojMEE0Mjk2XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjMEE0Mjk2O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZ24tYnRuLXdyYXB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLnNpZ24tYnRue1xyXG4gICAgLS1pb24tcHJpbWFyeS1jb2xvcjojMjE1QUI3O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojRTFFQUY5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I0UxRUFGOTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojNjQ3QjlEO1xyXG4gICAgY29sb3I6I0Y0RjZGQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IzIxNUFCNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTVBQjc7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC10YWd7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjojODk4NTg1O1xyXG4gIH1cclxufVxyXG5cclxuLnNvY2lhbC1idG5ze1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWNhcmQtZm9vdGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIHNwYW57XHJcbiAgY29sb3I6ICM4NTg4OEQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcblxyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgIGNvbG9yOiAjNTM1NTU4O1xyXG5cclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlcntcclxuICAgIGNvbG9yOiAjOTY5MzkzO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/loginscreen/loginscreen.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/loginscreen/loginscreen.page.ts ***!
  \*******************************************************/
/*! exports provided: LoginscreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginscreenPage", function() { return LoginscreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let LoginscreenPage = class LoginscreenPage {
    constructor(formbuider, authservice, router, firestore, nav) {
        this.formbuider = formbuider;
        this.authservice = authservice;
        this.router = router;
        this.firestore = firestore;
        this.nav = nav;
        this.validationUserMessage = {
            email: [
                { type: "required", message: "Please enter your Email" },
                { type: "pattern", message: "The Email entered is Incorrect.Try again" }
            ],
            password: [
                { type: "required", message: "please Enter your Password!" },
                { type: "minlength", message: "The Password must be at least 5 characters or more" }
            ]
        };
    }
    ngOnInit() {
        this.validationFormUser = this.formbuider.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)
            ]))
        });
    }
    goTosignup() {
        this.nav.navigateForward(['signup']);
    }
    LoginUser(value) {
        console.log("Am logged in");
        try {
            this.authservice.loginFireauth(value).then(resp => {
                console.log(resp);
                this.router.navigate(['tabs']);
                if (resp.user) {
                    this.authservice.setUser({
                        username: resp.user.displayName,
                        uid: resp.user.uid
                    });
                    const userProfile = this.firestore.collection('profile').doc(resp.user.uid);
                    userProfile.get().subscribe(result => {
                        if (result.exists) {
                            this.nav.navigateForward(['tabs']);
                        }
                        else {
                            this.firestore.doc(`profile/${this.authservice.getUID()}`).set({
                                name: resp.user.displayName,
                                email: resp.user.email
                            });
                            this.nav.navigateForward(['uploadimage']);
                        }
                    });
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
LoginscreenPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
LoginscreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginscreen',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loginscreen.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginscreen/loginscreen.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loginscreen.page.scss */ "./src/app/pages/loginscreen/loginscreen.page.scss")).default]
    })
], LoginscreenPage);



/***/ })

}]);
//# sourceMappingURL=pages-loginscreen-loginscreen-module-es2015.js.map