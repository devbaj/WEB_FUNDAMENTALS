function sigma(x){
    var sum = 0;
    for(var i=1;i<=x;i++){
        sum += i;
    }
    return sum;
}

function factorial(x){
    var prod = 1;
    for(var i=1;i<=x;i++){
        prod = prod * x;
    }
    return prod;
}

function fibonacci(idx){
    var fib = 0;
    for(var i=0;i<=idx;i++){
        fib += i;
    }
    return fib;
}

function arrSecondToLast(arr){
    if(arr.length <= 1){
        return;
    }
    return arr[arr.length-2];
}

function arrNthToLast(arr,x){
    if(arr.length <= x){
        return;
    }
    return arr[arr.length-x];
}

function secondLargest(arr){
    if(arr.length < 2){
        return;
    }
    var max = arr[0];
    var secondMax = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
            if(arr[i] > max && arr[i] > secondMax){
                secondMax = arr[i];
            }
        }
    }
    return secondMax;
}

function doubleTrouble(arr){
    for(var i=(arr.length-1);i>=0;i--){
        arr[i*2] = arr[i];
        arr[i*2+1] = arr[i];
    }
    return arr;
}

//PART 2

//Fibonacci Recursion
function fib(n){
    if( n == 0 || n == 1){
        return n;
    }
    return (fib(n-2) + fib(n-1));
}

//Recursive Fill
