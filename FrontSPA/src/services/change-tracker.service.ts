import { Injectable } from '@angular/core';
import { ThreeScene } from '../app/models/ThreeScene';
import { ThreeDataService } from './three-data.service';

@Injectable({
  providedIn: 'root',
})
export class ChangeTrackerService {

  private threeScene: ThreeScene;
  private timerId = null;

  constructor(private threeDataService: ThreeDataService) {  }

  public start(threeScene: ThreeScene, period: number) {
    this.threeScene = threeScene;

    this.timerId = setInterval(() => {
      const newState = {
        sceneState: this.threeScene.scene.toJSON(),
        cameraState: this.threeScene.camera.matrix.toArray()
      }
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
