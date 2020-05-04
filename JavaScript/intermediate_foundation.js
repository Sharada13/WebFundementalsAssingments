//1. sigma
function sigma(num){
    var sum=0;
    for(var i=0;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(sigma(5));

//2. factorial
function factorial(num){
    var factorial=1;
    for(i=1;i<=num;i++){
        factorial=factorial*i;
    }
    return factorial;      
}
console.log(factorial(5));

//3. Fibonacci 1 1 2 3 5 8 13 21 34

function fib(n){
    if(n===0 || n===1){
        return n;
    }
    return fib(n-2)+fib(n-1);
}
console.log(fib(5));



//4. Array-second to last
function secondToLast(arr){
    var x=arr[arr.length-2]
    if(arr.length<2){
    x=null;
    }
    return x;
}
console.log(secondToLast([1,2,3,4,5,6]));

//5. Arrat-nth to last

function nthToLast(arr,n){
    var x=arr[arr.length-n]
    if(arr.length<n){
    x=null;
    }
    return x;
}
console.log(nthToLast([1,2,3,4,5,6],4))

//6. Array-second largest

function secondLargest(arr){
    var max=arr[0];
    var secondMax=arr[0];
    for(var i=1; i<arr.length-1;i++){
        if(max<arr[i]){
        max=arr[i];
        }
        if(arr[i]>secondMax && arr[i]!==max){
            secondMax=arr[i];
        }
    }
    console.log(max);
    return secondMax;
}   
console.log(secondLargest([23,4,67,5,27,4,28,17]));







//7. double trouble
function doubleTrouble(arr){
    for(var i=arr.length-1; i>=0; i--)
    {
        arr[i*2+1]=arr[i];
        arr[i*2]=arr[i];
    }
    return arr;
}
console.log(doubleTrouble([2,3,4,5]));



