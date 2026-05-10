import {
    Card,
    CARD_VARIANTS,
} from "@freelancing/ui";
    
export function CardShowcasePage() {
    return (
      <main className="min-h-screen bg-white p-12">
        <a href="/" className="inline-block text-blue-600 underline">
            Back to Design System
        </a>
  
        <h1>Cards</h1>
        <h3>Elevated card</h3>
        <Card variant={CARD_VARIANTS.ELEVATED}>Elevated card</Card>
        
        <h3>Filled card</h3>
        <Card variant={CARD_VARIANTS.FILLED}>Filled card</Card>
        
        <h3>Outlined card</h3>
        <Card variant={CARD_VARIANTS.OUTLINED}>Outlined card</Card>
        
        <h1>Disabled cards</h1>
        
        <h3>Disabled elevated card</h3>
        <Card variant={CARD_VARIANTS.ELEVATED} disabled>
            Disabled elevated card
        </Card>
        
        <h3>Disabled filled card</h3>
        <Card variant={CARD_VARIANTS.FILLED} disabled>
            Disabled filled card
        </Card>
        
        <h3>Disabled outlined card</h3>
        <Card variant={CARD_VARIANTS.OUTLINED} disabled>
            Disabled outlined card
        </Card>
        
      </main>
    );
}
