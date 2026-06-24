import Header from '../components/layout/Header';
import Home from '../pages/home';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
    </div>
  );
}
