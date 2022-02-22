window.onload = function(){
    let n = prompt('문자를 입력하세요');

    let x = n.split(" ")

    for(let i = 0; i < x.length; i++){
        document.querySelector('#result').innerHTML += x[i];
    }


}

       // 초기 연습

// window.onload = function(){
//     let n = 'black sheep wall';

//     let x = n.split(" ")

//     for(let i = 0; i < x.length; i++){
//         document.querySelector('#result').innerHTML += x[i];
//     }


// }
