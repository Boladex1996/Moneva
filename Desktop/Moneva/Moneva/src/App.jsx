import { useState } from 'react'
import AddExpenseScreen from './AddExpenseScreen'
import BudgetOverviewScreen from './BudgetOverviewScreen'
import HomeScreen from './HomeScreen'
import MonevaSplash from './MonevaSplash'
import MoreScreen from './MoreScreen'
import OnboardingScreen from './OnboardingScreen'
import ProfileScreen from './ProfileScreen'
import SavingsOnboarding from './SavingsOnboarding'
import SavingsScreen from './SavingsScreen'
import SignupScreen from './SignupScreen'
import './App.css'

function App() {
  const [screen, setScreen] = useState('splash')

  if (screen === 'splash') return <MonevaSplash onContinue={() => setScreen('onboarding')} />
  if (screen === 'onboarding') return <OnboardingScreen onNext={() => setScreen('savings-onboarding')} />
  if (screen === 'savings-onboarding') return <SavingsOnboarding onGetStarted={() => setScreen('signup')} />
  if (screen === 'signup') return <SignupScreen onSignedUp={() => setScreen('home')} />
  if (screen === 'expense') return <AddExpenseScreen onBack={() => setScreen('home')} onSaved={() => setScreen('home')} />
  if (screen === 'budget') return <BudgetOverviewScreen onNavigate={setScreen} />
  if (screen === 'savings') return <SavingsScreen onNavigate={setScreen} />
  if (screen === 'more') return <MoreScreen onNavigate={setScreen} onProfile={() => setScreen('profile')} />
  if (screen === 'profile') return <ProfileScreen onBack={() => setScreen('more')} />

  return <HomeScreen onAddExpense={() => setScreen('expense')} onNavigate={setScreen} />
}

export default App
