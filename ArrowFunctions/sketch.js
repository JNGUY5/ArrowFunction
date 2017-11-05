function setup() {
	//creating createCanvas
  createCanvas(600, 600);
  background(0);
  let buttonrect = createButton('create Square');
	let buttonCircle = createButton('create circle');
	let buttonText = createButton('create text');
  noStroke();
	//var x = random(5,300);
	var x ;
	var y;
	var txt = "Rise above the storm and you will see sunshine";
	buttonCircle.mousePressed(() =>  x = random(5,300));
	buttonrect.mousePressed(() =>  y = random(5,300));
  buttonCircle.mousePressed(() => fill(random(0, 255), random(0, 255), random(0, 255), 100));
  buttonCircle.mousePressed(() => ellipse(random(-100, 600), random(0, 700), x,x));
	buttonrect.mousePressed(() => fill(random(0,255),random(0,255),random(0,255),100));
  buttonrect.mousePressed(() => rect(random(-100, 600), random(0, 700), y,y));
	buttonText.mousePressed(()=>noStroke());
	buttonText.mousePressed(() => textSize(random(3,20)));
	buttonText.mousePressed(() => fill(0,128,255));
	buttonText.mousePressed(() => text(txt ,random(0,500),random(0,600)) );

}

function draw() {




}
