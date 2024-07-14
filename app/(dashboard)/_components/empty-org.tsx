import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

function EmptyOrg() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-3 text-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        className="h-24 w-24"
        width={120}
        height={120}
      />
      <h1 className="text-2xl font-semibold">Quick Stetch</h1>
      Welcome to Quick Stetch, a simple and intuitive whiteboarding tool for
      teams.
      <br />
      <br />
      <p className="text-sm">
        To get started, create a new organization and invite your team members.
        Once you are ready, you can start collasborating on boards and tasks.
      </p>
      <div className="mt-6 w-full">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[450px]">
            <CreateOrganization routing="hash" />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default EmptyOrg;
