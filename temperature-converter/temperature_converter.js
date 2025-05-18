const textBox=document.getElementById("textBox");
const tOf=document.getElementById("tOf");
const tOc=document.getElementById("tOc");
const result=document.getElementById("result");
let temp;

function convert(){
  if(tOf.checked){
     temp=Number(textBox.value);
     temp=temp*9/5+32;
     result.textContent=temp.toFixed(2)+" °F";
  }
  else if(tOc.checked){
     temp=Number(textBox.value);
     temp=(temp-32)*(5/9);
     result.textContent=temp.toFixed(2)+" °C";
  }
  else{
    result.textContent=" Select a unit";
  }
}