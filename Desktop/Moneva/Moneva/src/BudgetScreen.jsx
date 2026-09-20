function BellIcon() {
	return <span className="dashboard-bell" aria-hidden="true">♧</span>
}

function BudgetWalletIcon() {
	return (
		<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
			<circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2" />
			<path d="M15 18h20v17H15V18ZM18 18v-3h14l3 3M28 25h5v5h-5a2.5 2.5 0 0 1 0-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
		</svg>
	)
}

function HomeIcon() {
	return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="m4 12 10-8 10 8v12H16v-7h-4v7H4V12Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>
}

function BudgetIcon() {
	return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="5" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 10h8M9 14h8M9 18h5M20 10h4v12h-4" stroke="currentColor" strokeWidth="2" /></svg>
}

function SavingsIcon() {
	return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M6 16c0-5 4-8 10-8 4 0 7 2 8 5l-2 7H9l-3-4Z" stroke="currentColor" strokeWidth="2" /><path d="M20 8c1-2 3-3 5-3M9 20v3M20 20v3M22 14h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
}

function BudgetScreen() {
	return (
		<main className="budget-screen">
			<header className="budget-header">
				<div>
					<h1>My Budgets</h1>
					<p>Plan your money. Stay on track. Achieve your goals.</p>
				</div>
				<button className="notification-button" type="button" aria-label="Notifications"><BellIcon /></button>
			</header>

			<h2 className="budget-month">September Budget</h2>

			<section className="budget-card">
				<div className="budget-spent">Spent <span aria-hidden="true">●</span></div>
				<strong>N0.00</strong>
				<small>of N0.00 limit</small>
				<div className="budget-progress"><span>0%</span></div>
			</section>

			<section className="empty-budgets">
				<div className="budget-empty-icon"><BudgetWalletIcon /></div>
				<h2>No budgets yet</h2>
				<p>Create your budget to start tracking<br />your spending.</p>
				<button type="button">Create Budget</button>
			</section>

			<nav className="dashboard-nav budget-nav" aria-label="Main navigation">
				<a className="nav-item" href="#home"><HomeIcon /><span>Home</span></a>
				<a className="nav-item active" href="#budget"><BudgetIcon /><span>Budget</span></a>
				<button className="add-button" type="button" aria-label="Add transaction">+</button>
				<a className="nav-item" href="#savings"><SavingsIcon /><span>Savings</span></a>
				<a className="nav-item" href="#more"><span className="more-icon">•••</span><span>More</span></a>
			</nav>
		</main>
	)
}

export default BudgetScreen