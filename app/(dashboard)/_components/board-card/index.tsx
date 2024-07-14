"use client";
import Link from "next/link";
import Image from "next/image";
import BoardCardOverlay from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
  board: {
    title: string;
    orgId: string;
    authorId: string;
    authorName: string;
    imageUrl: string;
    _id: string;
    _creationTime: number;
  };
  isFavorite: string | undefined | null;
}
export default function BoardCard({ board, isFavorite }: BoardCardProps) {
  const { userId } = useAuth();
  const authorLabel = userId == board.authorId ? "You" : board.authorName;
  const createdAtLabel = formatDistanceToNow(board._creationTime, {
    addSuffix: true,
  });

  return (
    <Link href={`/boards/${board._id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col shadow-md justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-100">
          <Image
            src={board.imageUrl}
            alt={board.title}
            fill
            className="object-fit"
          />
          <BoardCardOverlay />
        </div>

        <Footer
          isFavorite={isFavorite}
          title={board.title}
          authorLabel={authorLabel}
          createdAt={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
