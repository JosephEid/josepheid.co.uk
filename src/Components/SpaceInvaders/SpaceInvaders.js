import React, { useEffect } from "react";
import Cannon from "../Cannon/Cannon";
import Invader from "../Invader/Invader";
import "./SpaceInvaders.css";

function SpaceInvaders() {
  useEffect(() => {
    var canvas = document.getElementById("space-invaders");
    var lives = 3;
    var score = 0;
    var myGameArea = {
      start: function () {
        this.context = canvas.getContext("2d");
        this.frameNo = 0;
        this.shotInvertal = setInterval(randomShot, 1000);
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
    var invaderShots = [];

    var cannon = new Cannon(
      myGameArea,
      canvas.height * 0.05,
      canvas.height * 0.05,
      0,
      canvas.height * 0.9
    );
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
            canvas.height * 0.025,
            canvas.height * 0.025,
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
      cannonShots.forEach((x) => checkIfKill(x));
      invaderShots.forEach((x) => x.draw());
      invaderShots.forEach((x) => x.newPos());
      invaderShots.forEach((x) => checkIfOob(x));
      invaderShots.forEach((x) => checkIfKill(x));
      cannon.draw();
      drawScoreboard();
    }

    function drawScoreboard() {
      var ctx = myGameArea.context;
      ctx.fillStyle = "rgb(32, 179, 76)";
      ctx.font = "bold 2em arcadeFont";
      ctx.fillText(
        `♥︎: ${lives}      score: ${score}`,
        0.01 * canvas.width,
        0.99 * canvas.height
      );
    }

    function randomShot() {
      var nonDeadInvaders = invaders.filter(
        (x) => x.fill === "white" && x.text !== " "
      );
      var randomInvader =
        nonDeadInvaders[Math.floor(Math.random() * nonDeadInvaders.length)];
      if (randomInvader) invaderShots.push(randomInvader.createShot());
    }

    function checkIfOob(shot) {
      if (shot.type === "cannon") {
        if (shot.y < 0) {
          cannonShots.splice(cannonShots.indexOf(shot), 1);
        }
      } else {
        if (shot.y >= canvas.height) {
          invaderShots.splice(invaderShots.indexOf(shot), 1);
        }
      }
    }

    function checkIfKill(shot) {
      var shotXMin = shot.x;
      var shotXMax = shotXMin + shot.spriteWidth;
      var shotYMin = shot.y;
      var shotYMax = shotYMin + shot.spriteHeight;
      if (shot.type === "cannon") {
        for (i = 0; i < invaders.length; i++) {
          var inv = invaders[i];
          var invXMin = inv.x;
          var invXMax = invXMin + inv.spriteWidth;
          var invYMin = inv.y;
          var invYMax = invYMin + inv.spriteHeight;
          if (
            shotXMax >= invXMin &&
            shotXMin <= invXMax &&
            shotYMin <= invYMax &&
            shotYMax >= invYMin &&
            inv.fill === "white" &&
            inv.text !== " "
          ) {
            inv.die();
            cannonShots.splice(cannonShots.indexOf(shot), 1);
            score += 100;
          }
        }
      } else {
        var canXMin = cannon.x;
        var canXMax = canXMin + cannon.spriteWidth;
        var canYMin = cannon.y;
        var canYMax = canYMin + cannon.spriteHeight;
        if (
          shotXMax >= canXMin &&
          shotXMin <= canXMax &&
          shotYMin <= canYMax &&
          shotYMax >= canYMin
        ) {
          invaderShots.splice(invaderShots.indexOf(shot), 1);
          lives -= 1;
        }
      }
    }

    function getMousePos(evt) {
      var rect = canvas.getBoundingClientRect();
      cannon.newPos(evt.clientX - rect.left - cannon.width / 2);
    }

    function shoot(evt) {
      cannonShots.push(cannon.createShot());
    }
  });

  return (
    <canvas
      width={`${window.screen.width * 0.55}px`}
      height={`${window.screen.width * 0.38}px`}
      id="space-invaders"
    />
  );
}

export default SpaceInvaders;
