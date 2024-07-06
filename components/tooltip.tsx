import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "./ui/tooltip";

export interface TooltipProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}

export default function ToolTip({
  label,
  children,
  side = "top",
  align = "center",
  sideOffset = 5,
  alignOffset = 5,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="bg-black text-white border-black p-2 rounded-md shadow-lg"
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          align={align}
          side={side}
        >
          <p className="font-semibold capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
