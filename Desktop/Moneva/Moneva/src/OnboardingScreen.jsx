function MoneyIllustration() {
	return (
		<svg viewBox="0 0 360 245" fill="none" role="img" aria-label="Money management illustration">
			<path d="M55 171c-23-17-29-49-4-76 25-27 61-13 84 18 23 31 24 57-2 75-26 18-55 0-78-17Z" fill="#f1efff" />
			<path d="M122 75c26-29 75-28 99 3 24 31 22 71-13 95-35 24-91 8-103-27-7-21-2-48 17-71Z" fill="#f7f6ff" />
			<path d="m171 48 26 32-28 43-26-32 28-43Z" fill="#dfe4fb" />
			<path d="m196 80 25-26 28 51-27 40-26-65Z" fill="#f4f5ff" />
			<path d="M60 96h116v79H60z" fill="#358f62" stroke="#f7f6ff" strokeWidth="5" />
			<path d="M67 151c12-21 23-3 34-12 12-10 17-34 28-18 12 16 22-3 39-16" stroke="#f26a64" strokeWidth="3" />
			<path d="M67 140c11-10 20-5 29-15 12-13 19 9 30-3 11-12 21-11 38-27" stroke="#67d1bb" strokeWidth="3" />
			<path d="M92 98v77M125 98v77M158 98v77" stroke="#4eaa75" strokeWidth="2" opacity=".7" />
			<path d="M81 175h88l22 16H96l-15-16Z" fill="#cbd2e7" stroke="#f7f6ff" strokeWidth="4" />
			<path d="m100 179 67 6" stroke="#59647f" strokeWidth="3" />
			<circle cx="161" cy="132" r="25" fill="#5552bd" stroke="#f3f3ff" strokeWidth="6" />
			<path d="M161 115v19l10 7" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
			<path d="m218 76 19 31-6 5-21-28 8-8Z" fill="#f7f6ff" />
			<path d="M239 109c7-6 15-5 19 2l-7 10c-7 0-11-4-12-12Z" fill="#ff977c" />
			<path d="M244 105 254 96l9 8-8 11-11-10Z" fill="#55cdb2" />
			<path d="m257 97 16-18" stroke="#4d5e84" strokeWidth="3" />
			<path d="M247 117c13 4 18 19 12 31l-9 18-22-9 7-25c2-8 5-13 12-15Z" fill="#ff6f69" />
			<path d="m240 154-7 34-14-2 3-40 18 8ZM257 165l22 21-9 10-29-17 16-14Z" fill="#575bc8" />
			<path d="m217 185 17 1-3 7h-21c-1-4 2-7 7-8ZM266 187l11 4-4 6h-21c-1-4 5-8 14-10Z" fill="#29326c" />
			<path d="M201 128c9-8 18-8 27-1l-9 21-20-8 2-12Z" fill="#f4b08c" />
			<circle cx="218" cy="117" r="10" fill="#f4b08c" />
			<path d="M208 117c2-12 20-16 27-3l-4 8-9-6-8 7-6-6Z" fill="#2c2261" />
			<path d="M290 141c3 8 9 12 17 11M292 148c3 7 8 10 14 10M293 155c3 5 7 7 11 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
		</svg>
	)
}

function OnboardingScreen({ onNext }) {
	return (
		<main className="control-screen">
			<div className="control-illustration" aria-hidden="true">
				<MoneyIllustration />
			</div>

			<section className="control-copy">
				<div className="onboarding-dots" aria-label="First onboarding page">
					<span className="active" />
					<span />
				</div>
				<h1>Take control<br />of your money</h1>
				<p>Track your spending, create smarter<br />budgets, and save towards the things that<br />matter.</p>
			</section>

			<button className="control-action" type="button" onClick={onNext}>Next</button>
		</main>
	)
}

export default OnboardingScreen