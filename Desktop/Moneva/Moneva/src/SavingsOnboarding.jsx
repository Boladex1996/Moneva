function SavingsOnboarding({ onGetStarted }) {
	return (
		<main className="savings-screen">
			<div className="savings-illustration" aria-hidden="true">
				<svg viewBox="0 0 330 205" fill="none">
					<path d="M32 176V36M32 176h266" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
					<path d="m28 38 4-8 4 8M298 172l8 4-8 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M60 176v-50h38v50" fill="#087e6d" />
					<path d="M113 176V89h38v87" fill="#54baa3" />
					<path d="M169 176v-65h38v65" fill="#54baa3" />
					<path d="M225 176V73h38v103" fill="#54baa3" />
					<path d="m61 109 55-39 56 24 55-38 33 8" stroke="#54baa3" strokeWidth="5" strokeDasharray="4 8" />
					<path d="M60 109 115 70l57 24 55-38" stroke="#54baa3" strokeWidth="2" strokeDasharray="4 8" />
					<path d="M282 56h12v12h-12z" fill="#087e6d" />
				</svg>
			</div>

			<div className="savings-copy">
				<div className="onboarding-dots" aria-hidden="true">
					<span />
					<span className="active" />
				</div>
				<h1>Save smarter.<br />Reach your goals.</h1>
				<p>Set savings goals, track your progress,<br />and build better money habits with<br />Moneva.</p>
			</div>

			<button className="savings-action" type="button" onClick={onGetStarted}>Get Started</button>
		</main>
	)
}

export default SavingsOnboarding