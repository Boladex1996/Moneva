function MonevaSplash({ onContinue }) {
	return (
		<main className="splash-screen">
			<div className="wallet-pattern wallet-pattern-top" aria-hidden="true">
				<span />
			</div>
			<div className="splash-content">
				<div className="wallet-mark" aria-hidden="true">
					<svg viewBox="0 0 112 88" fill="none">
						<path d="M8 25 82 4v20H98c4.4 0 8 3.6 8 8v43H8V25Z" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
						<path d="M82 24H8M106 48H78c-5 0-9-4-9-9s4-9 9-9h28v18Z" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
					</svg>
				</div>
				<h1>MONEVA</h1>
				<p>Make every naira count</p>
				<button className="splash-action" type="button" onClick={onContinue}>Get Started</button>
			</div>
			<div className="wallet-pattern wallet-pattern-bottom" aria-hidden="true">
				<span />
			</div>
		</main>
	)
}

export default MonevaSplash