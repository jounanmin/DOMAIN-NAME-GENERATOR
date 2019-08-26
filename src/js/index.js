/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var a = ["the", "our"];
var b = ["great", "big"];
var c = ["jogger", "racoon"];

a.forEach(unicorn => {
  b.forEach(pixie => {
    c.forEach(satyr => {
      document.querySelector("#generator").innerHTML +=
        "<li>" + unicorn + pixie + satyr + ".com</li>";
    });
  });
});
