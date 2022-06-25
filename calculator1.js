let result = document.getElementById("display");

function equal(){
result.innerHTML = eval(result.innerHTML);
}

function reset(){
result.innerHTML= "0";
}

function clickbutton00( target ){
let input = target.innerText;
let rslt = result.innerText; 
if( rslt == "" ){
result.innerHTML = "0"; 
} else if( rslt == "0"){ result.innerHTML = '0'; 
} else if( /[\+\-\*\/]/.test( rslt ) ){ 
if( /[\+\-\*\/]/.test( rslt.slice(-1) ) ){ result.innerHTML +="0"; 
} else if( rslt.slice(-1) != "0" ){ result.innerHTML += input; 
}
} else if( rslt.slice(-1) == "0" ){ 
result.innerHTML += input;
} else { 
result.innerHTML += input;
}
}

function clickbutton(target){
let input = target.innerText;
let rslt = result.innerText;
if( rslt == "0" ){ result.innerHTML = input;
} else if( /[\+\-\*\/]0/.test( rslt.slice(-2) ) ){
result.innerHTML = rslt.substr( 0, rslt.length - 1 ) + input;
} else {
result.innerHTML += input;
}
}

function edit(target){
let input = target.innerHTML;
if(result.innerHTML.slice(-1)=="-"){
return;
}else if(result.innerHTML.slice(-1)=="+"){
return;
}else if(result.innerHTML.slice(-1)=="*"){
return;
}else if(result.innerHTML.slice(-1)=="/"){
return;
}else if(result.innerHTML.slice(-1)=="."){
return;
}else{
result.innerHTML += input;
}
}