import { useState } from 'react'

function WalletLogo() {
	return (
		<svg className="signup-wallet" viewBox="0 0 112 88" fill="none" aria-hidden="true">
			<path d="M8 25 82 4v20H98c4.4 0 8 3.6 8 8v43H8V25Z" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
			<path d="M82 24H8M106 48H78c-5 0-9-4-9-9s4-9 9-9h28v18Z" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
		</svg>
	)
}

function SignupScreen() {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<main className="signup-screen">
			<header className="signup-brand">
				<WalletLogo />
				<h1>MONEVA</h1>
				<p>Make every naira count</p>
			</header>

			<form className="signup-form">
				<input type="text" placeholder="Full Name" aria-label="Full Name" />
				<input type="email" placeholder="Email" aria-label="Email" />
				<input type="tel" placeholder="Phone number (+234)" aria-label="Phone number" />
				<div className="password-field">
					<input type={showPassword ? 'text' : 'password'} placeholder="Create Password" aria-label="Create Password" />
					<button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? '◉' : '◌'}
					</button>
				</div>
				<div className="password-field">
					<input type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" aria-label="Confirm Password" />
					<button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? '◉' : '◌'}
					</button>
				</div>
				<button className="signup-submit" type="submit">Sign up</button>
			</form>

			<div className="signup-divider"><span />or<span /></div>

			<div className="social-signup" aria-label="Social sign up options">
				<button type="button" aria-label="Continue with Facebook">f</button>
				<button type="button" aria-label="Continue with Apple">●</button>
				<button type="button" aria-label="Continue with Google">G</button>
			</div>

			<p className="login-prompt">Already have an account? <a href="#login">Log In</a></p>
		</main>
	)
}

export default SignupScreen