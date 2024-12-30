let arr3=["hello","welcome","to","javascript"]
let arr=[];
for (i=0;i<arr3.length;i++){
let str="";
for(j=arr3[i].length-1;j>=0;j--){
str += arr3[i][j];
}
arr[i]=str;
}
console.log(arr);


let arr2=["hello","welcome","to","javascript"]
let arr1=[];
for(let i=0;i<arr2.length;i++){
   let str="";
   if (i%2==0){
    for(j=arr2[i].length-1;j>=0;j--){
        str += arr2[i][j];
    }
}
else {
    str=arr2[i];
}
arr1[i]=str;
}
console.log(arr1);