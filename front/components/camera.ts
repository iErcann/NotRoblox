import * as THREE from "three";
import { Vector3 } from "three";
import { Renderer } from "./renderer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class Camera extends THREE.PerspectiveCamera {
  public followedObject: THREE.Mesh | undefined;
  public orbitControls: OrbitControls;
  constructor(renderer: Renderer) {
    super(60, window.innerWidth / window.innerHeight);
    this.position.set(0, 20, 12);

    // this.position.applyAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
    this.lookAt(0, 0, 0);
    this.orbitControls = new OrbitControls(this, renderer.domElement);
    this.orbitControls.autoRotate = false;
    this.orbitControls.maxDistance = 1;
    this.orbitControls.minDistance = 1;
    this.orbitControls.enablePan = false;
    this.orbitControls.enableDamping = false;
  }

  update() {
    this.orbitControls.update();
  }
}
