import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FooterProps {
  isFavorite: string | undefined | null;
  title: string;
  authorLabel: string;
  createdAt: string;
  onClick: () => void;
  disabled: boolean;
}
export default function Footer({
  isFavorite,
  title,
  authorLabel,
  createdAt,
  onClick,
  disabled,
}: FooterProps) {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px]">{title}</p>

      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate ">
        {authorLabel}, {createdAt}
      </p>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          " opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("h-4 w-4", isFavorite && "text-blue-600 fill-blue-600")}
        />
      </button>
    </div>
  );
}
