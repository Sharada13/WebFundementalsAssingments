//biggie size
function biggieSize(arr)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>0)
        arr[i]='big';
    }
    return arr;
}
console.log(biggieSize([1,-4,6,7,-5,0]));

//print low return high
function lowHigh(arr)
{
    var low=arr[0];
    var high=arr[0];
    for(i=1;i<arr.length;i++)
    {
        if(arr[i]<low)
        {
            low=arr[i];
        }
        if(arr[i]>high)
        {
            high=arr[i]
        }
    }
    console.log(low);
    return high;
}
console.log(lowHigh([1,2,3,4,5,6]))

//Print one return another
function printReturn(arr)
{
    console.log(arr[arr.length-2])
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2!=0){
            odd=arr[i];
            break;
        }
    }
    return odd;
}   
console.log(printReturn([1,2,3,4,5,6,7]));

//double vision
function doubleVision(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
}
console.log(doubleVision([3,5,6,7]));

//count positives
function countPositives(arr){
    var count=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>0){
            count=count+1;
        }
    }
    arr[arr.length-1]=count;
    return arr;
}
console.log(countPositives([1,2,-4,8,7]));

//evens and odds
function evensOdds(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2===0 && arr[i+1]%2===0 && arr[i+2]%2===0){
            console.log("Even more so!");
        }
        if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
            console.log("That's odd!")
        }
    }
}
evensOdds([1,3,5,4,5,6,4,2]);

//increment the seconds

function incrementSeconds(arr){
    for(i=1;i<arr.length;i++){
        if(i%2!=0){
            arr[i]=arr[i]+1;
        }
    }
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
    
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5,6,7]));

//previous lenghts
function previousLengths(arr){
    for(var i=arr.length-1; i>0;i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}
console.log(previousLengths(["hello", "dojo", "awesome"]));

//Add Seven
function addSeven(arr){
    z=[];
    for(i=0;i<arr.length;i++){
        z.push(arr[i]+7);
    }
    return z;
}
console.log(addSeven([1,2,3,4]))

//Reverse array
function reverseArray(arr){
    for(var i=0;i<arr.length/2;i++){
        temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5,6]));

//outlook:negative
function outlookNegative(arr){
    for(i=0; i<arr.length;i++){
        if(arr[i]>0){
            arr[i]=arr[i]*-1;
        }
    }
    return arr
}
console.log(outlookNegative([1,-2,3,6,-5]));

//Always hungry

function alwaysHungry(arr){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==='food'){
            console.log('yummy');
            count=count+1;
        }
    }
        if(count<1){
            console.log("I'm hungry");
        }
}
console.log(alwaysHungry([1,'food', 4,7,'food']));
console.log(alwaysHungry([1,6, 4, 7]));

//Swap towards the center

function swapCenter(arr){
    for(var i=0;i<arr.length/2;i+=2){
        temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}
console.log(swapCenter([1,2,3,4,5,6,7]))

//scale the array

function scaleArray(arr,a){
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i]*a;
    }
    return arr;
}
console.log(scaleArray([1,2,3],4));