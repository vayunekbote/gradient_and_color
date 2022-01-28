String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };

function changeGradient() {
    var ang = Math.floor(Math.random() * 359)
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var r1 = Math.floor(Math.random() * 255)
    var g1 = Math.floor(Math.random() * 255)
    var b1 = Math.floor(Math.random() * 255)
    document.getElementById("main").style.backgroundImage = "linear-gradient({}deg, rgb({}, {}, {}), rgb({}, {}, {}))".format(ang, r, g, b, r1, g1, b1);
    document.getElementById("randomColor").innerHTML = "linear-gradient({}deg, rgb({}, {}, {}), rgb({}, {}, {}))".format(ang, r, g, b, r1, g1, b1);
}


document.getElementById("btn1").addEventListener("click", changeGradient);