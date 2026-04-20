import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { DemoPopup } from '../../components/shared/DemoPopup';
import { useScrollTimer } from '../../hooks/useScrollTimer';
import { DesignSystem } from './components/DesignSystem';

export function HomePage() {
  const { shouldTrigger, setShouldTrigger } = useScrollTimer(3);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <DesignSystem />
      
      <Footer />
      {/* {showPreview && <DemoPopupPreview onSelect={handleVersionSelect} onSkip={handleSkipPreview} />} */}
      <DemoPopup show={shouldTrigger} onClose={() => {}} />
    </div>
  );
}
