const { morse_to_english } = require("../scripts/translator");

const english_to_morse = require("../scripts/translator").morse_to_english;

// tested using values from: https://morsecode.world/international/translator.html
morse_table = {
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--..",
};

function getMorse(c) {
	return morse_table[c.toLowerCase()];
}

alphabet = "abcdefghijklmnopqrstuvwxyz";

// per-character tests.
test("reverse translating A-Z uppercase", () => {
	Array.from(alphabet.toUpperCase()).forEach((c) => {
		expect(morse_to_english(getMorse(c.toUpperCase()))).toBe(
			c.toUpperCase()
		);
	});
});

test("reverse translating A-Z lowercase", () => {
	Array.from(alphabet.toLowerCase()).forEach((c) => {
		expect(morse_to_english(getMorse(c.toLowerCase()))).toBe(
			c.toUpperCase()
		);
	});
});

// test sentences.
test("reverse translating 'Hello, World!'", () => {
	expect(
		morse_to_english(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
	).toBe("Hello World".toUpperCase());
});

// test pangrams.
test("reverse translating 'The quick brown fox jumps over a lazy dog'", () => {
	expect(
		morse_to_english(
			"- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / .- / .-.. .- --.. -.-- / -.. --- --."
		)
	).toBe("The quick brown fox jumps over a lazy dog".toUpperCase());
});
