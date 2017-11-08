var mySong, amplitude, durata, img;

function preload(){
                    mySong= loadSound("./assets/DefqwopHeartAfire_FtStrix.mp3");
                    img=loadImage("./assets/galDue.jpg");
                  }



function setup() {  createCanvas(500,500);
                    image(img, 0,0,500,500);
                    angleMode(DEGREES); 
                    mySong.play();
                    amplitude= new p5.Amplitude();
                    amplitude.setInput(mySong);
                    var level = amplitude.getLevel();
                  }




function draw() {               
                  	fill(0, 0, 0);
                  	var level = amplitude.getLevel();
				  	var size= map(level,0,1,0,400);
 
				if (frameCount<2376) {	push();
										cerchi(250, 30, 30, 50);
										pop();}

				if (frameCount>=2385 && frameCount<3555) {	push();	

															testa();

															esp("( ͡⊙ ͜ʖ ͡⊙)");

															pop();	
														}

				if(frameCount>=3560 && frameCount<4670) {	push();

															testa();

															fill("#fc6c85");
															ellipse(215,260, 15,15);
															ellipse(285,260, 15,15);

															esp("( ͡◉ ͜ʖ ͡◉)");

															pop();
														}

				if(frameCount>=4675 && frameCount<8150) {	fill("#ffd7d8");
															noStroke();
															ellipse(250,250,15,15);

																push();
															cerchi(250, 30, 30, 50);
															pop();}

				if(frameCount>=8155 && frameCount<9295) {	push();
															testa();
															esp("( ͡⊙ ͜ʖ ͡⊙)");
															pop();
														}

				if(frameCount>=9300 && frameCount<10405) {	push();
															testa();

															fill("#fc6c85");
															ellipse(215,260, 15,15);
															ellipse(285,260, 15,15);

															esp("( ͡◉ ͜ʖ ͡◉)");
															pop();
														}

				if(frameCount>=10410 && frameCount<11500) {	fill("#ffd7d8");
															noStroke();
															ellipse(250,250,15,15);

																push();
																cerchi(250, 30, 30, 50);
																pop();
															}
				if(frameCount>11510) {	push();
										testa();

										fill("#ffbf00"); //arancione
										ellipse(215,260, 15,15);
										ellipse(285,260, 15,15);
										esp("( ͡◉ ͜ʖ ͡◉)");
										pop();
									}


				if(level==0 && frameCount>=8000){noLoop();}

/*                  push();
                 	fill(255,255,255);
                 	rect(20,20,300,50);
                 	fill(0,0,0);
                 	text(level, 20,40);
                 	text(frameCount, 20, 60);
                  pop();
*/

}

function cerchi(cc, phi, xE, raggioX){	translate(cc, cc);
											var level = amplitude.getLevel();
										//	rotate(18); 
											for (var i = 0; i < 360; i+=phi)
										{
											push();	
											strokeWeight(2);
											alfa=color("#fe4eda");//viola
											beta=color("#fada5e") //giallo
											var sfumaturaA=lerpColor(alfa, beta, level*3);

											gamma=color("#fada5e") //giallo
											delta=color("#e51a4c") //rosso
											var sfumaturaB=lerpColor(gamma, delta, level*3);

											if(level<0.4) {stroke(sfumaturaA);}
											else{//noStroke();
													stroke(sfumaturaB);};
											noFill();

											rotate(i);
											ellipse(xE,xE, raggioX+(level*300), 50 );
											pop();

										}
					}

function testa(){	image(img, 0,0,500,500); 
					noStroke();
					var level = amplitude.getLevel();
					if (frameCount>11000) { epsilon =color("#00ff7f"); //verde
											zeta=color("#f64a8a"); //fuxia
											sfum=lerpColor(epsilon, zeta, level*3);
											fill(sfum);}

					else {fill("#ffd7d8"); }
					ellipse(250,250,120,120);
				}

function esp(contenuto) {	textAlign(CENTER);
							var level = amplitude.getLevel();
							textSize(level*40);
							fill(0,0,0);
							text(contenuto, 250,255);
}


