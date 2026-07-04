import Image from "next/image";
import Link from "next/link";

interface ChatProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

export default function ChatProductCard({ id, name, imageUrl }: ChatProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex w-28 flex-col items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm transition hover:border-neutral-950 hover:shadow-md">
        <div className="relative h-20 w-full overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <span className="w-full text-center text-xs font-medium leading-tight text-neutral-950 line-clamp-2">
          {name}
        </span>
      </div>
    </Link>
  );
}
