"use strict";
fetch("https://jsonplaceholder.typicode.com/photos/4575")
  .then((response) => response.json())
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
  .then((data) => {
    const albumInfoContainer = document.getElementById("albumInfo");
  });
