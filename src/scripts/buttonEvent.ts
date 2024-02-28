import { Behaviour, Button, Camera, OrbitControls, serializable } from "@needle-tools/engine";
import { Object3D } from "three";

export class ButtonEvent extends Behaviour {
  @serializable(Object3D)
  target!: Object3D;

  @serializable(OrbitControls)
  oc!: OrbitControls;

  @serializable()
  locationMarker: string = '';


  start() {

    // logging this is useful for debugging in the browser. 
    // You can open the developer console (F12) to see what data your component contains
    console.log(this);




    // Look at camera
    window.addEventListener(`goToMarker-${this.locationMarker}`, () => {

      console.log(`fired goToMarker-${this.locationMarker}`);
      this.oc.setCameraAndLookTarget(this.target);
    });
  }

  // update will be called every frame
  update() {
    // this.gameObject.rotateY(this.context.time.deltaTime * this.speed);
  }

  sendMarkerEvent() {
    window.dispatchEvent(new CustomEvent('buttonData',
      { detail: { locationMarker: this.locationMarker } }));
  }
}