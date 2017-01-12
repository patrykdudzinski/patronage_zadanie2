function ScoreCounter(selector, l, begin){
    this.selector=selector;
    this.l=l;
    this.begin=begin;
}
   
var scoreCounter = new ScoreCounter(document.querySelectorAll(".counter"), 4, 0);
var arg;
var args = new Array (scoreCounter.selector.length);

for(var x=0; x<scoreCounter.selector.length; x++){
      var element = scoreCounter.selector[x];
      args[x] = scoreCounter.begin;
      if (args[x].length !== scoreCounter.l){
          if(args[x]<10){
              element.innerHTML="000"+args[x];
          }
          if(args[x]>=10 && args[x]<100){
              element.innerHTML="00"+args[x];
          }
          if(args[x]>=100 && args[x]<1000){
              element.innerHTML="0"+args[x];
          }
          if(args[x]>=1000 && args[x]<=9999){
              element.innerHTML=args[x];
          }
      }
    }
    
  scoreCounter.set = function(element, arg){
          if (arg.length !== scoreCounter.l){
          if(arg<10){
              element.innerHTML="000"+arg;
          }
          if(arg>=10 && arg<100){
              element.innerHTML="00"+arg;
          }
          if(arg>=100 && arg<1000){
              element.innerHTML="0"+arg;
          }
          if(arg>=1000 && arg<=9999){
              element.innerHTML=arg;
          }
      }
    parseInt(arg);
     
    };
  
  
  
    scoreCounter.get = function(arg){
        alert("Wartość licznika wynosi: "+arg);  
    };
    
    
    scoreCounter.reset = function(element, arg){
      element.innerHTML="000"+arg;
    };
      

   scoreCounter.up = function(element, arg){
       
        if(arg>=9999){
          alert("Przekroczono limit!!");
          return false;
      }
        if (arg.length !== scoreCounter.l){
          if(arg<10){
              element.innerHTML="000"+arg;
          }
          if(arg>=10 && arg<100){
              element.innerHTML="00"+arg;
          }
          if(arg>=100 && arg<1000){
              element.innerHTML="0"+arg;
          }
          if(arg>=1000 && arg<=9999){
              element.innerHTML=arg;
          }
      }        
    };
   
   
   scoreCounter.down = function(element, arg){
           
          if (arg.length !== scoreCounter.l){
          if(arg<10){
              element.innerHTML="000"+arg;
          }
          if(arg>=10 && arg<100){
              element.innerHTML="00"+arg;
          }
          if(arg>=100 && arg<1000){
              element.innerHTML="0"+arg;
          }
          if(arg>=1000 && arg<=9999){
              element.innerHTML=arg;
          }
      }        
    };
   