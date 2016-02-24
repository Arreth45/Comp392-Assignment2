/// <reference path="../../typings/tsd.d.ts"/>

// Jake Parnell
// Comp392 - Assignment 1
// Last Modified by: Jake Parnell
// Date Last Modified Jan 28th 2016

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeed: number; 
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeed: number) {
            this.rotationSpeed = rotationSpeed;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
    }
}
