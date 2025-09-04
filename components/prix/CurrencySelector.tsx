import React from "react";

type Currency = "EUR" | "USD" | "CAD" | "CHF" | "AUD" | "GBP";

type Props = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencySelector: React.FC<Props> = ({ currency, setCurrency }) => {
  return (
    <div className="relative mt-5 flex justify-center"> {/* Augmentation du gap ici */}
      <select
  value={currency}
  onChange={(e) => setCurrency(e.target.value as Currency)}
  className="appearance-none border-2 border-orange-500 text-black dark:text-black text-sm font-semibold rounded-full px-4 py-1 cursor-pointer transition-all
             hover:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50
             bg-gray-200 dark:bg-white"  
>
  {["EUR", "USD", "CAD", "CHF", "AUD", "GBP"].map((cur) => (
    <option key={cur} value={cur} className="text-black">
      {cur}
    </option>
  ))}
</select>

    </div>
  );
};

export default CurrencySelector;
