import React, { useState, useEffect } from "react";
import Invader from "../Invader/Invader";

function SpaceInvaders() {
  useEffect(() => {
    var canvas = document.getElementById("space-invaders");
    console.log(canvas.getContext("2d"));
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
    invaderRows.push(
      "Joseph Eid, Software Engineer",
      "currently working in London UK"
    );

    for (var i = 0; i < invaderRows.length; i++) {
      for (var j = 0; j < invaderRows[i].length; j++) {
        invaders.push(
          new Invader(
            myGameArea,
            invaderRows[i][j],
            10,
            10,
            j * 10,
            (i + 1) * 30
          )
        );
      }
    }

    myGameArea.start();

    function updateGameArea() {
      myGameArea.clear();
      invaders.forEach((x) => x.newPos());
      invaders.forEach((x) => x.update());
    }
  });

  return <canvas width="800px" height="800px" id="space-invaders" />;
}

export default SpaceInvaders;
