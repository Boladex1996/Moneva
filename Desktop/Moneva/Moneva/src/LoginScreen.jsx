import { useState } from 'react'

function WalletLogo() {
	return (
		<svg className="signup-wallet" viewBox="0 0 112 88" fill="none" aria-hidden="true">
			<path d="M8 25 82 4v20H98c4.4 0 8 3.6 8 8v43H8V25Z" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
			<path d="M82 24H8M106 48H78c-5 0-9-4-9-9s4-9 9-9h28v18Z" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
		</svg>
	)
}

function LoginScreen({ onLogin, onGoToSignup }) {
	const [showPassword, setShowPassword] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		onLogin?.()
	}

	return (
		<main className="signup-screen login-screen">
			<header className="signup-brand login-brand">
				<WalletLogo />
				<h1>MONEVA</h1>
				<p>Make every naira count</p>
			</header>

			<form className="signup-form login-form" onSubmit={handleSubmit}>
				<input type="tel" placeholder="Phone number (+234)" aria-label="Phone number" />
				<div className="password-field">
					<input type={showPassword ? 'text' : 'password'} placeholder="Password" aria-label="Password" />
					<button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? '◉' : '◌'}
					</button>
				</div>
				<a href="#forgot-password" className="forgot-password">Forgot Password?</a>
				<button className="signup-submit login-submit" type="submit">Log In</button>
			</form>

			<div className="signup-divider"><span />or<span /></div>

			<div className="social-signup" aria-label="Social sign in options">
				<button type="button" aria-label="Continue with Facebook">f</button>
				<button type="button" aria-label="Continue with Apple">●</button>
				<button type="button" aria-label="Continue with Google">G</button>
			</div>

			<p className="login-prompt">Don't have an account? <button type="button" className="inline-link" onClick={onGoToSignup}>Sign Up</button></p>
		</main>
	)
}

export default LoginScreen
