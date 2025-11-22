import { useState, useEffect } from "react";

export const useTypewriter = (words: string[], speed = 100, delay = 1000) => {
const [text, setText] = useState("");
const [wordIndex, setWordIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
	const currentWord = words[wordIndex];
	const typingSpeed = isDeleting ? speed / 2 : speed;

	const timeout = setTimeout(() => {
	setText((prev) =>
		isDeleting
		? currentWord.substring(0, prev.length - 1)
		: currentWord.substring(0, prev.length + 1)
	);

	if (!isDeleting && text === currentWord) {
		setTimeout(() => setIsDeleting(true), delay);
	} else if (isDeleting && text === "") {
		setIsDeleting(false);
		setWordIndex((prev) => (prev + 1) % words.length);
	}
	}, typingSpeed);

	return () => clearTimeout(timeout);
}, [text, isDeleting, wordIndex, words, speed, delay]);

return text;
};