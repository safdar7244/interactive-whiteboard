import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { mutation } from "@/convex/_generated/server";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export default function NewBoardButton({
  orgId,
  disabled,
}: NewBoardButtonProps) {
  const { mutate: create, isLoading } = useApiMutation(api.board.create);

  const onCreateBoard = async () => {
    try {
      await create({
        orgId: orgId,
        title: "My Board",
      });

      toast.success("Board created successfully");
    } catch (error) {
      toast.error("Board creation failed");
    }
  };

  return (
    <button
      disabled={disabled || isLoading}
      onClick={onCreateBoard}
      className={cn(
        "col-span-1 aspect-[100/127] rounded-lg bg-blue-600 hover:bg-blue-900 flex flex-col items-center justify-center py-6",
        (disabled || isLoading) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div></div>
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New Board</p>
    </button>
  );
}
