function firstNonRepeatedChar(str) {
 // Write your code here
	let count=0;
	for(let i=0;i<str.length;i++){
		if(str.charAt(i)===str.charAt(i+1)){
			count++;
			i++;
		}else{
			return str.charAt(i);
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
