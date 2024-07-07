"use client";
import qs from "query-string";
import { Search as IconSeach } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, use, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { query } from "@/convex/_generated/server";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounceValue(search, 500);

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: search,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [search, router]);

  return (
    <div className="w-full relative">
      <IconSeach className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        onChange={hanldeChange}
        className="w-full max-w-[516px] pl-9"
        placeholder="Search"
      />
    </div>
  );
}
