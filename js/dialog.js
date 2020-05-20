window.addEventListener("load", function(){

    var welcomeText = "Hi there,<br/> Welcome to my Website..!! I hope you will surely find something interesting on this website..!!";
    var welcomeBackText = "Hi there,<br/> Welcome back to my Website..!! I hope you found something interesting in your last visit. I am sure you will find something new and interesting on this website..!!";
    var dialogTiming = 120; // in seconds
    var dialogDisplayTime = 8000; // in milliseconds

    var dialog = document.createElement('div');
    dialog.innerHTML = '<div id="dialogBackground"><div id="dialogBox"><button id="dialogButton" title="Close" click="closeDialog();">X</button><div id="dialogText"></div></div></div>'
    document.body.appendChild(dialog);
    dialog.style.display = "none";

    var dialogButton = document.getElementById("dialogButton");
    var dialogText = document.getElementById("dialogText");
    var timer = document.getElementById("timer");

    dialogButton.addEventListener("click", function(){
        dialog.style.display = "none";
    });

    function openDialog(){
        dialog.style.display = "block";
    }

    function setDialog(dialog){
        dialogText.innerHTML = dialog;
    }

    /* Initiate Session */
    if (!sessionStorage.sessionStartsAt) {
        sessionStorage.sessionStartsAt = new Date();
        var visitCount = parseInt(localStorage.getItem("visitCount"));
        localStorage.setItem("visitCount", ++visitCount);
        console.log("Session Initiated..!!",sessionStorage.sessionStartsAt);
        if (localStorage.firstVisit) {
            setDialog(welcomeBackText);
            openDialog();
            //setTimeout(function(){ dialog.style.display = "none"; }, dialogDisplayTime);
        }
    }

    /* Set First Visit */
    if (!localStorage.firstVisit) {
        localStorage.firstVisit = new Date();
        localStorage.visitCount = 1;
        console.log("First Visit..!!",localStorage.firstVisit);
        setDialog(welcomeText);
        openDialog();
        //setTimeout(function(){ dialog.style.display = "none"; }, dialogDisplayTime);
    }

    /* Check after every second */
    var intervalChecks = setInterval(intervalChecker,1000);

    function intervalChecker(){
        var currentTime = new Date();
        var timeSpent = (currentTime - new Date(sessionStorage.sessionStartsAt));
        var timeSpentInSec = Math.floor( timeSpent / 1000);
        console.log("Time Spent :", timeSpentInSec, "Seconds" );
        for (i = 0; i < dialogs.length; i++) {
            if (timeSpentInSec == (i*dialogTiming)){
                openDialog();
                string = '" '+dialogs[i-1]+' "';
                setDialog(string);
            }
        }
        if (timeSpentInSec <= dialogTiming){
            remainingTime = (dialogTiming - timeSpentInSec);
        } else {
            remainingTime = (dialogTiming - (timeSpentInSec % dialogTiming));
        }
        
        if(!sessionStorage.sessionStartsAt){
            clearInterval(intervalChecks);
            console.log("Set Interval Cleared..!!");
        }
        remainingTimeString = remainingTime+ " second";
        document.getElementById("timer").innerText = remainingTimeString;
    }

});

function clearStorage(){
    localStorage.removeItem("firstVisit");
    localStorage.removeItem("visitCount");
    sessionStorage.removeItem("sessionStartsAt");
    alert("Local and Session Storage Cleared ..!!");
    console.log("Local and Session Storage Cleared ..!!");
}



/* Dialogs Array */
var dialogs = [
    "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
    "You are braver than you believe, stronger than you seem and smarter than you think.",
    "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment.",
    "The best and most beautiful things in the world cannot be seen or even touched--they must be felt with the heart.",
    "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    "The most important thing is to enjoy your life--to be happy--it's all that matters."
]
