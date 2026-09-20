import { useState } from 'react'

function AddExpenseScreen({ onBack, onSaved }) {
	const [amount, setAmount] = useState('')
	const [category, setCategory] = useState('Food')
	const [description, setDescription] = useState('')
	const [date, setDate] = useState('2026-09-09')
	const [paymentMethod, setPaymentMethod] = useState('Debit Card')

	function handleSubmit(event) {
		event.preventDefault()
		onSaved()
	}

	return (
		<main className="add-expense-screen">
			<button className="expense-back-button" type="button" aria-label="Go back" onClick={onBack}>&#8592;</button>
			<header className="expense-heading">
				<h1>Add expense</h1>
				<p>This just records what already happened - no money moves.</p>
			</header>

			<form className="expense-form" onSubmit={handleSubmit}>
				<label>
					Amount
					<input type="number" inputMode="decimal" placeholder="N0.0" value={amount} onChange={(event) => setAmount(event.target.value)} />
				</label>
				<label>
					Category
					<select value={category} onChange={(event) => setCategory(event.target.value)}>
						<option>Food</option>
						<option>Transport</option>
						<option>Bills</option>
						<option>Shopping</option>
					</select>
				</label>
				<label>
					What was it for?
					<input type="text" placeholder="e.g paid for food" value={description} onChange={(event) => setDescription(event.target.value)} />
				</label>
				<label>
					Date
					<input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
				</label>
				<label>
					Payment Method
					<select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
						<option>Debit Card</option>
						<option>Cash</option>
						<option>Bank Transfer</option>
					</select>
				</label>
				<button className="save-expense-button" type="submit">Save Expense</button>
			</form>
		</main>
	)
}

export default AddExpenseScreen