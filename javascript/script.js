function fun1(){
    // window.alert("Ai deschis pagina boss");
    // if (navigator.cookieEnabled == true){
    //     return;
    // } else {
    //     document.alert("Please enable cookies! >.<");
    //     return;
    // }
    // if(navigator.userAgent.indexOf("Chrome") != -1)
    //     alert("Chrome");
    // else if(navigator.userAgent.indexOf("Firefox") != -1)
    //     alert("Mozilla");
    // else alert("Others...");
    
}

function firstNameClear(){
    var element = document.getElementById("firstNameInput");
    element.setAttribute('placeholder', '');
    return;
}

function lastNameClear(){
    var element = document.getElementById("lastNameInput");
    element.setAttribute('placeholder', '');
    return;
}

function emailClear(){
    var element = document.getElementById("emailInput");
    element.setAttribute('placeholder', '');
    return;
}

function messageClear(){
    var element = document.getElementById("msgBox");
    element.setAttribute('placeholder', '');
    return;
}

function firstNameBlur(){
    var element = document.getElementById("firstNameInput");
    if(element.textContent.length == 0)
        element.setAttribute('placeholder', 'Name...');
    console.log("salut");
}

function lastNameBlur(){
    var element = document.getElementById("lastNameInput");
    if(element.textContent.length == 0)
        element.setAttribute('placeholder', 'Last Name...');
}

function emailBlur(){
    var element = document.getElementById("emailInput");
    if(element.textContent.length == 0)
        element.setAttribute('placeholder', 'xyz@mail.com');
}

function messageBlur(){
    var element = document.getElementById("msgBox");
    if(element.textContent.length == 0)
        element.setAttribute('placeholder', 'Message... Hi :)');
}

function validateEmail(){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(document.getElementById("emailInput").value);
    if(emailPattern.test(document.getElementById("emailInput").value) == false){
        alert("Email invalid!");
        return false;
    }
}

function validateFields(){
    validateEmail();
}

function scrollToContact(){
    document.getElementById("contactAnchor").scrollIntoView();
}

function getRandomColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    return col;
}

function dynamicallyRgbBar(id){
    var bar = document.getElementById(id);
    bar.setAttribute('style', 'transition: all 2s');
    bar.style.backgroundColor = getRandomColor();
}

var color1 = getRandomColor(), color2 = getRandomColor(), color3 = getRandomColor(), color4 = getRandomColor();

function rgbBorders(){
    var ph = document.getElementById("aboutMePhoto");
    ph.setAttribute('style', 'transition: all 0.2s cubic-bezier(1,0,0,1) 0s');
    //ph.setAttribute('style', 'transition: all 0.2s');
    ph.style.borderTopColor = color1;
    ph.style.borderRightColor = color2;
    ph.style.borderBottomColor = color3;
    ph.style.borderLeftColor = color4;
    color4 = color3;
    color3 = color2;
    color2 = color1;
    color1 = getRandomColor();
}

function activateEffects(){
    setInterval("dynamicallyRgbBar(\"header\");", 2000);
    setInterval("rgbBorders();", 500);
}

function scrollToTheTop(){
    document.getElementById("_startOfThePageAnchor").scrollIntoView();
}