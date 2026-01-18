import { LandingPage } from './pages/LandingPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <LandingPage />
    </AuthProvider>
  );
}

export default App;
