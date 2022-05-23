(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotpassword-forgotpassword-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassword/forgotpassword.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassword/forgotpassword.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotpasswordForgotpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgotpassword</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/forgotpassword/forgotpassword-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/forgotpassword/forgotpassword-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ForgotpasswordPageRoutingModule */

    /***/
    function srcAppPagesForgotpasswordForgotpasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function () {
        return ForgotpasswordPageRoutingModule;
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


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "./src/app/pages/forgotpassword/forgotpassword.page.ts");

      var routes = [{
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
      }];

      var ForgotpasswordPageRoutingModule = function ForgotpasswordPageRoutingModule() {
        _classCallCheck(this, ForgotpasswordPageRoutingModule);
      };

      ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotpasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/forgotpassword/forgotpassword.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/forgotpassword/forgotpassword.module.ts ***!
      \***************************************************************/

    /*! exports provided: ForgotpasswordPageModule */

    /***/
    function srcAppPagesForgotpasswordForgotpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function () {
        return ForgotpasswordPageModule;
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


      var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgotpassword-routing.module */
      "./src/app/pages/forgotpassword/forgotpassword-routing.module.ts");
      /* harmony import */


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "./src/app/pages/forgotpassword/forgotpassword.page.ts");

      var ForgotpasswordPageModule = function ForgotpasswordPageModule() {
        _classCallCheck(this, ForgotpasswordPageModule);
      };

      ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
      })], ForgotpasswordPageModule);
      /***/
    },

    /***/
    "./src/app/pages/forgotpassword/forgotpassword.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/forgotpassword/forgotpassword.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesForgotpasswordForgotpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/forgotpassword/forgotpassword.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/forgotpassword/forgotpassword.page.ts ***!
      \*************************************************************/

    /*! exports provided: ForgotpasswordPage */

    /***/
    function srcAppPagesForgotpasswordForgotpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function () {
        return ForgotpasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ForgotpasswordPage = /*#__PURE__*/function () {
        function ForgotpasswordPage() {
          _classCallCheck(this, ForgotpasswordPage);
        }

        _createClass(ForgotpasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgotpasswordPage;
      }();

      ForgotpasswordPage.ctorParameters = function () {
        return [];
      };

      ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgotpassword.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassword/forgotpassword.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgotpassword.page.scss */
        "./src/app/pages/forgotpassword/forgotpassword.page.scss"))["default"]]
      })], ForgotpasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-forgotpassword-forgotpassword-module-es5.js.map