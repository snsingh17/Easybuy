(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uploadimage-uploadimage-module"],{

/***/ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js ***!
  \**********************************************************************************/
/*! exports provided: AngularFireStorage, AngularFireStorageModule, BUCKET, createStorageRef, createUploadTask, fromTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function() { return AngularFireStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function() { return AngularFireStorageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET", function() { return BUCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStorageRef", function() { return createStorageRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUploadTask", function() { return createUploadTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTask", function() { return fromTask; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} task
 * @return {?}
 */

function fromTask(task) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        const progress = (/**
         * @param {?} snap
         * @return {?}
         */
        (snap) => subscriber.next(snap));
        /** @type {?} */
        const error = (/**
         * @param {?} e
         * @return {?}
         */
        e => subscriber.error(e));
        /** @type {?} */
        const complete = (/**
         * @return {?}
         */
        () => subscriber.complete());
        task.on('state_changed', progress, error, complete);
        return (/**
         * @return {?}
         */
        () => task.cancel());
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AngularFireUploadTask() { }
if (false) {}
/**
 * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
 * This method creates an observable of the upload and returns on object that provides
 * multiple methods for controlling and monitoring the file upload.
 * @param {?} task
 * @return {?}
 */
function createUploadTask(task) {
    /** @type {?} */
    const inner$ = fromTask(task);
    return {
        task,
        then: task.then.bind(task),
        catch: task.catch.bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges: (/**
         * @return {?}
         */
        () => inner$),
        percentageChanges: (/**
         * @return {?}
         */
        () => inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} s
         * @return {?}
         */
        s => s.bytesTransferred / s.totalBytes * 100))))
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AngularFireStorageReference() { }
if (false) {}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 * @param {?} ref
 * @param {?} schedulers
 * @param {?} keepUnstableUntilFirst
 * @return {?}
 */
function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
    return {
        getDownloadURL: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((/**
         * @return {?}
         */
        () => ref.getDownloadURL())), keepUnstableUntilFirst)),
        getMetadata: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((/**
         * @return {?}
         */
        () => ref.getMetadata())), keepUnstableUntilFirst)),
        delete: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.delete())),
        child: (/**
         * @param {?} path
         * @return {?}
         */
        (path) => createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst)),
        updateMetadata: (/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.updateMetadata(meta))),
        put: (/**
         * @param {?} data
         * @param {?=} metadata
         * @return {?}
         */
        (data, metadata) => {
            /** @type {?} */
            const task = ref.put(data, metadata);
            return createUploadTask(task);
        }),
        putString: (/**
         * @param {?} data
         * @param {?=} format
         * @param {?=} metadata
         * @return {?}
         */
        (data, format, metadata) => {
            /** @type {?} */
            const task = ref.putString(data, format, metadata);
            return createUploadTask(task);
        }),
        listAll: (/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.listAll()))
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.storageBucket');
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */
class AngularFireStorage {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} storageBucket
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, storageBucket, 
    // tslint:disable-next-line:ban-types
    platformId, zone) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
        this.storage = zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
            return app.storage(storageBucket || undefined);
        }));
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ref(path) {
        return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
    }
    /**
     * @param {?} path
     * @param {?} data
     * @param {?=} metadata
     * @return {?}
     */
    upload(path, data, metadata) {
        /** @type {?} */
        const storageRef = this.storage.ref(path);
        /** @type {?} */
        const ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
        return ref.put(data, metadata);
    }
}
AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) { return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
/** @nocollapse */
AngularFireStorage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [BUCKET,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
];
/** @nocollapse */ AngularFireStorage.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function AngularFireStorage_Factory() { return new AngularFireStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(BUCKET, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); }, token: AngularFireStorage, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [BUCKET]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireStorageModule {
}
AngularFireStorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AngularFireStorageModule });
AngularFireStorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AngularFireStorageModule_Factory(t) { return new (t || AngularFireStorageModule)(); }, providers: [AngularFireStorage] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                providers: [AngularFireStorage]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-storage.js.map

/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uploadimage/uploadimage.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uploadimage/uploadimage.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<ion-content>\r\n\r\n  <div class=\"containerWrap\">\r\n\r\n   <ion-button expand=\"full\" *ngIf=\"!isLoading  && !isLoaded\" class=\"ion-text-center\">\r\n     <ion-icon slot=\"start\" lazy=\"true\" name=\"image\"></ion-icon>\r\n     <input type=\"file\" (change)=\"uploadImagetoFirebase($event)\" id=\"file-input\"  accept=\"image/png, image/jpg\">\r\n   </ion-button>\r\n\r\n    <ion-card *ngIf=\"isLoading && !isLoaded\">\r\n      <ion-card-content *ngIf=\"percentage | async as percent\" class=\"ion-text-center\">\r\n       Progress: {{percent |  number}}%\r\n       <ion-progress-bar value=\"{{percent / 100}}\"></ion-progress-bar>\r\n         <button class=\"btn\" (click)=\"goToNextPage()\" style=\"\">Continue</button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/uploadimage/uploadimage-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/uploadimage/uploadimage-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UploadimagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadimagePageRoutingModule", function() { return UploadimagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _uploadimage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploadimage.page */ "./src/app/pages/uploadimage/uploadimage.page.ts");




const routes = [
    {
        path: '',
        component: _uploadimage_page__WEBPACK_IMPORTED_MODULE_3__["UploadimagePage"]
    }
];
let UploadimagePageRoutingModule = class UploadimagePageRoutingModule {
};
UploadimagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadimagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/uploadimage/uploadimage.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/uploadimage/uploadimage.module.ts ***!
  \*********************************************************/
/*! exports provided: UploadimagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadimagePageModule", function() { return UploadimagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _uploadimage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploadimage-routing.module */ "./src/app/pages/uploadimage/uploadimage-routing.module.ts");
/* harmony import */ var _uploadimage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploadimage.page */ "./src/app/pages/uploadimage/uploadimage.page.ts");







let UploadimagePageModule = class UploadimagePageModule {
};
UploadimagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _uploadimage_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadimagePageRoutingModule"]
        ],
        declarations: [_uploadimage_page__WEBPACK_IMPORTED_MODULE_6__["UploadimagePage"]]
    })
], UploadimagePageModule);



/***/ }),

/***/ "./src/app/pages/uploadimage/uploadimage.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/uploadimage/uploadimage.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#7e8e96;\n}\n\n.containerWrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nion-button {\n  --background:#444444;\n}\n\n.btn {\n  background-color: #333c50;\n  text-align: center;\n  color: #7e8e96;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkaW1hZ2UvdXBsb2FkaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0ksb0JBQUE7QUFESjs7QUFJQTtFQUNNLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXBsb2FkaW1hZ2UvdXBsb2FkaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojN2U4ZTk2OyBcclxufVxyXG5cclxuLmNvbnRhaW5lcldyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDojNDQ0NDQ0O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzNjNTA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM3ZThlOTY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/uploadimage/uploadimage.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/uploadimage/uploadimage.page.ts ***!
  \*******************************************************/
/*! exports provided: UploadimagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadimagePage", function() { return UploadimagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let UploadimagePage = class UploadimagePage {
    constructor(database, storage, router, loading, authservice) {
        this.database = database;
        this.storage = storage;
        this.router = router;
        this.loading = loading;
        this.authservice = authservice;
        this.isLoading = false;
        this.isLoaded = false;
        this.imageCollection = this.database.collection('loginUploads');
        this.imagefile = this.imageCollection.valueChanges();
    }
    ngOnInit() {
    }
    uploadImagetoFirebase(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const load = yield this.loading.create({
                spinner: 'dots',
            });
            load.present();
            const file = event.target.files;
            console.log(file);
            var fileName = file[0];
            console.log(fileName);
            if (fileName.type.split('/')[0] !== "image") {
                console.error("File is not an Image");
                return;
            }
            this.isLoading = true;
            this.isLoaded = false;
            const path = `loginUploads/${new Date().getTime()}_${fileName.name}`;
            var fileRef = this.storage.ref(path);
            this.imageUpload = this.storage.upload(path, fileName);
            this.loading.dismiss();
            this.percentage = this.imageUpload.percentageChanges();
            this.imageUpload.then(res => {
                var imagefile = res.task.snapshot.ref.getDownloadURL();
                imagefile.then(downloadableUrl => {
                    console.log("URL", downloadableUrl);
                    this.database.doc(`profile/${this.authservice.getUID()}`).update({
                        photoUrl: downloadableUrl
                    });
                });
            });
        });
    }
    goToNextPage() {
        this.router.navigate(['tabs']);
    }
};
UploadimagePage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
UploadimagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploadimage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./uploadimage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uploadimage/uploadimage.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./uploadimage.page.scss */ "./src/app/pages/uploadimage/uploadimage.page.scss")).default]
    })
], UploadimagePage);



/***/ })

}]);
//# sourceMappingURL=pages-uploadimage-uploadimage-module-es2015.js.map