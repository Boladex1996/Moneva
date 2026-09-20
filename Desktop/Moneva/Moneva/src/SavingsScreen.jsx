function BellIcon() {
	return <span className="dashboard-bell" aria-hidden="true">♧</span>
}

function SavingsWalletIcon() {
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

function SavingsScreen() {
	return (
		<main className="savings-dashboard-screen">
			<header className="savings-header">
				<div>
					<h1>Savings</h1>
					<p>Build towards what matters.</p>
				</div>
				<button className="notification-button" type="button" aria-label="Notifications"><BellIcon /></button>
			</header>

			<section className="total-savings-card">
				<div>Total Savings <span aria-hidden="true">●</span></div>
				<strong>N0.00</strong>
			</section>

			<section className="empty-savings">
				<div className="savings-empty-icon"><SavingsWalletIcon /></div>
				<h2>Start your savings goal</h2>
				<p>Give your money a purpose and track<br />progress toward it.</p>
				<button type="button">Coming Soon</button>
			</section>

			<nav className="dashboard-nav savings-nav" aria-label="Main navigation">
				<a className="nav-item" href="#home"><HomeIcon /><span>Home</span></a>
				<a className="nav-item" href="#budget"><BudgetIcon /><span>Budget</span></a>
				<button className="add-button" type="button" aria-label="Add transaction">+</button>
				<a className="nav-item active" href="#savings"><SavingsIcon /><span>Savings</span></a>
				<a className="nav-item" href="#more"><span className="more-icon">•••</span><span>More</span></a>
			</nav>
		</main>
	)
}

export default SavingsScreen