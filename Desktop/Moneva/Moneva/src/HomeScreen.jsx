function BellIcon() {
	return <span className="dashboard-bell" aria-hidden="true">♧</span>
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

function HomeScreen({ onAddExpense }) {
	return (
		<main className="home-screen">
			<header className="home-header">
				<div className="home-avatar">AM</div>
				<strong>Hi, Mercy</strong>
				<button className="notification-button" type="button" aria-label="Notifications"><BellIcon /></button>
			</header>

			<section className="home-balance-card">
				<div>Available Balance <span aria-hidden="true">●</span></div>
				<strong>N184,320</strong>
				<div className="home-balance-stats">
					<div><span>Income</span><b>N450,000</b></div>
					<div><span>Spent</span><b>N265,680</b></div>
					<div><span>Budget used</span><b>59%</b></div>
				</div>
			</section>

			<h2 className="home-section-title">My Portfolio</h2>
			<section className="portfolio-cards">
				<article className="portfolio-card budget-portfolio"><span>▣</span><small>My Budget</small><strong>N265,680</strong><p>Used up 59% this month</p></article>
				<article className="portfolio-card savings-portfolio"><span>♧</span><small>My Savings</small><strong>N186,000</strong></article>
			</section>

			<h2 className="home-section-title category-title">Budget Categories</h2>
			<section className="category-list">
				<div className="category-row"><header><strong>Food</strong><span>N15,000.00</span></header><div className="progress orange"><span /></div><small>47%</small></div>
				<div className="category-row"><header><strong>Savings</strong><span>N15,000.00</span></header><div className="progress green"><span /></div><small>100%</small></div>
			</section>

			<header className="transactions-heading"><h2>Recent Transactions</h2><a href="#transactions">View All</a></header>
			<section className="transactions-list">
				<article><span className="transaction-icon income">↓</span><div><strong>Salary</strong><small>August 25, 2026 9:30 AM</small></div><b>+N77,000.00</b></article>
				<article><span className="transaction-icon expense">♜</span><div><strong>Food</strong><small>September 2, 2026 12:00 PM</small></div><b>-N7,000.00</b></article>
			</section>
			<button className="home-add-expense" type="button" onClick={onAddExpense}>Add Expense</button>

			<nav className="dashboard-nav home-nav" aria-label="Main navigation">
				<a className="nav-item active" href="#home"><HomeIcon /><span>Home</span></a>
				<a className="nav-item" href="#budget"><BudgetIcon /><span>Budget</span></a>
				<button className="add-button" type="button" aria-label="Add transaction">+</button>
				<a className="nav-item" href="#savings"><SavingsIcon /><span>Savings</span></a>
				<a className="nav-item" href="#more"><span className="more-icon">•••</span><span>More</span></a>
			</nav>
		</main>
	)
}

export default HomeScreen