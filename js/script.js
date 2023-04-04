// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

//calculate volume 
function calculate() {
  var fahrenheit = document.getElementById("celsius").value;
  var celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById("result").innerHTML = "The volume is " + celsius.toFixed(2) 
}