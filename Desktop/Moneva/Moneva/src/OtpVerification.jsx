// import { useRef, useState } from 'react'

// function OtpVerification() {
// 	const [code, setCode] = useState(['', '', '', ''])
// 	const inputRefs = useRef([])
// 	const isComplete = code.every(Boolean)

// 	function updateCode(value, index) {
// 		const digit = value.replace(/\D/g, '').slice(-1)
// 		const nextCode = [...code]
// 		nextCode[index] = digit
// 		setCode(nextCode)
// 		if (digit && index < inputRefs.current.length - 1) {
// 			inputRefs.current[index + 1]?.focus()
// 		}
// 	}

// 	function handleKeyDown(event, index) {
// 		if (event.key === 'Backspace' && !code[index] && index > 0) {
// 			inputRefs.current[index - 1]?.focus()
// 		}
// 	}

// 	return (
// 		<main className="otp-screen">
// 			<button className="back-button" type="button" aria-label="Go back">&#8592;</button>
// 			<section className="otp-content">
// 				<h1>OTP Verification</h1>
// 				<p className="otp-description">We&apos;ve sent a verification code to +234 *** *** 4567.</p>

// 				<div className="otp-inputs" aria-label="Enter verification code">
// 					{code.map((digit, index) => (
// 						<input
// 							key={index}
// 							ref={(element) => { inputRefs.current[index] = element }}
// 							inputMode="numeric"
// 							maxLength="1"
// 							aria-label={`Verification digit ${index + 1}`}
// 							value={digit}
// 							onChange={(event) => updateCode(event.target.value, index)}
// 							onKeyDown={(event) => handleKeyDown(event, index)}
// 						/>
// 					))}
// 				</div>

// 				<button className="verify-button" type="button" disabled={!isComplete}>Verify</button>
// 				<p className="resend-copy">Don&apos;t receive the SMS code? <button type="button">Resend Code</button></p>
// 				<p className="expiry-copy">Code expires in <strong>02:00</strong></p>
// 			</section>
// 		</main>
// 	)
// }

// export default OtpVerification