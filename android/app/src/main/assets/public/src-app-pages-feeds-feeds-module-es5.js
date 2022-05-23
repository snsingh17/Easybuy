(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-feeds-feeds-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedsFeedsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-navbar>\r\n    <ion-title>\r\n    </ion-title>\r\n  </ion-navbar>\r\n</ion-header>\r\n \r\n<ion-content padding>\r\n  <ion-segment [(ngModel)]=\"galleryType\" color=\"primary\">\r\n    <ion-segment-button value=\"regular\">\r\n      Regular\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"pinterest\">\r\n      Pinterest\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n \r\n  <div [ngSwitch]=\"galleryType\">\r\n    <!-- Responsive Layout with Ion Grid-->\r\n    <!-- More Pinterest floating gallery style -->\r\n<div class=\"images\" *ngSwitchCase=\"'pinterest'\">\r\n  <div class=\"one-image\" *ngFor=\"let image of [1,2,3,4,5,6,7,8,9,10,11]\">\r\n    <img src=\"assets/imgs/{{image}}.jpg\">\r\n  </div>\r\n</div>\r\n    <ion-grid *ngSwitchCase=\"'regular'\">\r\n      <ion-row>\r\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor=\"let image of [1,2,3,4,5,6,7,8,9,10,11]\">\r\n          <div class=\"image-container\" [style.background-image]=\"'url(assets/imgs/' + image + '.jpg)'\"></div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/feeds/feeds-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: FeedsPageRoutingModule */

    /***/
    function srcAppPagesFeedsFeedsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPageRoutingModule", function () {
        return FeedsPageRoutingModule;
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


      var _feeds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feeds.page */
      "./src/app/pages/feeds/feeds.page.ts");

      var routes = [{
        path: '',
        component: _feeds_page__WEBPACK_IMPORTED_MODULE_3__["FeedsPage"]
      }];

      var FeedsPageRoutingModule = function FeedsPageRoutingModule() {
        _classCallCheck(this, FeedsPageRoutingModule);
      };

      FeedsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/feeds/feeds.module.ts ***!
      \*********************************************/

    /*! exports provided: FeedsPageModule */

    /***/
    function srcAppPagesFeedsFeedsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPageModule", function () {
        return FeedsPageModule;
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


      var _feeds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feeds-routing.module */
      "./src/app/pages/feeds/feeds-routing.module.ts");
      /* harmony import */


      var _feeds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feeds.page */
      "./src/app/pages/feeds/feeds.page.ts");

      var FeedsPageModule = function FeedsPageModule() {
        _classCallCheck(this, FeedsPageModule);
      };

      FeedsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feeds_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedsPageRoutingModule"]],
        declarations: [_feeds_page__WEBPACK_IMPORTED_MODULE_6__["FeedsPage"]]
      })], FeedsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/feeds/feeds.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFeedsFeedsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-home ion-title {\n  margin-bottom: 20px;\n  border-bottom: 50px;\n  padding-bottom: 30px;\n}\npage-home .image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n@media (min-width: 0px) {\n  page-home .images {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n@media (min-width: 420px) {\n  page-home .images {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n@media (min-width: 720px) {\n  page-home .images {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\npage-home .one-image {\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZHMvZmVlZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBRUcsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRFI7QUFHSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUlJO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7RUFGVjtBQUNGO0FBS0k7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQUhWO0FBQ0Y7QUFNSTtFQUNJO0lBQ0ksb0JBQUE7U0FBQSxlQUFBO0VBSlY7QUFDRjtBQU9JO0VBQ0ksV0FBQTtBQUxSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZHMvZmVlZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1ob21lIHtcclxuICAgICBpb24tdGl0bGUgXHJcbiAgICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgfVxyXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xyXG4gICAgICAgIC5pbWFnZXMge1xyXG4gICAgICAgICAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAuaW1hZ2VzIHtcclxuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgLmltYWdlcyB7XHJcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIC5vbmUtaW1hZ2Uge1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/feeds/feeds.page.ts ***!
      \*******************************************/

    /*! exports provided: FeedsPage */

    /***/
    function srcAppPagesFeedsFeedsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPage", function () {
        return FeedsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var FeedsPage = /*#__PURE__*/function () {
        function FeedsPage(navCtrl) {
          _classCallCheck(this, FeedsPage);

          this.navCtrl = navCtrl;
          this.galleryType = 'regular';
        }

        _createClass(FeedsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeedsPage;
      }();

      FeedsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      FeedsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feeds',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./feeds.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./feeds.page.scss */
        "./src/app/pages/feeds/feeds.page.scss"))["default"]]
      })], FeedsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-feeds-feeds-module-es5.js.map