function generatecolour() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  var hexcolor = "#";

  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * hexArray.length);
    hexcolor = hexcolor + hexArray[random];
  }

  return hexcolor;
}

function hexcolor() {
  var color = generatecolour();
//   console.log(color);
  var body = document.querySelector("body");

  body.style.backgroundColor = color;
  body.style.backgroundImage = ``;

  var changeName2 = document.querySelector(".changeName2");
  changeName2.textContent = color;
}

var color1;
var color2;

function gradiantcolor() {
  color1 = generatecolour();
  color2 = generatecolour();

//   console.log(color1 + " + " + color2);

  var body = document.getElementById("body");

  body.style.backgroundColor = color1;

  body.style.backgroundImage = `linear-gradient(320deg ,${color1} , ${color2})`;
  var changeName1 = document.querySelector(".changeName1");
  changeName1.textContent = color1 + " + " + color2;
}

$(".dial").knob({
  min: 0,
  max: 359,
  width: 100,
  height: 100,
  displayInput: true,

  change: function (v) {
    var body = document.getElementById("body");

    var a = document.querySelector(".dial").value;
    var text = `${a}`;
    body.style.backgroundImage = `linear-gradient(${text}deg,${color1} , ${color2})`;
//     console.log(`${color1} + ${color2} + ${text}`);
  },

  cursor: 30,
  thickness: 0.3,
  fgColor: "#222222",
});
