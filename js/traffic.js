'use strict'

function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function doTrafficLights() {
  var activeLight = getActiveLight();
  if (activeLight === "green") {
      turnGreen();
  } else if (activeLight === "yellow" ) {
      turnYellow();
  } else {
      turnRed();
  }
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(function() {
  handleClicks();
})