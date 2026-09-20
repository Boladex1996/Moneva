# Moneva

Moneva is a React and Vite personal finance app with separate screens for onboarding, authentication, dashboard views, budgets, savings, expenses, and profile management.

## Folder Structure

```text
Moneva/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── AddExpenseScreen.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── BudgetOverviewScreen.jsx
│   ├── BudgetScreen.jsx
│   ├── DashboardScreen.jsx
│   ├── HomeScreen.jsx
│   ├── MoreScreen.jsx
│   ├── MonevaSplash.jsx
│   ├── OnboardingScreen.jsx
│   ├── ProfileScreen.jsx
│   ├── SavingsOnboarding.jsx
│   ├── SavingsScreen.jsx
│   ├── SignupScreen.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Screen Components

- `MonevaSplash.jsx` - Moneva brand splash screen.
- `OnboardingScreen.jsx` - onboarding screen introducing money management.
- `SavingsOnboarding.jsx` - savings goals onboarding screen.
- `SignupScreen.jsx` - account registration form.
- `HomeScreen.jsx` - detailed home dashboard with balance, portfolio, categories, and transactions.
- `DashboardScreen.jsx` - dashboard empty state for users with no transactions.
- `AddExpenseScreen.jsx` - form for recording an expense.
- `BudgetScreen.jsx` - empty budgets screen.
- `BudgetOverviewScreen.jsx` - budget summary with category progress cards.
- `SavingsScreen.jsx` - savings summary and savings goal empty state.
- `MoreScreen.jsx` - account settings and preferences screen.
- `ProfileScreen.jsx` - personal profile and account details screen.

`App.jsx` is the application entry component. It currently imports `BudgetOverviewScreen`; change that import and the rendered component to preview another screen.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Technologies

- React 19
- React DOM
- Vite
- ESLint
