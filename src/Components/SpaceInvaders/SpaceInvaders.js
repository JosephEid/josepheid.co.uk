import React, { useEffect } from "react";
import Cannon from "../Cannon/Cannon";
import Invader from "../Invader/Invader";
import "./SpaceInvaders.css";

function SpaceInvaders() {
  useEffect(() => {
    var canvas = document.getElementById("space-invaders");
    var myGameArea = {
      start: function () {
        this.context = canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
      },
      stop: function () {
        clearInterval(this.interval);
      },
      clear: function () {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
      },
    };

    var invaders = [];
    var invaderRows = [];
    var cannonShots = [];
    var cannon  = new Cannon(myGameArea, canvas.height*0.05, canvas.height*0.05, 0, canvas.height*0.9);
    invaderRows.push(
      " Joseph Eid, Software Engineer",
      "currently working in London, UK"
    );

    for (var i = 0; i < invaderRows.length; i++) {
      for (var j = 0; j < invaderRows[i].length; j++) {
        invaders.push(
          new Invader(
            myGameArea,
            invaderRows[i][j],
            canvas.height*0.025,
            canvas.height*0.025,
            j * 20,
            (i + 1) * 30
          )
        );
      }
    }
    canvas.onmousemove = getMousePos;
    canvas.onmousedown = shoot;
    myGameArea.start();

    function updateGameArea() {
      myGameArea.clear();
      invaders.forEach((x) => x.draw());
      invaders.forEach((x) => x.newPos());
      cannonShots.forEach((x) => x.draw());
      cannonShots.forEach((x) => x.newPos());
      cannonShots.forEach((x) => checkIfOob(x));
      cannon.draw();
    }

    function checkIfOob(shot) {
      if (shot.y < 0) {
        cannonShots.splice(cannonShots.indexOf(shot), 1);
      }
    }
    function getMousePos(evt) {
      var rect = canvas.getBoundingClientRect();
      cannon.newPos(evt.clientX - rect.left - cannon.width/2);
    }

    function shoot(evt) {
      cannonShots.push(cannon.createShot());
    }
  });
  
  return <canvas width={`${window.screen.width*0.55}px`} height={`${window.screen.width*0.38}px`} id="space-invaders" />;
}

export default SpaceInvaders;
