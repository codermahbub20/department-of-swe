/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { cn } from "../PinCard/utils";

export const Card = React.memo(({ card, index, hovered, setHovered, className }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      className // Apply the dynamically added className for margin-top
    )}
  >
    <img src={card.src} alt={card.title} className="object-cover w-full h-full absolute inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mx-auto md:px-5 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          // Add conditional class for margin-top 40px to cards with index 1 and 3
          className={`${(index === 1 || index === 3) ? "mt-10" : ""}`} // Tailwind's mt-10 equals 40px
        />
      ))}
    </div>
  );
}
