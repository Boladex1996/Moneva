import { useState } from 'react'
import AddExpenseScreen from './AddExpenseScreen'
import HomeScreen from './HomeScreen'
import MonevaSplash from './MonevaSplash'
import OnboardingScreen from './OnboardingScreen'
import SavingsOnboarding from './SavingsOnboarding'
import SignupScreen from './SignupScreen'
import './App.css'

function App() {
  const [screen, setScreen] = useState('splash')

  if (screen === 'splash') return <MonevaSplash onContinue={() => setScreen('onboarding')} />
  if (screen === 'onboarding') return <OnboardingScreen onNext={() => setScreen('savings-onboarding')} />
  if (screen === 'savings-onboarding') return <SavingsOnboarding onGetStarted={() => setScreen('signup')} />
  if (screen === 'signup') return <SignupScreen onSignedUp={() => setScreen('home')} />
  if (screen === 'expense') return <AddExpenseScreen onBack={() => setScreen('home')} onSaved={() => setScreen('home')} />

  return <HomeScreen onAddExpense={() => setScreen('expense')} />
}

export default App
