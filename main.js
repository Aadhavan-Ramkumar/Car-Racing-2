Canvas = document.getElementById("MyCanvas");
Ctx = Canvas.getContext("2d");

BackgroundImage = "Racing.jpg";

Car1Width = 120;
Car1Height = 70;
Car1Image = "Car1.png";
Car1X = 10;
Car1Y = 10;

Car2Width = 120;
Car2Height = 70;
Car2Image = "Car2.png";
Car2X = 10;
Car2Y = 80;

function Add() {
    BackgroundImageTag = new Image();
    BackgroundImageTag.onload = uploadBackground;
    BackgroundImageTag.src = BackgroundImage;

    Car1ImageTag = new Image();
    Car1ImageTag.onload = uploadCar1;
    Car1ImageTag.src = Car1Image;

    Car2ImageTag = new Image();
    Car2ImageTag.onload = uploadCar2;
    Car2ImageTag.src = Car2Image;
}

function uploadBackground() {
    Ctx.drawImage(BackgroundImageTag, 0, 0, Canvas.width, Canvas.height);
}

function uploadCar1() {
    Ctx.drawImage(Car1ImageTag, Car1X, Car1Y, Car1Width, Car1Height);
}

function uploadCar2() {
    Ctx.drawImage(Car2ImageTag, Car2X, Car2Y, Car2Width, Car2Height);
}

window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (KeyPressed == 37) {
        Car1Left();
        console.log("Left Arrow");
    }
    if (KeyPressed == 38) {
        Car1Up();
        console.log("Up Arrow");
    }
    if (KeyPressed == 39) {
        Car1Right();
        console.log("Right Arrow");
    }
    if (KeyPressed == 40) {
        Car1Down();
        console.log("Down Arrow");
    }
    if (KeyPressed == 65) {
        Car2Left();
        console.log("A");
    }
    if (KeyPressed == 87) {
        Car2Up();
        console.log("W");
    }
    if (KeyPressed == 68) {
        Car2Right();
        console.log("D");
    }
    if (KeyPressed == 83) {
        Car2Down();
        console.log("S");
    }
}

function Car1Left() {
    if (Car1X >= 10) {
        Car1X = Car1X - 10;
        console.log("Left Arrow Pressed")
        console.log("X = " + Car1X + " and Y = " + Car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car1Up() {
    if (Car1Y >= 10) {
        Car1Y = Car1Y - 10;
        console.log("Up Arrow Pressed")
        console.log("X = " + Car1X + " and Y = " + Car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car1Right() {
    if (Car1X <= 700) {
        Car1X = Car1X + 10;
        console.log("Right Arrow Pressed")
        console.log("X = " + Car1X + " and Y = " + Car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car1Down() {
    if (Car1Y <= 500) {
        Car1Y = Car1Y + 10;
        console.log("Down Arrow Pressed")
        console.log("X = " + Car1X + " and Y = " + Car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2Left() {
    if (Car2X >= 10) {
        Car2X = Car2X - 10;
        console.log("A Pressed")
        console.log("X = " + Car2X + " and Y = " + Car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2Up() {
    if (Car2Y >= 10) {
        Car2Y = Car2Y - 10;
        console.log("W Pressed")
        console.log("X = " + Car2X + " and Y = " + Car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2Right() {
    if (Car2X <= 700) {
        Car2X = Car2X + 10;
        console.log("D Pressed")
        console.log("X = " + Car2X + " and Y = " + Car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2Down() {
    if (Car2Y <= 500) {
        Car2Y = Car2Y + 10;
        console.log("S Pressed")
        console.log("X = " + Car2X + " and Y = " + Car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}