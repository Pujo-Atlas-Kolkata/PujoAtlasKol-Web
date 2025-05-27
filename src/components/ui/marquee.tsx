import Image from "next/image";

export default function Marquee({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  return (
    <div className="border-border bg-secondary-background text-foreground font-base relative flex w-full overflow-x-hidden border-t-2 border-b-2">
      <div className="animate-marquee py-8 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="mx-8 inline-flex items-center">
            <Image
              src={item.src}
              alt={item.alt}
              className="h-12 w-36 object-contain"
              priority={true}
              draggable="false"
              width={100}
              height={100}
            />
          </span>
        ))}
      </div>

      <div className="animate-marquee2 absolute top-0 py-8 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="mx-8 inline-flex items-center">
            <Image
              src={item.src}
              alt={item.alt}
              className="h-12 w-36 object-contain"
              priority={true}
              draggable="false"
              width={100}
              height={100}
            />
          </span>
        ))}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
