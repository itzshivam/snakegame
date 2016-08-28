
function doFirst()
   {
   	snakeReplayOption=document.getElementById("replayMenu");
   	snakeReplayOption.style.display="";
	can=document.getElementById("mainCanvas");
	canvas=can.getContext('2d');
	canvas.fillStyle='cyan';
	canvasHeight=600;
	canvasWidth=800;
	canvas.fillRect(0,0,canvasWidth,canvasHeight);
	startVal=0;
	canvas.fillStyle='red';
	canvas.fillRect(100,100,100,20);
	previous=39;
	randomXi=0;
	randomYi=0;
	snakeScore=0;
	
	
	xi=180;
	yi=100;
	xf=[100,120,140,160,180];
	yf=[100,100,100,100,100];
	food();
	//play39();
	

   }
   
function startGame(){
  //document.getElementById("startGame").style.background="black";
  snakeSpeed=120/levelValue;
  if(startVal==0)
  play39();
  
  startVal++;
}

function food()
       {
         document.getElementById("scoreContinuous").innerHTML=snakeScore;
         
	 randomXi=Math.ceil(Math.random()*canvasWidth);
	 randomXi=randomXi-(randomXi%20);
	 randomYi=Math.ceil(Math.random()*canvasHeight);
	 randomYi=randomYi-(randomYi%20);
	  
	 for(  temp=0;temp<xf.length;temp++)
	  {
	    while(xf[temp]==randomXi && yf[temp]==randomYi)
	    {
	     xyz=Math.ceil(Math.random()*canvasWidth);
	      xyz=xyz-(xyz%20);
	      randomXi=xyz;
	      yz=Math.ceil(Math.random()*canvasHeight);
	      yz=yz-(yz%20);
	      randomYi=yz;
	    }
	  }
	 var can=document.getElementById("mainCanvas");
	 var food=can.getContext('2d');
	 food.fillStyle='green';
	 food.fillRect(randomXi,randomYi,20,20);
	
	}

 function clear()
   {
       /*canvas.fillStyle='cyan';
       canvas.fillRect(xf[0]%canvasWidth,yf[0]%canvasHeight,20,20);
        if(xf.length<2 )
	 {
   	  yf.shift();
 	 }
 	 else if(yf.length<2)
 	 { 
   	   xf.shift();
	 }
 
	 else if(xf[0]==xf[1])
	 {
   	  yf.shift();
 	 }
 
 	else 
 	{
  	 xf.shift();
 	}
 	xf.shift();
 	yf.shift();
    console.log(yf);
     setTimeout('clear()',400);
     */
     
   }
function play37()
   {
        
	 canvas.fillStyle='red';
	 xi=(xi-20)%canvasWidth;
	 if(xi<0)
	 xi+=canvasWidth;
	
	 xf.push(xi%canvasWidth);
	 yf.push(yi%canvasHeight);
	 canvas.fillRect(xi%canvasWidth,yi%canvasHeight,20,20);
	 
	
	 
	  if(xi!=randomXi || yi!=randomYi){
         canvas.fillStyle='cyan';
         canvas.fillRect(xf[0]%canvasWidth,yf[0]%canvasHeight,20,20);
         xf.shift();
 	 yf.shift();
 	 }
 	 else
 	 {
 	  snakeScore++;
 	   food();
 	  
 	    //console.log("reached");
 	 }
 	 canvas.fillStyle='red';
 	 canvas.fillRect(xi%canvasWidth,yi%canvasHeight,20,20);
	 
	 timeOut37=setTimeout('play37()',snakeSpeed);


     for(j=0;j<xf.length-1;j++)
	 {
	 //console.log(xf[j]==xi&&yf[j]==yi);
	  if(xf[j]==xi && yf[j]==yi)
	 {
	   clearTimeout(timeOut37);
	   gameOver();
	   //alert("dsd");
	//   doFirst();
	 }
	 }

   }

   
 function play38()
   { 
         
	 canvas.fillStyle='red';
	 yi=(yi-20)%canvasHeight;
	 if(yi<0)
	 {
	  yi+=canvasHeight;
	 }
	 yf.push(yi%canvasHeight);
	 xf.push(xi%canvasWidth);
	 canvas.fillRect(xi%canvasWidth,yi%canvasHeight,20,20);
	 
	 if(xi!=randomXi || yi!=randomYi)
	 {
	 canvas.fillStyle='cyan';
         canvas.fillRect(xf[0]%canvasWidth,yf[0]%canvasHeight,20,20);
         xf.shift();
 	 yf.shift();
	 }
	 
	else
 	 {
 	   snakeScore++;
 	   food();
 	   
 	  // console.log("reached");
 	 }
 	 
	  canvas.fillStyle='red';
	 canvas.fillRect(xi%canvasWidth,yi%canvasHeight,20,20);
	 timeOut38=setTimeout('play38()',snakeSpeed);

	 	  for(j=0;j<xf.length-1;j++)
	 {
	// console.log(xf[j]==xi&&yf[j]==yi);
	
	  if(xf[j]==xi && yf[j]==yi)
	   {
	   clearTimeout(timeOut38);
	   gameOver();
	  // alert("dsd");
	  // doFirst();
	  }
	 }
	 


   }


function play39()
   {
         
	 canvas.fillStyle='red';
	 xi=(xi+20)%canvasWidth;
	 xf.push(xi);
	 yf.push(yi);
	 canvas.fillRect(xi%canvasWidth,yi%canvasHeight,20,20);
	 
	
	
	 if(xi!=randomXi || yi!=randomYi)
	 {
	 canvas.fillStyle='cyan';
         canvas.fillRect(xf[0]%canvasWidth,yf[0]%canvasHeight,20,20);
         xf.shift();
 	 yf.shift();
 	   
	 }
	 
	 else
 	 {
 	   snakeScore++;
 	   food();
 	   
 	    //console.log("reached");
 	 }
	 canvas.fillStyle='red';
	  canvas.fillRect(xi%canvasWidth,yi%canvasHeight,20,20);
	 timeOut39=setTimeout('play39()',snakeSpeed);

      for(j=0;j<xf.length-1;j++)
	 {
	 
	  //console.log(xf[j]==xi&&yf[j]==yi);
	  if(xf[j]==xi&&yf[j]==yi)
	  { 
	  //console.log(xf[j]==xi&&yf[j]==yi);
	  //console.log(j);
	  clearTimeout(timeOut39);
	  gameOver();
	  //alert("dsd");
	  
	 // doFirst();
	  }
	 }

   }

function play40()
   { 
           
	 canvas.fillStyle='red';
	 yi=(yi+20)%canvasHeight;
	 yf.push(yi);
	 xf.push(xi);
	 canvas.fillRect(xi%canvasWidth,yi%canvasHeight,20,20);
	 
	  
	 
	 if(xi!=randomXi || yi!=randomYi)
	 {
	  canvas.fillStyle='cyan';
         canvas.fillRect(xf[0]%canvasWidth,yf[0]%canvasHeight,20,20);
         xf.shift();
 	 yf.shift();
 	 
	 }
	 
	else
 	 {
 	 
 	   snakeScore++;
 	   food();
 	 
 	   // console.log("reached");
 	 }
	
	  canvas.fillStyle='red';
	 canvas.fillRect(xi%canvasWidth,(yi)%canvasHeight,20,20);
	 timeOut40=setTimeout('play40()',snakeSpeed);
         
	 for(j=0;j<xf.length-1;j++)
	 {
	 //console.log(xf[j]==xi&&yf[j]==yi);
	  if(xf[j]==xi && yf[j]==yi)
	   {
	   clearTimeout(timeOut40);
	   gameOver();
	  // alert("dsd");
	   //doFirst();
	  }
	 }

   }


function gameOver()
{
	//  stopPrevious();
	   // doFirst();
	   
	  snakeReplayOption.style.display="block";
	  document.getElementById("score").innerHTML=snakeScore;
	 
}


function stopPrevious()
{
	// console.log(keyCode);
	  //if(keyCode==37)
	  {
	  clearTimeout(timeOut37);
	  //console.log(keyCode);
	  }
	 // if(keyCode==38)
	  {
	  clearTimeout(timeOut38);
	  //console.log(keyCode);
	  }
	 //  if(keyCode==39)q
	   {
	   clearTimeout(timeOut39);
	 //  console.log(keyCode);
	  }
	   // if(keyCode==40)
	  {
	   clearTimeout(timeOut40);
	   //console.log(keyCode);
	  }
}

 document.onkeydown=function(event){

 	  if((event.keyCode==37 || event.keyCode==38 ||event.keyCode==39 || event.keyCode==40) &&  (snakeReplayOption.style.display=="")) 
	    {
	   	 
		 keyCode=event.keyCode;
		 if(previous!=keyCode)
		 {
		    if(keyCode==40 && previous!=38){
		      if(previous==37)
		       clearTimeout(timeOut37);
		      else
		       clearTimeout(timeOut39);
		      previous=keyCode; 
		      play40();
		    }
		    else if(keyCode==39 && previous!=37)
		    {
		      if(previous==40)
		        clearTimeout(timeOut40);
		      else
		        clearTimeout(timeOut38);
		       previous=keyCode;
		      play39();
	            }
	            else if(keyCode==38 && previous!=40)
	            {
	             if(previous==39)
	               clearTimeout(timeOut39);
	             else
	               clearTimeout(timeOut37);
	              previous=keyCode;
	             play38();
	            }
	        
	           else if(keyCode==37 && previous!=39)
		    {
		      if(previous==40)
		        clearTimeout(timeOut40);
		      else
		        clearTimeout(timeOut38);
		        previous=keyCode;
		      play37();
	            }    
	             
	        
	        } 
	     }
	    }

window.addEventListener('load',doFirst,false);



