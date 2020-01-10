var start = document.createElement("span");
start.innerHTML = "You hear beeping.";
document.getElementById("textspeak").appendChild(start);

// Of course you couldn't. 
// Of course you weren't <i>really</i> wandering.

//

// +thisInput, "is not a recognized command."

// For some reason, she couldn't remember your name.
// ?? What's your name, anyway?

var positive = ["yes", "y", "you bet", "yeehaw", "fuck yeah"];
var negative = ["no","n", "fuck no"];
var actions = ["watch", "listen", "get", "scream", "talk", "approach", "walk", "grab", "touch", "feel", "snooze", "sleep"];

let input = document.getElementById("input");
let points = 0; let name = "";

input.addEventListener("keyup", function(event) {
    let thisInput = document.getElementById("input").value;
    if (event.keyCode === 13) {

        if (points===0) {
            console.log("Progress: " +points, "/ 107");
        }

    } else { event.preventDefault(); }
});





/*** 
 * var start2 = document.createElement("span");
        start2.innerHTML = ">  ";
        document.getElementById("textspeak").appendChild(start2);
        console.log(thisInput);
 * 
 * ***/


 // HAHAHAHAHAH ------>     PROMPT
                     //     The story is about an outgoing fire fighter, an introverted wanderer, and an electrician who is obsessed with a prostitute. It takes place in a city-sized magical device. The crux of the story involves a lecture.
