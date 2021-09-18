//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
myGreencar_width=75;
myGreencar_height=100;

background_image = "parkingLot.jpg";
myGreencar_image = "car2.png";

//Set initial position for a car image.
myGreencar_x=5;
myGreencar_y=225;


function add() {
	//upload car, and background images on the canvas.
	myGreencar_img=new Image();
	myGreencar_img.onload=uploadgreencar;
	myGreencar_img.src=myGreencar_image;

	background_img=new Image();
	background_img.onload=uploadBackground;
	background_img.src=background_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(myGreencar_img,myGreencar_x,myGreencar_y,myGreencar_width,myGreencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(myGreencar_y >=70){
		myGreencar_y=myGreencar_y-10;
        console.log("When up key is pressed, x=greencar_x="+myGreencar_x+" greencar_y="+myGreencar_y);
		uploadBackground();
		uploadgreencar();
	}

}

function down()
{
	//Define function to move the car downward
	if(myGreencar_y <=230){
		myGreencar_y=myGreencar_y+10;
        console.log("When down key is pressed, x=greencar_x="+myGreencar_x+" greencar_y="+myGreencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(myGreencar_x >=0){
		myGreencar_x=myGreencar_x-10;
        console.log("When left key is pressed, x=greencar_x="+myGreencar_x+" greencar_y="+myGreencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(myGreencar_x <=700){
		myGreencar_x=myGreencar_x+10;
        console.log("When right key is pressed, x=greencar_x="+myGreencar_x+" greencar_y="+myGreencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
