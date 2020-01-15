// DYNAMICALLY ADDING TEXT VIA JQUERY
$('#textspeak').append("<span>You hear beeping.</span>");
    // $('#textspeak').append("<span></span>");

// Of course you couldn't. 
// Of course you weren't <i>really</i> wandering.

// Phantasmagoria

// +thisInput, "is not a recognized command."

// For some reason, she couldn't remember your name.
// ?? What's your name, anyway?
// Godzilla on a respirator

var input = document.getElementById("input");
var points = 0; var name = "";
var alarm = "ringing"; var lucidity = "awake";
var bed = "in";

input.addEventListener("keyup", function(event) {

    // Gets/Defines input
    let thisInput = document.getElementById("input").value;

    // Checks if p/n/pa/a keyword(s) are used
    var positive = ["yes", "y", "you bet", "yeehaw", "fuck yeah", "alright"];
    var negative = ["no","n", "fuck no", "nope"];
    var passive = ["so", "ok", "okay","whatever", "cool", "nice", "k"];
    var actions = ["watch", "listen", "get", "scream", "talk", "approach", "walk", "grab", "touch", "feel", "snooze", "sleep", "stop", "smash", "wake", "pick"];

    function checkActions() {
        
    }
    // On.enter container
        // > doCommand()
        // > printInput

    if (event.keyCode === 13) {
        if (thisInput === "") {
            // removes cmd line if input is nonexistent
        } else {
            $('#textspeak').append("<span>> " +thisInput+ "</span>");
            doCommand(); $("input").val("");
        }
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
                    "You seem nonchalant.",
                    "You couldn't be less excited."
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
            return;
        } else if (thisInput.includes("turn") || thisInput.includes("smash") || thisInput.includes("break") || thisInput.includes("snooze") || thisInput.includes("scream")){
            if (alarm="ringing") {
                if (thisInput.includes("turn off")) {
                    $('#textspeak').append("<span></span>");
                } else if (thisInput.includes("snooze")) {
                    $('#textspeak').append("<span>You snooze the alarm.</span>");
                    $('#textspeak').append("<span>Samantha tells you to get up.</span>");
                    alarm = "snoozed";
                    console.log(alarm)
                } else if (thisInput.includes("")) {

                } else if (thisInput.includes("")) {

                } else if (thisInput.includes("scream")) {
                    $('#textspeak').append("<span>You try screaming. Nothing happens.</span>");
                }
            }
            return;
        } else if (thisInput.includes("sleep")) {
            if (bed="in") {
                if (alarm="snoozed") {
                    $('#textspeak').append("<span>You fall asleep.</span>");
                    $('#textspeak').append("<span>You wake back up because you snoozed the alarm.</span>");
                    console.log("alarm");
                } else {
                    // game over - ending 1
                    // -----> You never left the bed.
                }
            }
            return;
        } else if (thisInput.includes("walk")) {
            if (alarm="ringing") {
                $('#textspeak').append("<span>You need to get up to walk.</span>");
            }
            return;
        } else if (thisInput.includes("talk") || thisInput.includes("speak")) {
            if (alarm="ringing") {
                $('#textspeak').append("<span>There's no point.</span>");
            }
            return;
        } else if (thisInput.includes("listen")) {
            if (alarm="ringing") {
                $('#textspeak').append("<span>You're already listening to the alarm.</span>");
            }
            return;
        } else if (thisInput.includes("approach")) {
            return;
        } else if (thisInput.includes("grab") || thisInput.includes("pick")) {
            if (alarm="ringing") {
                $('#textspeak').append("<span>You'd rather not.</span>");
            }
            return;
        } else if (thisInput.includes("touch") || thisInput.includes("feel")) {
            return;
        } else if (thisInput==="help"){ 
            var help = [
                "Cheater cheater pumpkin eater.",
                "Illegal Move.",
                "What next, motherlode?",
                "Do you really need help?",
                "I don't have all the answers.",
                "No way."
            ];
            var protoHelp = help[Math.floor(Math.random()*help.length)];
            $('#textspeak').append("<span>"+protoHelp+"</span>");
            return;  
        } else {
            if ( checkPositiveKey() || checkNegativeKey() || checkPassiveKey() ) { } else {
                $('#textspeak').append('<span>What is "' +thisInput+ '"?</span>');
            }
            return;
        }
    }
});


/*

if (lucidity="awake") {
    $('#textspeak').append("<span></span>");
}


*/



/*** 
 * var start2 = document.createElement("span");
        start2.innerHTML = ">  ";
        document.getElementById("textspeak").appendChild(start2);
        console.log(thisInput);
 * 
 * ***/


 // HAHAHAHAHAH ------>     PROMPT
                     //     The story is about an outgoing fire fighter, an introverted wanderer, and an electrician who is obsessed with a prostitute. It takes place in a city-sized magical device. The crux of the story involves a lecture.