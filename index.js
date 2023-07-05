// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("We got clicked");
// }

// document.querySelector("button").addEventListener("click", function handleClick(){
//     alert("We got clicked");
// });   -->> both are correct method


// This is nonsense
// document.querySelector(".a").addEventListener("click", handleClick);
// document.querySelector(".s").addEventListener("click", handleClick);
// document.querySelector(".d").addEventListener("click", handleClick);
// document.querySelector(".j").addEventListener("click", handleClick);
// document.querySelector(".k").addEventListener("click", handleClick);
// document.querySelector(".l").addEventListener("click", handleClick);


//for clicking on buttons
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this.style.color="white");
        // this.style.color="white";
        // alert("Sound Played Success");
        //    console.log(this.style.color="white");
        console.log(this.textContent);
        var clickable = this.textContent;
        makeSound(clickable);
        buttonAnimation(clickable);

    });


}


//for real keypress from the keyboard
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//for making sound function
function makeSound(key) {
    switch (key) {
        case "w":
            document.querySelector("h1").style.color="green";
            setTimeout(function(){document.querySelector("h1").style.color="#DBEDF3"},300);
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            document.querySelector("h1").style.color="red";
            setTimeout(function(){document.querySelector("h1").style.color="#DBEDF3"},300);
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            document.querySelector("h1").style.color="pink";
            setTimeout(function(){document.querySelector("h1").style.color="#DBEDF3"},300);
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            document.querySelector("h1").style.color="purple";
            setTimeout(function(){document.querySelector("h1").style.color="#DBEDF3"},300);
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            document.querySelector("h1").style.color="orange";
            setTimeout(function(){document.querySelector("h1").style.color="#DBEDF3"},300);
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            document.querySelector("h1").style.color="blue";
            setTimeout(function(){document.querySelector("h1").style.color="#DBEDF3"},300);
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            document.querySelector("h1").style.color="yellow";
            setTimeout(function(){document.querySelector("h1").style.color="#DBEDF3"},300);
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default: alert("Wrong click");

    }
}


function buttonAnimation(currentkey){

    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}