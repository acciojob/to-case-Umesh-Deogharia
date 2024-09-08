function toCase(text) {
  // write your code here

	if (text === "") {
		return "-";
	}
	let str1 = text.toUpperCase();
	let str2 = text.toLowerCase();
	return str2.concat(`-${str1}`);
}
// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
