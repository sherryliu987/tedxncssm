const screenshotButton = document.querySelector("#screenshot-button");
const downloadButton = document.querySelector("#download")
const autoButton = document.querySelector("#auto_mode");
const filterSelect = document.getElementById("filter")

const displayedImage = document.querySelector("#screenshot #user_photo");
let filterImage = document.getElementById("ted-logo");
const video = document.querySelector("#screenshot video");
const cameraSound = new Audio("../static/audio/camera_go_click.mp3");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

let scale_factor;
let size_factor;
let pressed = false;


//countdown and click function
autoButton.onclick = function () {
    pressed = true;
    let cd = document.querySelector("#countdown")
    writeNext(5, cd);
}

//recursive function for countdown and click
function writeNext(i, cd) {
    cd.textContent = i;
    if (i === 1) {
        screenshotButton.click();
        cd.textContent = "";
        return;
    }
    setTimeout(function () {
        writeNext(i - 1, cd);
    }, 1000);
}

//screenshot function
screenshotButton.onclick = video.onclick = function () {
    pressed = true;
    canvas.width = video.videoWidth * 7 / 8;
    canvas.height = video.videoHeight * 7 / 8;
    ctx.scale(7 / 8, 7 / 8)
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)

    setFilter();
    ctx.drawImage(filterImage, 0, 0, canvas.width / size_factor, canvas.width / size_factor * scale_factor)
    displayedImage.src = canvas.toDataURL("image/webp");
    cameraSound.play();
};

//sets filter depending on dropdown
function setFilter() {
    if (filterSelect.value === "Ashes") {
        filterImage.src = "../static/images/Ashes_Logo.png";
        scale_factor = 607 / 575;
        size_factor = 4;
        filterImage.style.width = "100%";
    } else if(filterSelect.value === "Logo"){
        filterImage.src = "../static/images/TEDxNCSSM Logo.png";
        scale_factor = 370 / 1210;
        size_factor = 1.5;
        filterImage.style.width = "300px";
    }
}

//download image
downloadButton.onclick = function () {
    let image;
    if (pressed) {
        image = canvas.toDataURL();

        const tmpLink = document.createElement('a');
        tmpLink.download = 'TEDxYouth@NCSSM Photobooth.png';
        tmpLink.href = image;

        document.body.appendChild(tmpLink);
        tmpLink.click();
        document.body.removeChild(tmpLink);
    } else {
        alert("You have not taken an image.");
    }
}

//start video with constraints and error/success handlers
function handleError(error) {
    console.error("Error: ", error);
}
function handleSuccess(stream) {
    screenshotButton.disabled = false;
    video.srcObject = stream;
}
const constraints = {
    video: true
};
function startVideo() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(handleSuccess)
        .catch(handleError);
}