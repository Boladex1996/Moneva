function BellIcon() {
	return <span className="dashboard-bell" aria-hidden="true">♧</span>
}

const categories = [
	['Food', '7,000/15,000', '47%', 'orange'],
	['Savings', '15,000/15,000', '100%', 'green'],
	['Electricity', '0/2000', '0%', 'orange'],
	['Tithe', '8000/8000', '100%', 'red'],
	['Data', '0/5000', '0%', 'orange'],
]

function BudgetOverviewScreen() {
	return (
		<main className="budget-overview-screen">
			<header className="budget-overview-header">
				<div>
					<h1>My Budgets</h1>
					<p>Plan your money. Stay on track. Achieve your goals.</p>
				</div>
				<button className="notification-button" type="button" aria-label="Notifications"><BellIcon /></button>
			</header>

			<h2 className="overview-month">September Budget</h2>
			<section className="overview-spent-card">
				<div>Spent <span aria-hidden="true">●</span></div>
				<strong>N265,680</strong>
				<small>of N450,000 limit</small>
				<div className="overview-progress-ring"><span>59%</span></div>
			</section>

			<button className="create-budget-banner" type="button">
				<span className="create-budget-icon">+</span>
				<span><strong>Create Budget</strong><small>Set up a new budget or plan your spending</small></span>
				<span className="overview-arrow">›</span>
			</button>

			<header className="categories-heading"><h2>Categories</h2><span>Spent/Limit</span></header>
			<section className="overview-categories">
				{categories.map(([name, amount, percentage, color]) => (
					<article className="overview-category" key={name}>
						<header><strong>{name}</strong><span>{amount}</span></header>
						<div className={`overview-bar ${color}`}><span style={{ width: percentage }} /></div>
						<small>{percentage}</small>
					</article>
				))}
			</section>
		</main>
	)
}

export default BudgetOverviewScreen