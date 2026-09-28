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
import LoginScreen from './LoginScreen'
import './App.css'

function App() {
  const [history, setHistory] = useState({ stack: ['splash'], index: 0 })

  const screen = history.stack[history.index]

  const navigateTo = (nextScreen) => {
    setHistory((current) => {
      if (current.stack[current.index] === nextScreen) return current

      const stack = current.stack.slice(0, current.index + 1)
      return {
        stack: [...stack, nextScreen],
        index: stack.length,
      }
    })
  }

  const goBack = () => {
    setHistory((current) => (current.index > 0 ? { ...current, index: current.index - 1 } : current))
  }

  const goForward = () => {
    setHistory((current) =>
      current.index < current.stack.length - 1 ? { ...current, index: current.index + 1 } : current,
    )
  }

  if (screen === 'splash') return <MonevaSplash onContinue={() => navigateTo('onboarding')} />
  if (screen === 'onboarding') return <OnboardingScreen onNext={() => navigateTo('savings-onboarding')} />
  if (screen === 'savings-onboarding') return <SavingsOnboarding onGetStarted={() => navigateTo('signup')} />
  if (screen === 'signup') return <SignupScreen onSignedUp={() => navigateTo('login')} onGoToLogin={() => navigateTo('login')} />
  if (screen === 'login') return <LoginScreen onLogin={() => navigateTo('home')} onGoToSignup={() => navigateTo('signup')} />
  if (screen === 'expense') return <AddExpenseScreen onBack={() => navigateTo('home')} onSaved={() => navigateTo('home')} />
  if (screen === 'budget') return <BudgetOverviewScreen onNavigate={navigateTo} />
  if (screen === 'savings') return <SavingsScreen onNavigate={navigateTo} />
  if (screen === 'more') return <MoreScreen onNavigate={navigateTo} onProfile={() => navigateTo('profile')} />
  if (screen === 'profile') return <ProfileScreen onBack={() => navigateTo('more')} />

  return <HomeScreen onAddExpense={() => navigateTo('expense')} onNavigate={navigateTo} />
}

export default App
