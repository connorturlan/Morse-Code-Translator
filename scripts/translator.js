MORSE_DICTIONARY = {
	A: ".-",
	B: "-...",
	C: "-.-.",
	D: "-..",
	E: ".",
	F: "..-.",
	G: "--.",
	H: "....",
	I: "..",
	J: ".---",
	K: "-.-",
	L: ".-..",
	M: "--",
	N: "-.",
	O: "---",
	P: ".--.",
	Q: "--.-",
	R: ".-.",
	S: "...",
	T: "-",
	U: "..-",
	W: ".--",
	X: "-..-",
	Y: "-.--",
	Z: "--..",
	" ": " ",
};

// translate a line of english text to morse code.
function translate_english_to_morse(text) {
	let output = "";
	Array.from(text.toUpperCase()).forEach((char) => {
		if (char in MORSE_DICTIONARY) {
			output += MORSE_DICTIONARY[char] + " ";
		}
	});
	return output.substring(0, output.length - 1);
}

/*
	find a key by value within the dictionary.

	code sourced from https://stackoverflow.com/a/28191966
*/
function getKeyByValue(object, value) {
	return Object.keys(object).find((key) => object[key] === value);
}

// translate a line of morse code to english text.
function translate_morse_to_english(line) {
	let output = "";

	// split the line into words on each space '   '.
	words = line.split("   ");
	words.forEach((word) => {
		// split each word into letters.
		letters = word.split(" ");
		letters.forEach((letter) => {
			output += getKeyByValue(MORSE_DICTIONARY, letter) || "";
		});

		// add the space back in.
		output += " ";
	});

	// return the output removing the trailing space.
	return output; //.substring(0, output.length - 1);
}
