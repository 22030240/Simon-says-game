let gameseq=[];
let userseq=[];
let btns=["yellow","green","orange","red"];

let started=false;
let level=0;

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("game started");

        started=true;
        levelup();

    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);

}

function userFlash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}

let h2=document.querySelector("h2");
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
let ran=Math.floor(Math.random()*3);
let rancolor=btns[ran];
let ranbtn=document.querySelector(`.${rancolor}`);
gameseq.push(rancolor);
console.log(ranbtn);


    btnFlash(ranbtn);
}

function btnpress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    
    checkAns(userseq.length-1);

};
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
let gamelevel=0;
function checkAns(idx){
   
    if(userseq[idx]==gameseq[idx]){
      if(userseq.length==gameseq.length){
        setTimeout( levelup,1000);
       
      }
    
    }else{
        gamelevel++;
        h2.innerHTML=`game over!your score was<b>${level}</b><br> press any key to start <br>game count ->${gamelevel}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="antiquewhite";
        },200);
        
        reset();
    }
//console.log(level);
};

function reset(){
  
 started=false;
 gameseq=[];
 userseq=[];
 
  level=0;
}
