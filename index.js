
let x = document.getElementById("hom")
let y= document.getElementById("gue")
let z= document.getElementById("fou")
let str =0
let stry =0
let f=0
console.log(x)

function chk(){
    if(str>stry){
            x.style.color="red"
            y.style.color="white"
        }else{
            y.style.color="red"
            x.style.color="white"
        }
    }
    function fou(){
        f+=1
        z.innerHTML=f
        
    }
    
function new1(){
    x.innerHTML=0
    y.innerHTML=0
    z.innerHTML=0
    y.style.color="white"
    x.style.color="white"
    
}

function add1x(){
    str+=1
    x.innerHTML=str
    console.log(x)
  
}
function add2x(){
    str+=2
    x.innerHTML=str
    console.log(x)
    
}

function add3x(){
    str+=3
    x.innerHTML=str
    console.log(x)
  
}
function add1(){
    stry+=1
    y.innerHTML=stry
    console.log(x)
    
}
function add2(){
    stry+=2
    y.innerHTML=stry
    console.log(x)
    
}

function add3(){
    stry+=3
    y.innerHTML=stry
    console.log(x)
  
}


