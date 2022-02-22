window.onload = function(){
    let n = prompt('문자열을 입력하세요.');
    


for(let i = 0; i <= n.length; i++){
    if(n[i] == n[i].toLowerCase()){
        document.querySelector('#result').innerHTML += n[i].toUpperCase();
    }
    else{
        document.querySelector('#result').innerHTML += n[i].toLowerCase();
    }
}
}
