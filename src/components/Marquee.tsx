const items = [
  "TWO GUYS MEDIA",
  "SEB & TOBI",
  "RESTAURANTS",
  "BIKE SHOPS",
  "RETAIL",
  "STREET TRIVIA",
  "PRODUCT DEMOS",
  "WHISTLER BC",
  "FANATYK CO",
  "CHUBBY DUCKS",
  "FAT TONY'S",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-4 border-yellow bg-yellow py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 font-display text-2xl sm:text-3xl tracking-wider text-ink"
          >
            {item}
            <span className="mx-6 text-ink/30">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
