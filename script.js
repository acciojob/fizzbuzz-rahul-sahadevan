//your JS code here. If required.
let n = 100;

for(let i = 1;i<=100;i++){
    if(i % 3 == 0){
		console.log('Fizz');
        // alert("fizz");
    }
    else if(i % 5 == 0){
		console.log("Buzz");
        // alert("buzz");
    }
    else if(i % 3 == 0 && i%5 == 0){
		console.log("FizzBuzz");
        // alert("fizz-buzz");
    }
    else{
		console.log(i);
        // alert(i);
    }
}