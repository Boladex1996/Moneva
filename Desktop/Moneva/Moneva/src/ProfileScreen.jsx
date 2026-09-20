function BellIcon() {
	return <span className="dashboard-bell" aria-hidden="true">♧</span>
}

const profileDetails = [
	['Full Name', 'Adeogo Mercy'],
	['Email Address', 'Adeogomercy@gmail.com'],
	['Phone Number', '+234 803 123 4567'],
	['Occupation', 'Nutritionist'],
	['Linked Bank', 'Gtbank 0592121476'],
	['Location', 'Ibadan, Oyo State'],
]

function ProfileScreen() {
	return (
		<main className="profile-screen">
			<header className="profile-header">
				<button className="profile-back-button" type="button" aria-label="Go back">&#8592;</button>
				<div className="profile-heading">
					<h1>Profile</h1>
					<p>View and manage your personal information</p>
				</div>
				<button className="notification-button" type="button" aria-label="Notifications"><BellIcon /></button>
			</header>

			<section className="profile-summary">
				<div className="profile-photo">AM<span aria-hidden="true">●</span></div>
				<div>
					<h2>Adeogo Mercy</h2>
					<strong>Verified Account ✓</strong>
					<p>Building better habits for a better<br />future.</p>
				</div>
			</section>

			<section className="profile-details" aria-label="Personal information">
				{profileDetails.map(([label, value]) => (
					<div className="profile-detail" key={label}>
						<strong>{label}</strong>
						<span>{value}</span>
					</div>
				))}
			</section>

			<button className="edit-profile-button" type="button">
				<span className="edit-profile-icon" aria-hidden="true">⌕</span>
				<span><strong>Edit Profile</strong><small>Update your personal information</small></span>
				<span className="profile-arrow" aria-hidden="true">›</span>
			</button>
		</main>
	)
}

export default ProfileScreen