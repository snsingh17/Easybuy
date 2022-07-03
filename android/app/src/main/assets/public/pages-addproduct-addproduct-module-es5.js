(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addproduct-addproduct-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addproduct/addproduct.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addproduct/addproduct.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddproductAddproductPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>addproduct</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item>\n    <ion-label position=\"stacked\">Product Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"product.name\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Price</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"product.price\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Quantity</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"product.quantity\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Row</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"product.row\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Shelf</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"product.shelf\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Discount</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"product.discount\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Available</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"product.avilable\"></ion-input>\n  </ion-item>\n<ion-button expand=\"block\" (click)=\"saveproduct()\">Save product</ion-button>\n<ion-button expand=\"block\" color=\"danger\" (click)=\"deleteproduct()\"  *ngIf=\"productId !=='new'\">delete product</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/addproduct/addproduct-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/addproduct/addproduct-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AddproductPageRoutingModule */

    /***/
    function srcAppPagesAddproductAddproductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddproductPageRoutingModule", function () {
        return AddproductPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _addproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addproduct.page */
      "./src/app/pages/addproduct/addproduct.page.ts");

      var routes = [{
        path: '',
        component: _addproduct_page__WEBPACK_IMPORTED_MODULE_3__["AddproductPage"]
      }];

      var AddproductPageRoutingModule = function AddproductPageRoutingModule() {
        _classCallCheck(this, AddproductPageRoutingModule);
      };

      AddproductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddproductPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/addproduct/addproduct.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/addproduct/addproduct.module.ts ***!
      \*******************************************************/

    /*! exports provided: AddproductPageModule */

    /***/
    function srcAppPagesAddproductAddproductModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddproductPageModule", function () {
        return AddproductPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addproduct-routing.module */
      "./src/app/pages/addproduct/addproduct-routing.module.ts");
      /* harmony import */


      var _addproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addproduct.page */
      "./src/app/pages/addproduct/addproduct.page.ts");

      var AddproductPageModule = function AddproductPageModule() {
        _classCallCheck(this, AddproductPageModule);
      };

      AddproductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddproductPageRoutingModule"]],
        declarations: [_addproduct_page__WEBPACK_IMPORTED_MODULE_6__["AddproductPage"]]
      })], AddproductPageModule);
      /***/
    },

    /***/
    "./src/app/pages/addproduct/addproduct.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/addproduct/addproduct.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddproductAddproductPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHByb2R1Y3QvYWRkcHJvZHVjdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/addproduct/addproduct.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/addproduct/addproduct.page.ts ***!
      \*****************************************************/

    /*! exports provided: AddproductPage */

    /***/
    function srcAppPagesAddproductAddproductPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddproductPage", function () {
        return AddproductPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AddproductPage = /*#__PURE__*/function () {
        function AddproductPage(firestore, router, route) {
          _classCallCheck(this, AddproductPage);

          this.firestore = firestore;
          this.router = router;
          this.route = route;
          this.product = {
            name: '',
            discount: 0,
            avilable: 0,
            shelf: 0,
            row: 0,
            price: 0,
            quantity: 0
          };
          this.productId = 'new';
        }

        _createClass(AddproductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getprodect();
          }
        }, {
          key: "getprodect",
          value: function getprodect() {
            var _this = this;

            this.productId = this.route.snapshot.params.productId || 'new';

            if (this.productId !== 'new') {
              this.firestore.doc("products/".concat(this.productId)).valueChanges().subscribe(function (product) {
                return _this.product = product;
              });
            }
          }
        }, {
          key: "saveproduct",
          value: function saveproduct() {
            var _this2 = this;

            if (this.productId == 'new') {
              this.firestore.collection('products').add(this.product).then(function () {
                _this2.product = null;

                _this2.router.navigateByUrl('/searchproduct');
              });
            } else {
              this.firestore.doc("products/".concat(this.productId)).update(this.product).then(function () {
                _this2.product = null;

                _this2.router.navigateByUrl('/searchproduct');
              });
            }
          }
        }, {
          key: "deleteproduct",
          value: function deleteproduct() {
            var _this3 = this;

            if (this.productId !== 'new') {
              console.log(this.product);
              this.firestore.doc("products/".concat(this.productId))["delete"]().then(function () {
                _this3.product = null;

                _this3.router.navigateByUrl('/searchproduct');
              });
            }
          }
        }]);

        return AddproductPage;
      }();

      AddproductPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      AddproductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addproduct',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./addproduct.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addproduct/addproduct.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./addproduct.page.scss */
        "./src/app/pages/addproduct/addproduct.page.scss"))["default"]]
      })], AddproductPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-addproduct-addproduct-module-es5.js.map