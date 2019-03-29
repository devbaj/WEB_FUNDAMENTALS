function getOneTo255(){
    var arr =[];
    for(var i=1;i<=255;i++){
        arr.push(i);
    }
    return arr;
}

function getEven1000(){
    var sum = 0;
    for(var i=1;i<=1000;i++){
        if(i%2==0){
            sum += i;
        }
    }
    return sum;
}

function sumOdd5000(){
    var sum = 0;
    for(var i=1;i<=5000;i+2){
        sum += i;
    }
    return sum;
}

function interateArr(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

function findMax(arr){
    var max = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

function findAvg(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function arrOdd(){
    var arr = [];
    for(var i=1;i<=50;i++){
        if(i%2 != 0){
            arr.push(i);
        }
    }
    return arr;
}

function greaterThanY(arr,y){
    var c = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > y){
            c++;
        }
    }
    return c;
}

function squares(arr){
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

function negatives(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i]
    }
    var newArr = [max,min,(sum/arr.length)]
    return newArr;
}

function swapVal(arr){
    var first = arr[0];
    var last = arr[arr.length-1];
    arr[0] = last;
    arr[arr.length-1] = first;
    return arr;
}

function numToString(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}