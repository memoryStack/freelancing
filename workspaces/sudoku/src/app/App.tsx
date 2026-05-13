import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SudokuGame from '../pages/game';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <SudokuGame />
      </main>
      <Footer />
    </div>
  );
}
