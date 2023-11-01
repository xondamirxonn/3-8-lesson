


 let qizil = document.getElementById("qizil");
 let sariq = document.getElementById("sariq");
 let yashil = document.getElementById("yashil");
function redLight(){
    qizil.style.backgroundColor = "red";
  

}

function yellowLight() {
  // console.log(yellow);
 sariq.style.backgroundColor = 'yellow'
  
}

function greenLight(){
  // console.log(green);
  yashil.style.backgroundColor = 'green'
}

function tl(){
  redLight();

  setTimeout(() => {
    yellowLight();

  setTimeout(() => {
    greenLight();

    setTimeout(yellowLight, 5_000);
  }, 2_000);
  }, 5_000);
}

tl();
setInterval(tl, 14_000);