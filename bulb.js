const bulb= document.getElementById("myimg");
const button= document.getElementById("switch");
var index=0;//bulb off
button.addEventListener("click",()=>{
    if(index%2==0){
        button.textContent="SWITCH OFF";//turn on
        bulb.src ="bulb_on.png";
        index++;
    }
    else{//turn off
        button.textContent="SWITCH ON";
        bulb.src ="bulb_off.png";
        index++;        
    }
})

