let btn = document.querySelector("button");

btn.onclick = function () {
    displayMessage("Your inbox is almost full — delete some mails", "warning");
    //displayMessage("Brian: Hi there, how are you today?", "chat");
};

function displayMessage(msgText, msgType) {
    let html = document.querySelector("html"),
        panel = document.createElement("div"),
        msg = document.createElement("p"),
        closeBTN = document.createElement("button");

    panel.setAttribute("class", "msgBox");
    html.appendChild(panel);

    msg.textContent = msgText;
    panel.appendChild(msg);

    closeBTN.textContent = "x";
    panel.appendChild(closeBTN);

    if (msgType === "warning") {
        msg.style.backgroundImage = "url(icons/warning.png)";
        panel.style.backgroundColor = "red";
    } else if (msgType === "chat") {
        msg.style.backgroundImage = "url(icons/chat.png)";
        panel.style.backgroundColor = "aqua";
    } else {
        msg.style.paddingLeft = "20px";
    }

    closeBTN.onclick = function () {
        panel.parentNode.removeChild(panel);
    };
}
