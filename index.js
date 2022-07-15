// tv
var randomNumber = 1;

min = Math.ceil(1);
max = Math.floor(20);
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

function showImage() {
    switch(randomNumber) {
    case 1:
        document.getElementById("tv").src = "images/tv/oldtv_1.png";
    break;
    case 2:
        document.getElementById("tv").src = "images/tv/oldtv_2.png";
    break;
    case 3:
        document.getElementById("tv").src = "images/tv/oldtv_3.png";
    break;
    case 4:
        document.getElementById("tv").src = "images/tv/oldtv_4.png";
    break;
    case 5:
        document.getElementById("tv").src = "images/tv/oldtv_5.png";
    break;
    case 6:
        document.getElementById("tv").src = "images/tv/oldtv_6.png";
    break;
    case 7:
        document.getElementById("tv").src = "images/tv/oldtv_7.png";
    break;
    case 8:
        document.getElementById("tv").src = "images/tv/oldtv_8.png";
    break;
    case 9:
        document.getElementById("tv").src = "images/tv/oldtv_9.png";
    break;
    case 10:
        document.getElementById("tv").src = "images/tv/oldtv_10.png";
    break;
    case 11:
        document.getElementById("tv").src = "images/tv/oldtv_11.png";
    break;
    case 12:
        document.getElementById("tv").src = "images/tv/oldtv_12.png";
    break;
    case 13:
        document.getElementById("tv").src = "images/tv/oldtv_13.png";
    break;
    case 14:
        document.getElementById("tv").src = "images/tv/oldtv_14.png";
    break;
    case 15:
        document.getElementById("tv").src = "images/tv/oldtv_15.png";
    break;
    case 16:
        document.getElementById("tv").src = "images/tv/oldtv_16.png";
    break;
    case 17:
        document.getElementById("tv").src = "images/tv/oldtv_17.png";
    break;
    case 18:
        document.getElementById("tv").src = "images/tv/oldtv_18.png";
    break;
    case 19:
        document.getElementById("tv").src = "images/tv/oldtv_19.png";
    break;
    case 20:
        document.getElementById("tv").src = "images/tv/oldtv_20.png";
    break;
}
}

function hideImage() {
    document.getElementById("tv").src = "images/tv/oldtv_off.png";
}


    // icon animations
function anim(x) {
    switch(x) {
        case art:
            document.getElementById("art").src = "images/art_icon2.png";
        break;
    }
}

function unAnim(x) {
    switch(x) {
        case art:
            document.getElementById("art").src = "images/art_icon.png";
        break;
    }
}

function anim(x) {
    switch(x) {
        case blog:
            document.getElementById("blog").src = "images/blog_icon2.png";
        break;
    }
}

function unAnim(x) {
    switch(x) {
        case blog:
            document.getElementById("blog").src = "images/blog_icon.png";
        break;
    }
}