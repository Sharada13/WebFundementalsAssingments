//Get 1 to 255
function print()
{
    for( var i=1; i<=255;i++)
    {
    console.log(i);
    }
}
print();

//Get even 1000
function getEven()
{
    var sum=0;
    for(var i=0;i<=1000;i++)
    {
        if(i%2==0)
        {
            sum=sum+i;
        }
    }
    return sum;
}
console.log(getEven());


//Sum odd 5000
function sumOdd()
{ 
    var sum=0;
    for(var i=1; i<=5000;i++)
    {
        if(i%2!=0)
        {
            sum=sum+i;
        }
    }
    return sum;
}
console.log(sumOdd());

//iterate an array
function sumArr(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
console.log(sumArr([1,2,5]));

//find max
function maxArr(arr)
{
    max=arr[0];
    for(var i=1;i<=arr.length;i++)
    {
        if(max<arr[i])
        {
            max=arr[i];
        }
    }
    return max
}
y=(maxArr([2,4,8,9,5,3]));
console.log(y);

//find average
function averageArr(arr)
{
    var sum=0;
    for(var i=0; i<=arr.length;i++)
    {
        sum=sum+i;
    }
    return sum/arr.length;
}
console.log(averageArr([1,2,3,4,5]));

//array odd
function oddArr()
{
    var z=[];
    for(i=1;i<=50;i++)
    {
        if(i%2!=0)
        {
            z.push(i);
        }
    }
    return z
}
console.log(oddArr());

//greater than Y

function greaterThan(arr)
{
    var count=0;
    for(var i=0;i<arr.length;i++)
    {
        if(y<arr[i])
        {
            count=count+1
        }
    }
    return count;
}
var y = 3;
console.log(greaterThan([1,3,5,7]));

//squares
function squaredArr(arr)
{
    for(var i=0; i<arr.length;i++)
    {
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
console.log(squaredArr([1,3,5,7]));

//negatives
function replaceNegatives(arr)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            arr[i]=0;
        }
    }
    return arr;
}
console.log(replaceNegatives([1,-2,5,-7]));

//Max/min/avg

function maxMinAvg(arr){
var max=arr[0];
var min=arr[0];
var sum=0;
var z=[];
for(i=0;i<arr.length;i++)
{ 
    if(arr[i]>max)
        {
        max=arr[i]; 
        }

    if(arr[i]<min)
        {
            min=arr[i]
        }
    sum=sum+arr[i];
}
z.push(max, min, sum/arr.length);
return z
}
console.log(maxMinAvg([1,2,3,4,5,6]));

//swap values

function swapValues(arr)
{
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
return arr;
}
console.log(swapValues([1,2,3,4,5,6]));

//number to string

function numberToString(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log(numberToString([-1,3,4,5,-6,-9]));