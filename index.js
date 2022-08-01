let screen= document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue='';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
      console.log('button text is',buttonText); 
      if(buttonText=='X'){
        buttonText='*';
        screen.value+=buttonText;
        screenValue=screen.value;

      }
      else if(buttonText=='C'){
        screenValue='';
        screen.value=screenValue;
      }
      else if(buttonText=='del'){
       
        screen.value=screen.value.substring(0,screen.value. length -1);   
          
          screenValue=screen.value;

      }
      else if(buttonText=='='){
         
        screen.value=eval(screenValue);

      }
      else{
        screen.value+=buttonText;
        screenValue=screen.value;
     
      }
    })
}
