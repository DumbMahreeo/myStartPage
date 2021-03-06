addZero = function(x) {
    if (String(x).length === 1) {
        x = "0" + x;
    }

    return x;
}


setInterval( () => {
    day = new Date;

    hr = addZero(day.getHours());
    min = addZero(day.getMinutes());
    sec = addZero(day.getSeconds());

    document.getElementById("hr").innerText = hr
    document.getElementById("min").innerText = min
    document.getElementById("sec").innerText = sec
})

/*
input = document.getElementById("searchBar");

input.addEventListener("keydown", function(event) {
    console.log(event)
    if (event.code === "Enter") {
        window.location = "https://duckduckgo.com/?q=" + input.value.replace(" ", "+");
        input.value = "";
    }
})
*/

input = document.getElementById("searchBar");
putSpace = false;
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    switch (event.key) {
        case "Enter":
	    if (input.innerText != "DuckDuckGo search..." && input.innerText.startsWith("!1 ")) {
		    location = "https://" + input.innerText.replace("!1 ", "");
	    } else if (input.innerText != "DuckDuckGo search..." && input.innerText.startsWith("!whz")) {
		    location = "https://web.whatsapp.com"
	    } else if (input.innerText != "DuckDuckGo search...") {
		    location = "https://duckduckgo.com/?q=" + input.innerText.replace("&nbsp:", "+");
	    }
	    break;

        case "Backspace":
	    if (input.innerText != "DuckDuckGo search...") {
		    if (event.ctrlKey) {

			    splitput = input.innerText.split(" ");
			    splitput.pop(-1);
			    splitput = splitput.join(" ");
			    
			    input.innerText = splitput;
			    putSpace = true;

		    } else {

			    if (putSpace == true) {
				putSpace = false
			    } else if (input.innerText.slice(-2,-1) == " ") {
				input.innerText = input.innerText.slice(0, -1);
				putSpace = true;    
			    } else {
				input.innerText = input.innerText.slice(0, -1);
			    }

		    }
	    }
	    break;


        case " ":
            putSpace = true
            break;

        default:
            console.log(event.key)
            if (!["Control", "Escape", "Tab", "Shift", "Alt", "AltGraph", "Insert", "Delete", "Home", "End", "PageUp", "PageDown", "ScrollLock", "Pause", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "NumLock", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "OS", "PrintScreen", "Meta", "Dead", "CapsLock", "ContextMenu", "Super"].includes(event.key)) {

		if (input.innerText == "DuckDuckGo search...") {
			input.innerText = "";
		}

                if (putSpace == true) {
                    input.innerText = input.innerText + " " + event.key;
                    putSpace = false
                } else {
                    input.innerText = input.innerText + event.key;
                }
            }
    }

    if (input.innerText.length == 0) {
	    input.innerText = "DuckDuckGo search...";
    }

    splitput = input.innerText.split(" ")
    splitput[0] = splitput[0] + " "


    toCheck = /^\!.*/.exec(input.innerText)
    if (splitput.length==1 && toCheck!=null) {
        input.innerHTML = "<span style=\"color: #626262;\">" + input.innerText + "</span>"
    } else if (toCheck != null) {
        input.innerHTML = "<span style=\"color: #626262;\">" + splitput[0] + "</span> " + splitput.slice(1).join(" ")
    }


}, 1000)
