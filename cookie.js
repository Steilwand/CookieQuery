setCookie = (cName, cValue, expDays) => {

    let date = new Date();

    //setting the expiredate
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000)); 
    //expDays*(hours in a day)*(minutes in an hour)*(seconds in minute)*(ms in a second)

    
    const expires = "expires=" + date.toUTCString();
    //cookie-script
    document.cookie = cName + "=" + cValue + "; " + expires;
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}


document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none"; //display: none; when clicking on it

    //Creating cookie: Name, Value, expire days
    setCookie("cookie", true, 30);
})

//checking if cookie is already consent
cookieMessage = () => {
    if (!getCookie("cookie"))
        document.querySelector("#cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);