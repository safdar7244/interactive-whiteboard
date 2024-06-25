import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-full w-full flex flex-colitems-center justify-center">
      <Image
        className="animate-pulse duration-700"
        src="/logo.svg"
        alt="Logo"
        width={120}
        height={120}
      />
    </div>
  );
}
