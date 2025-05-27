export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="border-border bg-secondary-background text-foreground font-base relative flex w-full overflow-x-hidden border-t-2 border-b-2">
      <div className="animate-marquee py-12 whitespace-nowrap">
        {items.map((item, index) => {
          return (
            <span key={index} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>

      <div className="animate-marquee2 absolute top-0 py-12 whitespace-nowrap">
        {items.map((item, index) => {
          return (
            <span key={index} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
