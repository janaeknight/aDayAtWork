// DYNAMICALLY ADDING TEXT VIA JQUERY
$('#textspeak').append("<span>You hear beeping.</span>");
    // $('#textspeak').append("<span></span>");

// Phantasmagoria

// Godzilla on a respirator

/* if (lucidity="awake") {
    $('#textspeak').append("<span></span>");
} */ 

function autoAdjust() { $('#textspeak').scrollTop(10000); }

var input = document.getElementById("input");
var points = 0; var name = "";
var alarm = "ringing";      // ringing // snoozed // off
var lucidity = "awake";     // awake // asleep // drifting
var bed = "in";             // in // out
var body = "dirty";             // dirty // clean
var teeth="caked";              // caked // brushed
var outside="none";      // first block // second block // office door /// none

input.addEventListener("keyup", function(event) {

    // Gets/Defines input
    let thisInput = document.getElementById("input").value;

    // Checks if p/n/pa/a keyword(s) are used
    var positive = ["yes", "y", "you bet", "yeehaw", "fuck yeah", "alright"];
    var negative = ["no","n", "fuck no", "nope"];
    var passive = ["so", "ok", "okay","whatever", "cool", "nice", "k"];

    // On.enter container
        // > doCommand()
        // > printInput

    if (event.keyCode === 13) {
        if (thisInput === "") {
            // removes cmd line if input is nonexistent
        } else {
            $('#textspeak').append("<span>> " +thisInput+ "</span>");
            doCommand(); $("input").val(""); autoAdjust();
            console.log("Alarm: " +alarm,);
            console.log("Bed: " +bed,);
            console.log("Body: " +body,);
            console.log("Teeth: " +teeth,);
            console.log("Outside: " +outside,);
            console.log("-----------------------------------------------");
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
                return;
            }
            return;
        } else if (thisInput.includes("turn") || thisInput.includes("smash") || thisInput.includes("break") || thisInput.includes("snooze") || thisInput.includes("scream")) {
            if (alarm="ringing") {
                if (thisInput.includes("turn off")) {
                    $('#textspeak').append("<span>You turn off the alarm.</span>");
                    $('#textspeak').append("<span>You should get ready for work.</span>");
                    alarm = "off";
                } else if (thisInput.includes("snooze")) {
                    $('#textspeak').append("<span>You snooze the alarm.</span>");
                    $('#textspeak').append("<span>Samantha tells you to get up.</span>");
                    alarm = "snoozed";
                } else if (thisInput.includes("smash")) {
                    $('#textspeak').append("<span>You reach over and try to punch Samantha.</span>");
                    $('#textspeak').append("<span>She does not appreciate that.</span>");
                } else if (thisInput.includes("break")) {
                    $('#textspeak').append("<span>You try to push Samantha off the bed.</span>");
                    $('#textspeak').append("<span>She's heavier than you thought.</span>");
                } else if (thisInput.includes("scream")) {
                    $('#textspeak').append("<span>You try screaming. Nothing happens.</span>");
                }
                return;
            }
            return;
        } else if (thisInput.includes("sleep")) {
            if (bed="in") {
                if (alarm==="snoozed") {
                    $('#textspeak').append("<span>You fall asleep.</span>");
                    $('#textspeak').append("<span>You wake back up because you snoozed the alarm.</span>");
                    alarm = "ringing";
                    return;
                } else if (alarm==="off") {
                    // game over - ending 1
                    // -----> You never left the bed.
                    return;
                } else {
                    $('#textspeak').append("<span>The alarm tone is too annoying to ignore.</span>");
                    return;
                }
            } else {
                $('#textspeak').append("<span>You can't sleep here. -Your Back</span>");
                return;
            }
            return;
        } else if (thisInput.includes("walk")) {
            if (alarm==="ringing") {
                $('#textspeak').append("<span>You need to get up to walk.</span>");
                return;
            }
            return;
        } else if (thisInput.includes("get")) {
            if (bed==="in") {
                if (alarm==="ringing" && (thisInput.includes("up")) || thisInput.includes("out")) {
                    $('#textspeak').append("<span>You can't get out of bed before turning off the alarm.</span>");
                } else if (alarm==="off") {
                    $('#textspeak').append("<span>You stand up.</span>");
                    bed = "out";
                }
                return;
            };
            if (bed==="out" && outside==="none" && (thisInput.includes("back") || thisInput.includes("bed"))) {
                $('#textspeak').append("<span>You made too much of an effort to go back now.</span>");
                return;
            }
            if (bed==="out" && outside==="none") {
                if (thisInput.includes("get ready")) {
                    $('#textspeak').append("<span>If only it were that easy.</span>");
                    return;
                }
            }
            return;
        } else if (thisInput.includes("talk") || thisInput.includes("speak")) {
            if (alarm="ringing") {
                $('#textspeak').append("<span>There's no point.</span>");
                return;
            }
            return;
        } else if (thisInput.includes("listen")) {
            if (alarm="ringing") {
                $('#textspeak').append("<span>You're already listening to the alarm.</span>");
                return;
            } else {
                $('#textspeak').append("<span>There's nothing but a dull buzz. And everything else.</span>");
                return;
            }
        } else if (thisInput.includes("approach")) {
            return;
        } else if (thisInput.includes("look")) {
            if (bed==="in") {
                $('#textspeak').append("<span>There's not much to see.</span>");
                return;
            } else if (bed==="out" && outside==="none") {
                $('#textspeak').append("<span>A toothhbrush, a towel, and some slacks.</span>");
                return;
            }
            return;
        } else if (thisInput.includes("grab") || thisInput.includes("pick")) {
            if (alarm="ringing" && bed === "in") {
                $('#textspeak').append("<span>You'd rather not.</span>");
                return;
            }
            return;
        } else if (thisInput.includes("touch") || thisInput.includes("feel")) {
            if (alarm==="ringing") {
                $('#textspeak').append("<span>You'd rather not feel the feel of cold, hard metal first thing in the morning.</span>");
                return;
            }
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