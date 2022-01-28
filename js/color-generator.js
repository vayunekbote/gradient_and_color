String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };

function changeColor() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    document.getElementById("main").style.backgroundColor = "rgb({}, {}, {})".format(r, g, b);
    document.getElementById("randomColor").innerHTML = "rgb({}, {}, {})".format(r, g, b);
    if ((parseInt(r + g + b) < 381) || (r < 60 || g < 60 || b < 60)) {
        document.getElementById("accto").style.color = "white";
    }
    else{
        document.getElementById("accto").style.color = "black";
    }
}


document.getElementById("btn").addEventListener("click", changeColor);