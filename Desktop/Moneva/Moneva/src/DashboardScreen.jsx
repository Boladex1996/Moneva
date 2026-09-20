function BellIcon() {
	return <span className="dashboard-bell" aria-hidden="true">♧</span>
}

function EmptyTransactionIcon() {
	return (
		<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
			<path d="M12 8h19l7 7v25H12V8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
			<path d="M31 8v8h7M24 20v15M17 27h14" stroke="currentColor" strokeWidth="3" />
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

function DashboardScreen() {
	return (
		<main className="dashboard-screen">
			<header className="dashboard-header">
				<div className="dashboard-profile">MB</div>
				<div className="dashboard-greeting">Hi, Mercy</div>
				<button className="notification-button" type="button" aria-label="Notifications"><BellIcon /></button>
			</header>

			<section className="balance-card">
				<div className="balance-label">Available Balance <span aria-hidden="true">●</span></div>
				<strong>N0.00</strong>
				<div className="balance-stats">
					<div><span>Income</span><b>N0.00</b></div>
					<div><span>Spent</span><b>N0.00</b></div>
					<div><span>Budget used</span><b>0%</b></div>
				</div>
			</section>

			<section className="empty-transactions">
				<div className="empty-icon"><EmptyTransactionIcon /></div>
				<h1>No transactions yet</h1>
				<p>Add your first expense or income</p>
				<button type="button">Add Expense</button>
			</section>

			<nav className="dashboard-nav" aria-label="Main navigation">
				<a className="nav-item active" href="#home"><HomeIcon /><span>Home</span></a>
				<a className="nav-item" href="#budget"><BudgetIcon /><span>Budget</span></a>
				<button className="add-button" type="button" aria-label="Add transaction">+</button>
				<a className="nav-item" href="#savings"><SavingsIcon /><span>Savings</span></a>
				<a className="nav-item" href="#more"><span className="more-icon">•••</span><span>More</span></a>
			</nav>
		</main>
	)
}

export default DashboardScreen