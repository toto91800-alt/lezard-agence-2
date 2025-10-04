// src/app/pricing/page.tsx
import Prix from "@/components/prix/prix";
import New_Pricing from "@/components/prix/New_Pricing";
import ContactPrix from "@/components/prix/contactprix";

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full">
      <Prix />
      <div className="mt-0 lg:-mt-30 relative z-[2]">
        <New_Pricing />
        <ContactPrix />
      </div>
    </main>
  );
}
