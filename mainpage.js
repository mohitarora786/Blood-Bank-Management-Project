const contain=document.querySelector(".container2");
const stamps= ["Our Project","Blood Management Website"];
let stampsind=0;
let chind=0;
change();
function change(){
    contain.innerHTML=`<h2> Welcome To ${stamps[stampsind].slice(0,chind+1)}</h2>`;
    chind++;
    if(chind === stamps[stampsind].length){
        stampsind ++; 
        chind =0;
    }
    if(stampsind === stamps.length){
        stampsind=0;
    }
    setTimeout(change,400);
}
const hour=document.getElementById("hour");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const ampm = document.getElementById("ampm");
updateclock();
function updateclock(){
    let h = new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm1="AM";
    if(h>12){
        h=h-12;
        ampm1="PM";
    }
    h= h<10 ? "0" + h :h;
    m= m<10 ? "0" + m :m;
    s= s<10 ? "0" + s :s;
    hour.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    ampm.innerText=ampm1;

    setTimeout(()=>{
     updateclock();
    },1000)
}
const contai=document.querySelector(".heading");
const stamp= ["Morning","Afternoon","Evening","Night"];
let stampsin=0;
let chin=0;
changes();
function changes(){
    contai.innerHTML=`<h2> Hey ! Good ${stamp[stampsin].slice(0,chin+1)}</h2>`;
    chin++;
    if(chin === stamp[stampsin].length && hour >= 12 && hour < 17){
        stampsin ++; 
        chin =0;
    }
    if(stampsin === stamp.length && hour <=23 && hour >=17){
        stampsin=0;
    }
    setTimeout(changes,400);
}