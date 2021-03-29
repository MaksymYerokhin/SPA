import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { SceneCameraInitializeService } from '../../services/scene-camera-initialize.service';
import { ChangeTrackerService } from '../../services/change-tracker.service';
import { ThreeScene } from '../models/ThreeScene';

@Component({
  selector: 'app-three-sample',
  templateUrl: './three-sample.component.html',
  styleUrls: ['./three-sample.component.css']
})
@Injectable()
export class ThreeSampleComponent implements OnInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  private threeScene: ThreeScene;

  constructor(private initializer: SceneCameraInitializeService, private changeTrackerService: ChangeTrackerService) { }

  ngOnInit(): void {
    this.initializer.InitializeScene().then((threeScene: ThreeScene) => {
      this.threeScene = threeScene;
      this.rendererContainer.nativeElement.appendChild(this.threeScene.renderer.domElement);
      this.animate();
      this.changeTrackerService.start(this.threeScene, 10000);
    });
    
    let clickHandler = this.onDocumentKeyDown.bind(this)
    document.addEventListener('keydown', clickHandler, false);
  }

  private onDocumentKeyDown(event) {
    event = event || window.event;
    const keycode = event.keyCode;

    let dir = new THREE.Vector3();
    let camera = this.threeScene.camera;
    camera.getWorldDirection(dir);

    switch (keycode) {
      case 37: //left arrow
        camera.rotation.y += 0.1;
        break;
      case 38: // up arrow
        camera.position.addScaledVector(new THREE.Vector3(dir.x, 0, dir.z), 10);
        break;
      case 39: // right arrow
        camera.rotation.y -= 0.1;
        break;
      case 40: //down arrow
        camera.position.addScaledVector(new THREE.Vector3(-dir.x, 0, -dir.z), 10);
        break;
    }

    let keyUp = this.onDocumentKeyUp.bind(this)
    document.addEventListener('keyup', keyUp, false);
  }

  private onDocumentKeyUp(event) {
    document.removeEventListener('keydown', this.onDocumentKeyDown, false);
  }

  private animate() {
    window.requestAnimationFrame(() => this.animate());
    //this.controls.update();
    this.threeScene.renderer.render(this.threeScene.scene, this.threeScene.camera);
  }
}
