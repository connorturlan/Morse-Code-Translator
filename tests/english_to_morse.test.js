const english_to_morse = require("./../scripts/translator").english_to_morse;

// tested using values from: https://morsecode.world/international/translator.html
// omitting special characters since it's not a requirement of the mvp.
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

alphabet = "abcdefghijklmnopqrstuvwxyz";

// per-character tests.
test("translating A-Z uppercase", () => {
	Array.from(alphabet.toUpperCase()).forEach((c) => {
		expect(english_to_morse(c)).toBe(morse_table[c.toLowerCase()]);
	});
});

test("translating A-Z lowercase", () => {
	Array.from(alphabet.toLowerCase()).forEach((c) => {
		expect(english_to_morse(c)).toBe(morse_table[c.toLowerCase()]);
	});
});

test("translating special characters", () => {
	Array.from(",.-`~!@#$%^&*()_+/\\{}[]'\"".toLowerCase()).forEach((c) => {
		expect(english_to_morse(c)).toBe("");
	});
});

// test sentences.
test("translating 'Hello, World!'", () => {
	expect(english_to_morse("Hello, World!")).toBe(
		".... . .-.. .-.. ---   .-- --- .-. .-.. -.."
	);
});

// test pangrams.
test("translating 'The quick brown fox jumps over a lazy dog'", () => {
	expect(english_to_morse("The quick brown fox jumps over a lazy dog")).toBe(
		"- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   .-   .-.. .- --.. -.--   -.. --- --."
	);
});

test("translating 'Hello, World!'", () => {
	expect(english_to_morse("Hello, World!")).toBe(
		".... . .-.. .-.. ---   .-- --- .-. .-.. -.."
	);
});

test("translating 'Hello, World!'", () => {
	expect(english_to_morse("Hello, World!")).toBe(
		".... . .-.. .-.. ---   .-- --- .-. .-.. -.."
	);
});
