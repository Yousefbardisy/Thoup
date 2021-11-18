const number=document.getElementById("number");
const hid=document.getElementById("hid");
const hed=document.getElementById("hed");

const hid2=document.getElementById("hid2");
const hed2=document.getElementById("hed2");

const hid3=document.getElementById("hid3");
const hed3=document.getElementById("hed3");

let value=0; 

number.innerText=value;

function add(){
    ++value;    
    
    number.innerText=value;
}

function sub(){
    if(value>0){
        
        --value;    
    }
    number.innerText=value;

}

function hide(){
    if(hid.innerText=='+'){
        
        hid.innerText='-' 
        hed.classList.add('d-none');
        
    }
    else{
        
        hid.innerText='+';
        hed.classList.remove('d-none');
   }

}
function hide2(){
    if(hid2.innerText=='+'){
        
        hid2.innerText='-' 
        hed2.classList.add('d-none');
        
    }
    else{
        
        hid2.innerText='+';
        hed2.classList.remove('d-none');
   }

}
function hide3(){
    if(hid3.innerText=='+'){
        
        hid3.innerText='-' 
        hed3.classList.add('d-none');
        
    }
    else{
        
        hid3.innerText='+';
        hed3.classList.remove('d-none');
   }

}