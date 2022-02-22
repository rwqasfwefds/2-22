function addContents(){
    // p태그 만들고 조립
    let newP = document.createElement('p');
    let txtNode = document.createTextNode('Dom은 Document Object Model');
    newP.appendChild(txtNode);
    // 이미지 태그 만들고 조립
    let newImg = document.createElement('img');
    let srcNode = document.createAttribute('src');
    let altNode = document.createAttribute('alt');
    srcNode.value = "img/dom.jpg";
    altNode.value = "돔 트리 예제 이미지";
    newImg.setAttributeNode(srcNode);
    newImg.setAttributeNode(altNode);
    // 화면 출력
    document.getElementById('info').appendChild(newP);
    document.getElementById('info').appendChild(newImg);
}