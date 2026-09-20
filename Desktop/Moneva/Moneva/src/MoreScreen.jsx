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

const settingsRows = [
	['↗', 'Financial Insight'],
	['♧', 'Notifications'],
	['▣', 'Enable fingerprint/ Face ID'],
	['♙', 'Profile'],
]

const accountRows = [
	['⚙', 'Settings'],
	['?', 'Help & Support'],
	['⇥', 'Log Out'],
]

function MoreRow({ icon, label }) {
	return (
		<button className="more-row" type="button">
			<span className="more-row-icon" aria-hidden="true">{icon}</span>
			<strong>{label}</strong>
			<span className="more-row-arrow" aria-hidden="true">›</span>
		</button>
	)
}

function MoreScreen() {
	return (
		<main className="more-screen">
			<header className="more-header">
				<div>
					<h1>More</h1>
					<p>Manage your account and preferences.</p>
				</div>
				<button className="notification-button" type="button" aria-label="Notifications"><BellIcon /></button>
			</header>

			<button className="more-profile" type="button">
				<div className="more-avatar">MB</div>
				<div><strong>Mercy</strong><span>Adeogomercy@gmail.com</span></div>
				<span className="more-row-arrow" aria-hidden="true">›</span>
			</button>

			<section className="more-group" aria-label="Account tools">
				{settingsRows.map(([icon, label]) => <MoreRow key={label} icon={icon} label={label} />)}
			</section>
			<section className="more-group" aria-label="Account settings">
				{accountRows.map(([icon, label]) => <MoreRow key={label} icon={icon} label={label} />)}
			</section>

			<nav className="dashboard-nav more-nav" aria-label="Main navigation">
				<a className="nav-item" href="#home"><HomeIcon /><span>Home</span></a>
				<a className="nav-item" href="#budget"><BudgetIcon /><span>Budget</span></a>
				<button className="add-button" type="button" aria-label="Add transaction">+</button>
				<a className="nav-item" href="#savings"><SavingsIcon /><span>Savings</span></a>
				<a className="nav-item active" href="#more"><span className="more-icon">•••</span><span>More</span></a>
			</nav>
		</main>
	)
}

export default MoreScreen