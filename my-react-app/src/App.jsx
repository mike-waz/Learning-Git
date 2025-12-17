import { Header, Footer, PasswordGate } from './components';
import {
  Hero,
  Section1StrategicContext,
  Section2TheSystem,
  Section3ForceMultiplication,
  Section4OperationalTransformation,
  Section5HowItWorks,
  Section6Implementation,
} from './components/sections';
import './App.css';

function App() {
  return (
    <PasswordGate>
      <div className="app">
        <Header />
        <main className="main-content">
          <Hero />
          <Section1StrategicContext />
          <Section2TheSystem />
          <Section3ForceMultiplication />
          <Section4OperationalTransformation />
          <Section5HowItWorks />
          <Section6Implementation />
        </main>
        <Footer />
      </div>
    </PasswordGate>
  );
}

export default App;
