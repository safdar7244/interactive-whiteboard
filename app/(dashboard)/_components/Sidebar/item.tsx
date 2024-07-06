"use client";
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import ToolTip from "@/components/tooltip";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export default function Item({ id, name, imageUrl }: ItemProps) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    debugger;
    if (!setActive) return;
    (setActive as any)({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <ToolTip label={name} side="right">
        <Image
          className={cn(
            "rounded-md cursor-pointer opacity-50 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
          src={imageUrl}
          alt={name}
          fill
          onClick={onClick}
        />
      </ToolTip>
      <div className="hidden lg:flex lg:flex-1"></div>
    </div>
  );
}
