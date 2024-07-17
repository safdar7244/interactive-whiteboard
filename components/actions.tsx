"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { Link2, Pencil } from "lucide-react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import ConfirmDialog from "@/components/confirm-dialog";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export default function Actions({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) {
  const { onOpen } = useRenameModal();

  const { mutate: deleteBoard, isLoading } = useApiMutation(
    api.board.deleteBoard
  );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/boards/${id}`
      );
      toast.success("Copied Board Link");
    } catch (error) {
      toast.error("Failed to copy Board Link");
    }
  };

  const onDeleteBoard = async () => {
    try {
      await deleteBoard({ id });
      toast.success("Board deleted successfully");
    } catch (error) {
      toast.error("Failed to delete Board");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className="w-50 z-50"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <DropdownMenuItem
          className=" flex flex-1 justify-center place-items-center p-3 cursor-pointer bg-white hover:bg-blue-300"
          onClick={copyLink}
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>

        <DropdownMenuItem
          className=" flex flex-1 justify-center place-items-center p-3 cursor-pointer bg-white hover:bg-blue-300"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename Board
        </DropdownMenuItem>

        <ConfirmDialog
          title="Delete Board"
          description="Are you sure you want to delete this board?"
          onConfirm={onDeleteBoard}
          disabled={isLoading}
        >
          <Button
            variant={"ghost"}
            className="w-full text-sm font-normal justify-start p-3 cursor-pointer rounded-none bg-white  hover:bg-blue-300"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
