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
    console.log(color);
    var body = document.querySelector("body");
    
    body.style.backgroundColor = color;
    body.style.backgroundImage = ``;
  
    var changeName2 = document.querySelector(".changeName2");
    changeName2.textContent=color;
  
  }
  
  
  function gradiantcolor(){

      var color1 = generatecolour();
      var color2 = generatecolour();
  
      console.log(color1+" + "+color2);
  
      var body = document.getElementById("body");
  
     body.style.backgroundColor=color1;

     body.style.backgroundImage = `linear-gradient(320deg ,${color1} , ${color2})`;
      var changeName1 = document.querySelector(".changeName1");
      changeName1.textContent=color1+" + "+color2;
  
  }
