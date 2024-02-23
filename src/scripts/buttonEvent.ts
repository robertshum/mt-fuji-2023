import { Behaviour, serializable } from "@needle-tools/engine";

export class ButtonEvent extends Behaviour {
  @serializable()
  speed: number = 1;

  @serializable()
  locationMarker: string = '';

  start() {
    // logging this is useful for debugging in the browser. 
    // You can open the developer console (F12) to see what data your component contains
    console.log(this);
  }

  // update will be called every frame
  update() {
    // this.gameObject.rotateY(this.context.time.deltaTime * this.speed);
  }

  sendMarkerEvent(){
    window.dispatchEvent(new CustomEvent('buttonData', 
    { detail: { locationMarker : this.locationMarker } }));
  }
}