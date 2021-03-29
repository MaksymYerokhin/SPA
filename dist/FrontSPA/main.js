(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mayer\source\repos\ServerSPA\FrontSPA\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DRmR":
/*!**************************************!*\
  !*** ./src/app/models/ThreeScene.ts ***!
  \**************************************/
/*! exports provided: ThreeScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeScene", function() { return ThreeScene; });
class ThreeScene {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _three_sample_three_sample_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three-sample/three-sample.component */ "iK86");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["*"];
class AppComponent {
    constructor() {
        this.title = 'FrontSPA';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], ngContentSelectors: _c0, decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-three-sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_three_sample_three_sample_component__WEBPACK_IMPORTED_MODULE_1__["ThreeSampleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _three_sample_three_sample_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./three-sample/three-sample.component */ "iK86");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _three_sample_three_sample_component__WEBPACK_IMPORTED_MODULE_4__["ThreeSampleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();


/***/ }),

/***/ "iK86":
/*!********************************************************!*\
  !*** ./src/app/three-sample/three-sample.component.ts ***!
  \********************************************************/
/*! exports provided: ThreeSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeSampleComponent", function() { return ThreeSampleComponent; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_scene_camera_initialize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scene-camera-initialize.service */ "jV4w");
/* harmony import */ var _services_change_tracker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/change-tracker.service */ "wueM");




const _c0 = ["rendererContainer"];
class ThreeSampleComponent {
    constructor(initializer, changeTrackerService) {
        this.initializer = initializer;
        this.changeTrackerService = changeTrackerService;
    }
    ngOnInit() {
        this.initializer.InitializeScene().then((threeScene) => {
            this.threeScene = threeScene;
            this.rendererContainer.nativeElement.appendChild(this.threeScene.renderer.domElement);
            this.animate();
            this.changeTrackerService.start(this.threeScene, 10000);
        });
        let clickHandler = this.onDocumentKeyDown.bind(this);
        document.addEventListener('keydown', clickHandler, false);
    }
    onDocumentKeyDown(event) {
        event = event || window.event;
        const keycode = event.keyCode;
        let dir = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        let camera = this.threeScene.camera;
        camera.getWorldDirection(dir);
        switch (keycode) {
            case 37: //left arrow
                camera.rotation.y += 0.1;
                break;
            case 38: // up arrow
                camera.position.addScaledVector(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](dir.x, 0, dir.z), 10);
                break;
            case 39: // right arrow
                camera.rotation.y -= 0.1;
                break;
            case 40: //down arrow
                camera.position.addScaledVector(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-dir.x, 0, -dir.z), 10);
                break;
        }
        let keyUp = this.onDocumentKeyUp.bind(this);
        document.addEventListener('keyup', keyUp, false);
    }
    onDocumentKeyUp(event) {
        document.removeEventListener('keydown', this.onDocumentKeyDown, false);
    }
    animate() {
        window.requestAnimationFrame(() => this.animate());
        //this.controls.update();
        this.threeScene.renderer.render(this.threeScene.scene, this.threeScene.camera);
    }
}
ThreeSampleComponent.ɵfac = function ThreeSampleComponent_Factory(t) { return new (t || ThreeSampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_scene_camera_initialize_service__WEBPACK_IMPORTED_MODULE_2__["SceneCameraInitializeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_change_tracker_service__WEBPACK_IMPORTED_MODULE_3__["ChangeTrackerService"])); };
ThreeSampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThreeSampleComponent, selectors: [["app-three-sample"]], viewQuery: function ThreeSampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rendererContainer = _t.first);
    } }, decls: 2, vars: 0, consts: [[2, "width", "90%", "height", "90%"], ["rendererContainer", ""]], template: function ThreeSampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["#myCanvas[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocmVlLXNhbXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCIiwiZmlsZSI6InRocmVlLXNhbXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215Q2FudmFzIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });
ThreeSampleComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThreeSampleComponent, factory: ThreeSampleComponent.ɵfac });


/***/ }),

/***/ "jV4w":
/*!*********************************************************!*\
  !*** ./src/services/scene-camera-initialize.service.ts ***!
  \*********************************************************/
/*! exports provided: SceneCameraInitializeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneCameraInitializeService", function() { return SceneCameraInitializeService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _app_models_ThreeScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/models/ThreeScene */ "DRmR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _three_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./three-data.service */ "qfve");




class SceneCameraInitializeService {
    constructor(threeDataService) {
        this.threeDataService = threeDataService;
        this.threeScene = new _app_models_ThreeScene__WEBPACK_IMPORTED_MODULE_1__["ThreeScene"]();
        this.boxColors = [0x81106B, 0xF2B727, 0xB8E1E9, 0x7A0202];
    }
    // TODO: move to factory
    InitializeScene() {
        return new Promise((resolve, _) => {
            this.threeDataService.get().then((res) => {
                if (!!res.data) {
                    const model = res.data;
                    this.threeScene.scene = new three__WEBPACK_IMPORTED_MODULE_0__["ObjectLoader"]().parse(model.sceneState);
                }
                else {
                    this.threeScene.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
                    this.threeScene.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0xcccccc);
                    this.threeScene.scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__["FogExp2"](0xcccccc, 0.002);
                    // Light
                    const dirLight1 = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](0xffffff);
                    dirLight1.position.set(1, 1, 1);
                    this.threeScene.scene.add(dirLight1);
                    const dirLight2 = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](0x002288);
                    dirLight2.position.set(-1, -1, -1);
                    this.threeScene.scene.add(dirLight2);
                    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0x222222);
                    this.threeScene.scene.add(ambientLight);
                    // Models
                    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](1, 1, 1);
                    geometry.translate(0, 0.5, 0);
                    for (let i = 0; i < 100; i++) {
                        const i1 = i % 4;
                        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]({ color: this.boxColors[i1], flatShading: true });
                        const mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
                        mesh.position.x = Math.random() * 1600 - 800;
                        mesh.position.y = 0;
                        mesh.position.z = Math.random() * 1600 - 800;
                        mesh.scale.x = 20;
                        mesh.scale.y = Math.random() * 80 + 10;
                        mesh.scale.z = 20;
                        mesh.updateMatrix();
                        mesh.matrixAutoUpdate = false;
                        this.threeScene.scene.add(mesh);
                    }
                }
                //let self = this;
                //let color = new THREE.Color(0xB8E1E9);
                //this.scene.traverse(function (node) {
                //  if (node instanceof THREE.Mesh) {
                //    if (node.material.color.equals(color))
                //      self.redBoxes.push(node);
                //  }
                //});
                this.threeScene.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({ antialias: true });
                this.threeScene.renderer.setPixelRatio(window.devicePixelRatio);
                this.threeScene.renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.appendChild(this.threeScene.renderer.domElement);
                this.threeScene.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](90, window.innerWidth / window.innerHeight, 1, 1000);
                this.threeScene.camera.position.set(400, 200, 0);
                if (!res.data) {
                    this.threeScene.currentStateJsonString = JSON.stringify({
                        sceneState: this.threeScene.scene.toJSON(),
                        cameraState: this.threeScene.camera.matrix.toArray()
                    });
                }
                else {
                    this.threeScene.currentStateJsonString = res.data;
                    const model = res.data;
                    this.threeScene.camera.matrix.fromArray(model.cameraState);
                    this.threeScene.camera.matrix.decompose(this.threeScene.camera.position, this.threeScene.camera.quaternion, this.threeScene.camera.scale);
                }
                this.threeScene.renderer.setSize(window.innerWidth, window.innerHeight);
                resolve(this.threeScene);
            });
        });
    }
}
SceneCameraInitializeService.ɵfac = function SceneCameraInitializeService_Factory(t) { return new (t || SceneCameraInitializeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_three_data_service__WEBPACK_IMPORTED_MODULE_3__["ThreeDataService"])); };
SceneCameraInitializeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SceneCameraInitializeService, factory: SceneCameraInitializeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qfve":
/*!********************************************!*\
  !*** ./src/services/three-data.service.ts ***!
  \********************************************/
/*! exports provided: ThreeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeDataService", function() { return ThreeDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ThreeDataService {
    constructor(http) {
        this.http = http;
    }
    get() {
        return this.http.get('api/').toPromise();
    }
    save(data) {
        this.http.post('api/save', { data: data }).subscribe((error) => console.log(error));
    }
}
ThreeDataService.ɵfac = function ThreeDataService_Factory(t) { return new (t || ThreeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ThreeDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThreeDataService, factory: ThreeDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wueM":
/*!************************************************!*\
  !*** ./src/services/change-tracker.service.ts ***!
  \************************************************/
/*! exports provided: ChangeTrackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeTrackerService", function() { return ChangeTrackerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _three_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three-data.service */ "qfve");


class ChangeTrackerService {
    constructor(threeDataService) {
        this.threeDataService = threeDataService;
        this.timerId = null;
    }
    start(threeScene, period) {
        this.threeScene = threeScene;
        this.timerId = setInterval(() => {
            const newState = {
                sceneState: this.threeScene.scene.toJSON(),
                cameraState: this.threeScene.camera.matrix.toArray()
            };
            const newJsonString = JSON.stringify(newState);
            if (!!this.threeScene.currentStateJsonString && this.threeScene.currentStateJsonString !== newJsonString) {
                this.threeScene.currentStateJsonString = newJsonString;
                this.threeDataService.save(newState);
            }
        }, period);
    }
    // TODO: can be moved to component if we want to reuse this service
    ngOnDestroy() {
        if (this.timerId)
            clearInterval(this.timerId);
    }
}
ChangeTrackerService.ɵfac = function ChangeTrackerService_Factory(t) { return new (t || ChangeTrackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_three_data_service__WEBPACK_IMPORTED_MODULE_1__["ThreeDataService"])); };
ChangeTrackerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChangeTrackerService, factory: ChangeTrackerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map