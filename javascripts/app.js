// player Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var alien = {
  direction: "N",
  x: 8,
  y: 6,
  travelLog: []
}
// ======================
function turnLeft(player){
  calculateDirection("left", player);
  console.log("turnLeft was called!, player is facing " + player.direction + " (x: " + player.x + " / y: " + player.y + ")");
}

function turnRight(player){
  calculateDirection("right", player);
  console.log("turnRight was called!, player is facing " + player.direction + " (x: " + player.x + " / y: " + player.y + ")");
}

function moveForward(player){
  player.travelLog.push([player.x, player.y]);
  calculateDirection("forward", player);
  console.log("moveForward was called!, player is facing " + player.direction + " (x: " + player.x + " / y: " + player.y + ")");
}

function moveBackwards(player) {
  player.travelLog.push([player.x, player.y]);
  calculateDirection("backwards", player);
  console.log("moveBackwards was called!, player is facing " + player.direction + " (x: " + player.x + " / y: " + player.y + ")");
}

function calculateDirection(direction, player) {
  switch (direction) {

    case "left":
      if (player.direction === "N") {
        player.direction = "W";
      } else if (player.direction === "E") {
        player.direction = "N";
      } else if (player.direction === "S") {
        player.direction = "E";
      } else if (player.direction === "W") {
        player.direction = "S";
      }
      break;

    case "right":
      if (player.direction === "N") {
        player.direction = "E";
      } else if (player.direction === "E") {
        player.direction = "S";
      } else if (player.direction === "S") {
        player.direction = "W";
      } else if (player.direction === "W") {
        player.direction = "N";
      }
      break;

    case "forward":
      if (player.direction === "N") {
        if (player.y > 0) {
          player.y -= 1;
          grid(player, alien)
        } else {
          movementError();
        }
      } else if (player.direction === "E") {
        if (player.x < 9) {
          player.x += 1;
          grid(player, alien)
        } else {
          movementError();
        }
      } else if (player.direction === "S") {
        if (player.y < 9) {
          player.y += 1;
          grid(player, alien)
        } else {
          movementError();
        }
      } else if (player.direction === "W") {
        if (player.x > 0) {
          player.x -= 1;
          grid(player, alien)
        } else {
          movementError();
        }
      }
      break;

    case "backwards":
      if (player.direction === "N") {
        if (player.y < 9) {
          player.y += 1;
          grid(player, alien)
        } else {
          movementError();
        }
      } else if (player.direction === "E") {
        if (player.x > 0) {
          player.x -= 1;
          grid(player, alien)
        } else {
          movementError();
        }
      } else if (player.direction === "S") {
        if (player.y > 0) {
          player.y -= 1;
          grid(player, alien)
        } else {
          movementError();
        }
      } else if (player.direction === "W") {
        if (player.x < 9) {
          player.x += 1;
          grid(player, alien)
        } else {
          movementError();
        }
      }
      break;
  }

}

function reciveOrders(orders, player) {
  if (orders) {
    for (var i = 0; i < orders.length; i++) {
      switch (orders[i]) {
        case "l":
          turnLeft(player);
          break;
        case "r":
          turnRight(player);
          break;
        case "f":
          moveForward(player);
          break;
        default:
          console.log("Movement '" + orders[i] + "' is not allowed.");
          break;
      }
    }
    travelLog(player);
  }
}

function travelLog(player) {
  console.log("------------------------------\nMars player Travel log: ");
  player.travelLog.forEach(function(i) {
    console.log("(x: " + i[0] + " / y: " + i[1] + ")");
  });
}

function movementError() {
  console.log("You cant go out of the grid :(");
}

function grid(player, alien) {
  var x = 10;
  var y = 10;
  var map = "";
  for (var i = 0; i < x; i++) {
    for (var b = 0; b < y; b++) {
      if (rover.y == i && rover.x == b) {
        map += "[]";
      } else if (alien.y == i && alien.x == b) {
        map += "Òó";
      } else {
        map += "--";
      }
    }
    map += "\n";
  }
  console.clear();
  console.log(map);
}

grid(rover, alien);
