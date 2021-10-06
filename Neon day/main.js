var button = document.getElementById("button");
var bText = document.getElementById("bText");
var isOn = false;
var bClick = false;


function noScroll() {
    window.scrollTo(0, 0);
}

if (isOn == false) {
    // add listener to disable scroll
    window.addEventListener('scroll', noScroll);
    button.style = "cursor: pointer; opacity: 1;";
    bText.textContent = "off";
}

button.addEventListener('click', function turnOn() {
    if (isOn == false && bClick == false) {
        bClick = true;
        isOn = false;
        ready();
        bText.textContent = "on";
        document.body.className = "on";
        button.style = "background-color: #222;";
        setTimeout(() => {
            document.body.className = "off";
            setTimeout(() => {
                document.body.className = "on";
                setTimeout(() => {
                    document.body.className = "off";
                    setTimeout(() => {
                        document.body.className = "on";
                        setTimeout(() => {
                            document.body.className = "off";
                            setTimeout(() => {
                                document.body.className = "on";
                                setTimeout(() => {
                                    document.body.className = "off";
                                    setTimeout(() => {
                                        isOn = true;
                                        document.body.className = "on";
                                        button.style = "opacity: 0; cursor: default;";
                                        // Remove listener to re-enable scroll
                                        window.removeEventListener('scroll', noScroll);      
                                    },100);
                                }, 100);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 275);
        }, 500);
    }
    else if (isOn == true) {
        document.body.className = "on";
        button.style = "opacity: 0; cursor: default;";
    }
});

var idleTime = 0;
function ready() {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
    //Zero the idle timer on mouse movement.
    document.addEventListener("focus", function () {
        idleTime = 0;
        console.log(idleTime);
    });
    document.addEventListener("click", function () {
        idleTime = 0;
        console.log(idleTime);
    });
    document.addEventListener("mousemove", function () {
        idleTime = 0;
        console.log(idleTime);
    });
    document.addEventListener("scroll", function () {
        idleTime = 0;
        console.log(idleTime);
    });
};

function timerIncrement() {
    idleTime = idleTime + 1;
    console.log(idleTime);    
    if (idleTime > 9) { // 10 minutes
        window.location.reload();
    }
};

console.log(idleTime);
