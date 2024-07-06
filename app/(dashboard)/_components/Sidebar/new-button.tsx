import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ToolTip from "@/components/tooltip";

export default function NewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <ToolTip label="Create Organization">
            <button
              className="bg-white/25 h-full w-full rounded-md flex items-center justify-center
          opacity-50 hover:opacity-100 transition"
            >
              <Plus className="text-white" />
            </button>
          </ToolTip>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[450px]">
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
}
