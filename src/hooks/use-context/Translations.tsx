import { createContext, useContext, useState } from "react";

const LanguageContext = createContext<{
	language: string;
	setLanguage: (language: string) => void;
}>({ language: "en", setLanguage: () => {} });

export default function LocalApp() {
	const [language, setLanguage] = useState("en");

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			<Title />
			<Warning />
		</LanguageContext.Provider>
	);
}

export function Title() {
	const { language } = useContext(LanguageContext);
	const messages = {
		en: "Title",
		es: "Título",
		fr: "Titre",
		de: "Titel",
		it: "Titolo",
		pt: "Título",
		ja: "タイトル",
		zh: "标题",
	};
	return language === "en" ? (
		<div style={{ color: "blue" }}>{messages[language]}</div>
	) : null;
}

export function Warning() {
	const { language } = useContext(LanguageContext);
	const messages = {
		en: "Warning",
		es: "Advertencia",
		fr: "Avertissement",
		de: "Warnung",
		it: "Avviso",
		pt: "Aviso",
		ja: "警告",
		zh: "警告",
	};
	return language === "en" ? (
		<div style={{ color: "red" }}>{messages[language]}</div>
	) : null;
}
