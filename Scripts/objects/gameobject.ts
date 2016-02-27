/// <reference path="../../typings/tsd.d.ts"/>

// Jake Parnell
// Comp392 - Assignment 1
// Last Modified by: Jake Parnell
// Date Last Modified Jan 28th 2016

module objects {
    export class gameObject extends THREE.Mesh {
        private _geometry: THREE.Geometry;
        private _material: THREE.Material;
        
        constructor(geometry: THREE.Geometry, material: THREE.Material, x:number, y:number, z:number) {
            super(geometry, material);
            this._geometry = geometry;
            this._material = material;
            this.position.x = x;
            this.position.y = y;
            this.position.z = z;
            this.receiveShadow = true;
            this.castShadow = true;
        }
    }
}