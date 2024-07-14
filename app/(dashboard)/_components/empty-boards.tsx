"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

function EmptyBoards() {
  const { organization } = useOrganization();
  const { mutate: create, isLoading } = useApiMutation(api.board.create);

  const onCreateBoard = async () => {
    try {
      await create({
        orgId: organization?.id!,
        title: "My Board",
      });

      toast.success("Board created successfully");
    } catch (error) {
      toast.error("Board creation failed");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-3 text-center">
      {/* <Image
        src="/logo.svg"
        alt="Logo"
        className="h-24 w-24"
        width={120}
        height={120}
      /> */}

      <h2 className="text-2xl font-semibold">
        Create a new board to get started.
      </h2>
      <p>
        Start by creating a new board and adding tasks to it. You can also
        collaborate with others by inviting them to the board.
      </p>

      <div className="mt-6">
        <Button disabled={isLoading} onClick={onCreateBoard} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
}

export default EmptyBoards;
