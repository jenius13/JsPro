switch ('A') {
  case 'X':
    console.log("XXX");
    break;
  case 'A':
    console.log("AAA");
    break;
  default:
    console.log("default");

}

var obj ={"name":"kim","age":27};

for (var key in obj){
  console.log(obj[key]);
}

var arr = [11,22,33];

for (var index in arr){
  console.log(arr[index]);
}

arr.forEach((item, i) => {
  console.log(i+":"+item)
});

var count = 0 ;

while(true){

  console.log(count);
  count++;
  if(count ==5){
    break;
  }
}
