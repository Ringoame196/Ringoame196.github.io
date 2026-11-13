const myCreations = document.getElementById('my-creations');

function getCSV(){
    const req = new XMLHttpRequest();
    req.open("get", "assets/data.csv", true);
    req.send(null);
 
    req.onload = function(){
        const result = convertCSVtoArray(req.responseText);
        makeMyCreations(result);
    }
}

// 読み込んだCSVデータを二次元配列に変換して返す関数
function convertCSVtoArray(str){
    const tmp = str.split("\n");
    const result = [];

    for(let i = 0; i < tmp.length; ++i){
        if(tmp[i].trim() === "") continue;
        result[i] = tmp[i].split(',');
    }
    return result;
}

function makeMyCreations(result) {
  for(let i = 0; i < result.length; i ++) {
    const name = result[i][0];
    const url = result[i][1];

    const liElement = document.createElement('li');
    
    const aElement = document.createElement('a');
    aElement.textContent = name;
    aElement.target = '_blank';
    aElement.href = url;

    liElement.append(aElement);
    myCreations.append(liElement);
  }
}

getCSV();