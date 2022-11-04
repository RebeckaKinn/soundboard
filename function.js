//model
const bird = new Audio("sound/bird.wav"); 
const dog = new Audio("sound/dog.wav");
const lion = new Audio("sound/lion.wav");

//view

function updateview(){
    document.getElementById(`app`).innerHTML = /*HTML*/`
    
    <h1>What does the animal say?</h1>
    <br/>
    <div onclick="playsound('bird')" class="picture"><img src="img/bird.png"></div> 
    <div onclick="playsound('dog')" class="picture"><img src="img/dog.png"></div>
    <div onclick="playsound('lion')" class="picture"><img src="img/lion.png"></div>   
`}


//controller
function playsound(animal){
    if (animal == 'bird'){
        bird.play();
    }
    else if (animal == 'dog'){
        dog.play();
    }
    else if (animal == 'lion'){
        lion.play();
    }
    updateview();
}

updateview();