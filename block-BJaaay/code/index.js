//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

let i = 1;
while(i <= 10){
	console.log(i);
	i++;
}

for(i = 1 ; i <= 10 ; i++){
	console.log(i);
}

// Using `console.log` log all the evan values from 1 to 10.

i = 1;

while(i <= 10){
	if(i % 2 == 0){
		console.log(i);
	}
	i++;
}

for(i = 1; i <= 10; i++){
	if(i % 2 ==0){
		console.log(i);
	}
}

// Using `console.log` log all the od values from 1 to 10.

i = 1;

while(i <= 10){
	if(i % 2 != 0){
		console.log(i);
	}
	i++;
}

for(i = 1; i <= 10; i++){
	if(i % 2 != 0){
		console.log(i);
	}
}


// Calculate the sum of all numbers from 1 to 10.

i = 1;
let sum = 0;
while(i <= 10){
	sum += i;
	i++;
}
console.log(`sum is ${sum}`);


sum = 0;
for(i = 1; i <= 10 ; i++){
	sum += i;
}
console.log(`sum is ${sum}`);

// Log all the values from 1 to 10 using while loop

i = 1;
while(i <= 10){
	console.log(i);
	i++;
}


