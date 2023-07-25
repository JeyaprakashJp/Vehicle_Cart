document.getElementById("black").addEventListener('click', bf2);
function bf2(){
document.getElementById("img1").src="carb.png";
}
document.getElementById("red").addEventListener('click', bf3);
function bf3(){
document.getElementById("img1").src="carr.png";
}
document.getElementById("white").addEventListener('click', bf1);
function bf1(){
document.getElementById("img1").src="carw1.png";
}
document.getElementById("add").addEventListener('click',bf4);
function bf4(){
    document.getElementById("add").innerHTML="Your Item Added to Cart";
}