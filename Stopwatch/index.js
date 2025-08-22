 const display=document.getElementById("display");
 let timer=null;
 let stratTime=0;
 let elapseTime=0;
 let isRunning=false;


 function start(){
        if(!isRunning){
            stratTime=Date.now()-elapseTime;
            timer=setInterval(update,10);
            isRunning=true;

        }
 }
 function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsetime=Date.now()-stratTime;
        isRunning=false;
    }
    
 }
 function reset(){
     clearInterval(timer);
     stratTime=0;
     elapseTime=0;
     isRunning=false;
     display.textContent="00:00:00:00"
 }
 function update(){
    const currentTime=Date.now();
    elapseTime=currentTime-stratTime;
    let hours=Math.floor(elapseTime/(1000*60*60));
    let minutes=Math.floor(elapseTime/(1000*60)%60);
    let seconds=Math.floor(elapseTime/ 1000 % 60);
    let miniseconds=Math.floor(elapseTime % 1000 /10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    miniseconds=String(miniseconds).padStart(2,"0");
    display.textContent=`${hours}:${minutes}:${seconds}:${miniseconds}`;
 }

