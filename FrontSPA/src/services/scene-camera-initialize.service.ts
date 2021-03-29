import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { ThreeScene } from '../app/three-sample/three-sample.component';
import { ThreeDataService } from './three-data.service';

@Injectable({
  providedIn: 'root',
})
export class SceneCameraInitializeService {
  constructor(private threeDataService: ThreeDataService) { }

  private threeScene: ThreeScene = new ThreeScene();
  private boxColors = [0x81106B, 0xF2B727, 0xB8E1E9, 0x7A0202];

  public InitializeScene() {
    return new Promise((resolve, _) => {
      this.threeDataService.get().then((res: any) => {
        if (!!res.data) {
          const model = JSON.parse(res.data);
          this.threeScene.scene = new THREE.ObjectLoader().parse(model.sceneState);
        }
        else {
          this.threeScene.scene = new THREE.Scene();
          this.threeScene.scene.background = new THREE.Color(0xcccccc);
          this.threeScene.scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

          // Light
          const dirLight1 = new THREE.DirectionalLight(0xffffff);
          dirLight1.position.set(1, 1, 1);
          this.threeScene.scene.add(dirLight1);

          const dirLight2 = new THREE.DirectionalLight(0x002288);
          dirLight2.position.set(- 1, - 1, - 1);
          this.threeScene.scene.add(dirLight2);

          const ambientLight = new THREE.AmbientLight(0x222222);
          this.threeScene.scene.add(ambientLight);

          // Models
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          geometry.translate(0, 0.5, 0);

          for (let i = 0; i < 100; i++) {
            const i1 = i % 4;
            const material = new THREE.MeshPhongMaterial({ color: this.boxColors[i1], flatShading: true });
            const mesh = new THREE.Mesh(geometry, material);
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

        this.threeScene.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.threeScene.renderer.setPixelRatio(window.devicePixelRatio);
        this.threeScene.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.threeScene.renderer.domElement);

        this.threeScene.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 1000);
        this.threeScene.camera.position.set(400, 200, 0);
        if (!res.data) {

          this.threeScene.currentStateJsonString = JSON.stringify({
            sceneState: this.threeScene.scene.toJSON(),
            cameraState: this.threeScene.camera.matrix.toArray()
          });
        }
        else {
          this.threeScene.currentStateJsonString = res.data;

          const model = JSON.parse(res.data);
          this.threeScene.camera.matrix.fromArray(model.cameraState);
          this.threeScene.camera.matrix.decompose(this.threeScene.camera.position, this.threeScene.camera.quaternion, this.threeScene.camera.scale);
        }

        this.threeScene.renderer.setSize(window.innerWidth, window.innerHeight);

        resolve(this.threeScene);
      });
    });
  }
}
