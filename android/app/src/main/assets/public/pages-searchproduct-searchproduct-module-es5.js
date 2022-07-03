(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-searchproduct-searchproduct-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchproduct/searchproduct.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchproduct/searchproduct.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchproductSearchproductPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>searchproduct</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item *ngFor=\"let product of products\" routerLink=\"/addproduct/{{product.productId}}\">\n      <label>\n       <h1>ITEM: {{product.name}}</h1>\n       <p>Price <strong>{{product.price}}</strong></p>\n       <p>Quantity <strong>{{product.quantity}}</strong></p>\n       <p>Row <strong>{{product.row}}</strong></p>\n       <p>Shelf <strong>{{product.shelf}}</strong></p>\n       <p>Available <strong>{{product.avilable}}</strong></p>\n       <p>Discount <strong>{{product.discount}}</strong></p>\n       \n      </label>\n  </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button routerLink=\"/addproduct/new\">\n    <ion-icon name=\"add\"></ion-icon>\n\n  </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/searchproduct/searchproduct-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/searchproduct/searchproduct-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SearchproductPageRoutingModule */

    /***/
    function srcAppPagesSearchproductSearchproductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchproductPageRoutingModule", function () {
        return SearchproductPageRoutingModule;
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


      var _searchproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./searchproduct.page */
      "./src/app/pages/searchproduct/searchproduct.page.ts");

      var routes = [{
        path: '',
        component: _searchproduct_page__WEBPACK_IMPORTED_MODULE_3__["SearchproductPage"]
      }];

      var SearchproductPageRoutingModule = function SearchproductPageRoutingModule() {
        _classCallCheck(this, SearchproductPageRoutingModule);
      };

      SearchproductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchproductPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/searchproduct/searchproduct.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/searchproduct/searchproduct.module.ts ***!
      \*************************************************************/

    /*! exports provided: SearchproductPageModule */

    /***/
    function srcAppPagesSearchproductSearchproductModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchproductPageModule", function () {
        return SearchproductPageModule;
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


      var _searchproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./searchproduct-routing.module */
      "./src/app/pages/searchproduct/searchproduct-routing.module.ts");
      /* harmony import */


      var _searchproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./searchproduct.page */
      "./src/app/pages/searchproduct/searchproduct.page.ts");

      var SearchproductPageModule = function SearchproductPageModule() {
        _classCallCheck(this, SearchproductPageModule);
      };

      SearchproductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _searchproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchproductPageRoutingModule"]],
        declarations: [_searchproduct_page__WEBPACK_IMPORTED_MODULE_6__["SearchproductPage"]]
      })], SearchproductPageModule);
      /***/
    },

    /***/
    "./src/app/pages/searchproduct/searchproduct.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/searchproduct/searchproduct.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSearchproductSearchproductPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaHByb2R1Y3Qvc2VhcmNocHJvZHVjdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/searchproduct/searchproduct.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/searchproduct/searchproduct.page.ts ***!
      \***********************************************************/

    /*! exports provided: SearchproductPage */

    /***/
    function srcAppPagesSearchproductSearchproductPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchproductPage", function () {
        return SearchproductPage;
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

      var SearchproductPage = /*#__PURE__*/function () {
        function SearchproductPage(firestore) {
          _classCallCheck(this, SearchproductPage);

          this.firestore = firestore;
        }

        _createClass(SearchproductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.firestore.collection('products').valueChanges({
              idField: 'productId'
            }).subscribe(function (a) {
              _this.products = a;
              console.log(a);
            });
          }
        }]);

        return SearchproductPage;
      }();

      SearchproductPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      SearchproductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchproduct',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./searchproduct.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchproduct/searchproduct.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./searchproduct.page.scss */
        "./src/app/pages/searchproduct/searchproduct.page.scss"))["default"]]
      })], SearchproductPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-searchproduct-searchproduct-module-es5.js.map