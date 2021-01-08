const screenshotButton = document.querySelector("#screenshot-button");
const downloadButton = document.querySelector("#download")
const autoButton = document.querySelector("#auto_mode");
const filterSelect = document.getElementById("filter")

const displayedImage = document.querySelector("#screenshot #user_photo");
let filterImage = document.getElementById("ted-logo");
const video = document.querySelector("#screenshot video");
const cameraSound = new Audio("../static/audio/camera_go_click.mp3");
let cd = document.querySelector("#countdown")

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

let scale_factor;
let size_factor;
let pressed = false;

//countdown and click function
autoButton.onclick = function () {
    filterSelect.value="Ashes"
    setFilter();
    writeNext(5,1);
}

//recursive function for countdown and click
function writeNext(i, auto_num) {
    cd.textContent = i;
    if (i === 1) {
        pressed = true;
        cameraSound.play();
        if(auto_num === 1){
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.scale(1/2, 1/2)
            ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
            ctx.drawImage(filterImage, 0, 0, canvas.width / size_factor * 7/8, canvas.width / size_factor * scale_factor * 7/8)
            displayedImage.src = canvas.toDataURL("image/webp");
            filterSelect.value="Logo"
            setFilter();
            writeNext(5, 2 )
        }else if(auto_num === 2){
            ctx.drawImage(video, canvas.width, 0, video.videoWidth, video.videoHeight)
            ctx.drawImage(filterImage, canvas.width, 0, canvas.width / size_factor * 7/8, canvas.width / size_factor * scale_factor * 7/8)
            displayedImage.src = canvas.toDataURL("image/webp");
            filterSelect.value="Speakers"
            setFilter();
            writeNext(5, 3 )
        }else if(auto_num === 3){
            ctx.drawImage(video, 0, canvas.height, video.videoWidth, video.videoHeight)
            ctx.drawImage(filterImage, 0, canvas.height, canvas.width / size_factor * 7/8, canvas.width / size_factor * scale_factor * 7/8)
            displayedImage.src = canvas.toDataURL("image/webp");
            filterSelect.value="Phoenix"
            setFilter();
            writeNext(5, 4 )
        }else{
            ctx.drawImage(video, canvas.width, canvas.height, video.videoWidth, video.videoHeight)
            ctx.drawImage(filterImage, canvas.width, canvas.height, canvas.width / size_factor * 7/8, canvas.width / size_factor * scale_factor * 7/8)
            displayedImage.src = canvas.toDataURL("image/webp");
            cd.textContent = "";
        }

    }else{
        setTimeout(function () {
            writeNext(i - 1, auto_num);
        }, 1000);
    }

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
        filterImage.src = "../static/images/photobooth filters/Recording.png";
    } else if(filterSelect.value === "Logo"){
        filterImage.src = "../static/images/photobooth filters/Thanks for Coming.png";
    }else if(filterSelect.value === "Speakers"){
        filterImage.src = "../static/images/photobooth filters/Stars.png";
    }else{
        filterImage.src = "../static/images/photobooth filters/Frame.png";
    }
    scale_factor = 3/4;
    size_factor = .87;
    filterImage.style.width = "358%";
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