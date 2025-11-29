const mean = document.getElementById("mean");
const median = document.getElementById("median");
const mode = document.getElementById("mode");
const result = document.getElementById("result");

function makeSortedNumArray(){
    const data = document.getElementById("data").value;
    return data.split(",").map(Number).filter(x => !isNaN(x)).sort((a, b) => a - b);
}
function meanFind(){
    let array = makeSortedNumArray();
    console.log(array)
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    result.textContent = (sum/array.length).toFixed(2);
}
function medianFind(){
    let array = makeSortedNumArray();

    if(array.length % 2 === 0){
        console.log("even");
        result.textContent = ((array[(array.length/2) - 1] + array[(array.length/2)]) / 2);
    }
    else{
        console.log("odd");
        result.textContent = (array[((array.length + 1) / 2) - 1]);
    }
}
