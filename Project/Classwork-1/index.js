const count=document.getElementById("counter");

const incrment=()=>{
    let value= parseInt( count.innerText)+1;
    count.innerHTML=value;
}

const decrement=()=>{
    let value= parseInt( count.innerText)-1;
    count.innerHTML=value;
}