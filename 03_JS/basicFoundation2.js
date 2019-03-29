function biggieSize(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] > 0){
            arr[i] = 'big';
        }
    }
    return arr;
}

function printLowReturnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i=0;i<arr.length;i++){
        if(min > arr[i]){
            min = arr[i];
        }
        else if(max < arr[i]){
            max = arr[i]
        }
    }
    console.log(min);
    return max;
}

function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 != 0){
            return arr[i];
        }
    }
}

function doubleVision(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr[i] = arr[i] * 2;
    }
    return newArr;
}

function countPositives(arr){
    var c = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > 0){
            c++;
        }
    }
    arr[arr.length-1] = c;
    return arr;
}

function evensAndOdds(arr){
    var evenC = 0;
    var oddC = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            evenC++;
            oddC = 0;
            if(evenC == 3){
                console.log('Even more so!')
                evenC = 0;
            }
        }
        else{
            oddC++;
            evenC = 0;
            if(oddC == 3){
                console.log("That's odd!");
                oddC = 0;
            }
        }
    }
}

function incrementTheSeconds(arr){
    for(var i=0;i<arr.length;i++){
        if(i % 2 != 0){
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}

function previousLengths(arr){
    for(var i=arr.length-1;i>0;i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

function addSeven(arr){
    var newArr;
    for(var i=0;i<arr.length;i++){
        newArr[i] = arr[i] + 7;
    }
    return newArr;
}

function reverseArray(arr){
    var temp = 0;
    for(var i=0;i<arr.length;i++){
        temp = arr[i]
        arr[i] = arr[arr.length-(1+i)];
        arr[arr.length-(1+i)] = temp;
    }
    return arr;
}

function outlookNegative(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            newArr[i] = (0 - arr[i]);
        }
    }
    return newArr;
}

function alwaysHungry(arr){
    var hungry = true;
    for(var i=0;i<arr.length;i++){
        if(arr[i] == "food"){
            console.log("yummy");
            hungry = false;
        }
    }
    if(hungry){
        console.log("I'm hungry");
    }
}

function swapTowardCenter(arr){
    var temp = 0;
    for(var i=0;i<arr.length;i++){
        temp = arr[i]
        arr[i] = arr[arr.length-(1+i)];
        arr[arr.length-(1+i)] = temp;
    }
}

function scaleArray(arr,num){
    for(var i=0;i<arr.length;i++){
        arr[i] = (arr[i] * num);
    }
    return arr;
}