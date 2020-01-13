// DYNAMICALLY ADDING TEXT VIA JQUERY
$('#textspeak').append("<span>You hear beeping.</span>");
    // $('#textspeak').append("<span></span>");

// Of course you couldn't. 
// Of course you weren't <i>really</i> wandering.

// Phantasmagoria

// +thisInput, "is not a recognized command."

// For some reason, she couldn't remember your name.
// ?? What's your name, anyway?

var input = document.getElementById("input");

let points = 0; let name = "";
let alarm = "ringing"; let lucidity = "awake";

input.addEventListener("keyup", function(event) {

    // Gets/Defines input
    let thisInput = document.getElementById("input").value;

    // Checks if p/n/pa/a keyword(s) are used
    var positive = ["yes", "y", "you bet", "yeehaw", "fuck yeah", "alright"];
    var negative = ["no","n", "fuck no", "nope"];
    var passive = ["so", "ok", "okay","whatever", "cool", "nice", "k"];
    var actions = ["watch", "listen", "get", "scream", "talk", "approach", "walk", "grab", "touch", "feel", "snooze", "sleep", "stop", "smash", "wake", "pick"];

    /*switch (thisInput) {
        case thisInput="help":
            $('#textspeak').append("<span></span>");
            break;
        case thisInput="":
            $('#textspeak').append("<span></span>");
            break;
        default:
            break;
    }*/

    function checkPositiveKey() {
        if ($.inArray(thisInput, positive) !=-1) {
            return true;
        } else {
            return false;
        }
    }
    function checkNegativeKey() {
        if ($.inArray(thisInput, negative) !=-1) {
            return true;
        } else {
            return false;
        }
    }
    function checkPassiveKey() {
        if ($.inArray(thisInput, passive) !=-1) {
            return true;
        } else {
            return false;
        }
    }

    function defaultPositiveMessage() {
        if (checkPositiveKey()) {
            var defPos = [
                "You sound quite positive.",
                "You seem rather joyous.",
                "You seem very sure."
            ];
            var protoPositiveMessage = defPos[Math.floor(Math.random()*defPos.length)];
            $('#textspeak').append("<span>"+protoPositiveMessage+"</span>");
        }
    }
    function defaultNegativeMessage() {
        if (checkNegativeKey()) {
            var defNeg = [
                "You seem rather negative.",
                "You don't seem sure."
            ];
            var protoNegativeMessage = defNeg[Math.floor(Math.random()*defNeg.length)];
            $('#textspeak').append("<span>"+protoNegativeMessage+"</span>");
        }
    }
    function defaultPassiveMessage() {
        if (checkPassiveKey()) {
            var defPass = [
                "You seem very passive.",
                "You seem nonchalant."
            ];
            var protoPassiveMessage = defPass[Math.floor(Math.random()*defPass.length)];
            $('#textspeak').append("<span>"+protoPassiveMessage+"</span>");
        }
    }

    function checkActions() {
        
    }
    // On.enter container
        // > doCommand()
        // > printInput

    if (event.keyCode === 13) {
        $('#textspeak').append("<span>> " +thisInput+ "</span>");
        doCommand(); $("input").val("");
    } else { event.preventDefault(); }

    // Game/Progress Container

    function doCommand() {

        function checkPositiveKey() {
            if ($.inArray(thisInput, positive) !=-1) {
                return true;
            } else {
                return false;
            }
        }
        function checkNegativeKey() {
            if ($.inArray(thisInput, negative) !=-1) {
                return true;
            } else {
                return false;
            }
        }
        function checkPassiveKey() {
            if ($.inArray(thisInput, passive) !=-1) {
                return true;
            } else {
                return false;
            }
        }
    
        function defaultPositiveMessage() {
            if (checkPositiveKey()) {
                var defPos = [
                    "You sound quite positive.",
                    "You seem rather joyous.",
                    "You seem very sure."
                ];
                var protoPositiveMessage = defPos[Math.floor(Math.random()*defPos.length)];
                $('#textspeak').append("<span>"+protoPositiveMessage+"</span>");
            }
        }
        function defaultNegativeMessage() {
            if (checkNegativeKey()) {
                var defNeg = [
                    "You seem rather negative.",
                    "You don't seem sure."
                ];
                var protoNegativeMessage = defNeg[Math.floor(Math.random()*defNeg.length)];
                $('#textspeak').append("<span>"+protoNegativeMessage+"</span>");
            }
        }
        function defaultPassiveMessage() {
            if (checkPassiveKey()) {
                var defPass = [
                    "You seem very passive.",
                    "You seem nonchalant."
                ];
                var protoPassiveMessage = defPass[Math.floor(Math.random()*defPass.length)];
                $('#textspeak').append("<span>"+protoPassiveMessage+"</span>");
            }
        }

        checkPositiveKey(); checkNegativeKey(); checkPassiveKey();
        defaultPositiveMessage(); defaultNegativeMessage(); defaultPassiveMessage();

        if (thisInput.includes("wake")) {
            if (lucidity="awake") {
                $('#textspeak').append("<span>You're already awake, silly.</span>");
            }
        } else {
            if ( checkPositiveKey() || checkNegativeKey() || checkPassiveKey() ) { } else {
                $('#textspeak').append('<span>"'+thisInput+ '" is not a command.</span>');
            }
        }
    }
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