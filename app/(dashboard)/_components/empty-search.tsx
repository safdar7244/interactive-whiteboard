import Image from "next/image";
function EmptySearch() {
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
        No results found. Please try another search term.
      </h2>
    </div>
  );
}

export default EmptySearch;
