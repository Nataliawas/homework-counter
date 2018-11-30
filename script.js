(function () {
  var value = 0


  var add1 = document.getElementById("append-button").addEventListener("click", function () {
    value += 1;
    document.getElementById("counter").innerHTML = value;
  })



  var minus1 = document.getElementById("less-button").addEventListener("click", function () {
    value -= 1;
    document.getElementById("counter").innerHTML = value;
  })


})()



function toastAddOne() {
  // Get the snackbar DIV
  var x = document.getElementById("plusOne");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}

function toastMinusOne() {
  // Get the snackbar DIV
  var y = document.getElementById("minusOne");

  // Add the "show" class to DIV
  y.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ y.className = y.className.replace("show", ""); }, 1500);
}