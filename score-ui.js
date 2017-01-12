
//var paras = score1.getElementByClassName('value');
var buttony = document.getElementsByTagName('button');
var inputButtons = document.getElementsByTagName('input');
var inputActive;
for(x=0;x<buttony.length;x++){
    if (buttony[x].className==='get'){
    buttony[x].onclick = function(){
    if(this.parentNode.parentNode.id==="score-1"){
    scoreCounter.get(args[0]);
    return false;
    }
    
    if(this.parentNode.parentNode.id==="score-2"){
    scoreCounter.get(args[1]);
    return false;
    }
     
    if(this.parentNode.parentNode.id==="score-3"){
    scoreCounter.get(args[2]);
    return false;
    }
    };
    }
    
    if (buttony[x].className==='reset'){
    buttony[x].onclick = function(){
    if(this.parentNode.parentNode.id==="score-1"){
    element = scoreCounter.selector[0];
    args[0]=0;
    scoreCounter.reset(element, args[0]);
    return false;
    }
    
    if(this.parentNode.parentNode.id==="score-2"){
    element = scoreCounter.selector[1];
    args[1]=0;
    scoreCounter.reset(element, args[1]);
    return false;
    }
     
    if(this.parentNode.parentNode.id==="score-3"){
    element = scoreCounter.selector[2];
    args[2]=0;
    scoreCounter.reset(element, args[2]);
    return false;
    }
    };
    }


 
    if (buttony[x].className==='up'){
        buttony[x].onclick = function(){
    if(this.parentNode.parentNode.id==="score-1"){
    element = scoreCounter.selector[0];
    args[0]=args[0]+1;
    scoreCounter.up(element, args[0]);
    return false;
    }
    
    if(this.parentNode.parentNode.id==="score-2"){
    element = scoreCounter.selector[1];
    args[1]=args[1]+1;
    scoreCounter.up(element, args[1]);
    return false;
    }
     
    if(this.parentNode.parentNode.id==="score-3"){
    element = scoreCounter.selector[2];
    args[2]=args[2]+1;
    scoreCounter.up(element, args[2]);
    return false;
    }
        };
    }


if (buttony[x].className==='down'){
    buttony[x].onclick = function(){
    if(this.parentNode.parentNode.id==="score-1"){
    if(args[0]<=0){
        alert("Przekroczono limit.")
        return false;
    }
    
    args[0]=args[0]-1;
    element = scoreCounter.selector[0];
    scoreCounter.up(element, args[0]);
    return false;
    }
    
    if(this.parentNode.parentNode.id==="score-2"){
       if(args[1]<=0){
        alert("Przekroczono limit.")
        return false;
    }
    
    args[1]=args[1]-1;
    element = scoreCounter.selector[1];
    scoreCounter.up(element, args[1]);
    return false;
    }
     
    if(this.parentNode.parentNode.id==="score-3"){
      if(args[2]<=0){
        alert("Przekroczono limit.")
        return false;
    }
    
    args[2]=args[2]-1;
    element = scoreCounter.selector[2];
    scoreCounter.up(element, args[2]);
    return false;
    }
    };
    }
    
    if (buttony[x].className==='set'){
    buttony[x].onclick = function(){
    if(this.parentNode.parentNode.id==="score-1"){
    args[0] = inputButtons[0].value;
    if(args[0]>9999){
        alert("Przekroczono limit.");
        return false;
    }
    if(args[0]<0){
        alert("Przekroczono limit");
        return false;
    }
    element = scoreCounter.selector[0]; 
    scoreCounter.set(element, args[0]);
    parseInt(args[0]);
    return false;
    };  
    
    if(this.parentNode.parentNode.id==="score-2"){
    element = scoreCounter.selector[1];
    inputActive = inputButtons[1].value;
    scoreCounter.set(element, args[1], inputActive);
    return false;
    }
     
    if(this.parentNode.parentNode.id==="score-3"){
    element = scoreCounter.selector[2];
    inputActive = inputButtons[2].value;
    scoreCounter.set(element, args[2], inputActive);
    return false;
    }
    };
    }
    
    
    
    }

    
   
    
   
