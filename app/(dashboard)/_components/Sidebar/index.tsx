import List from "./list";
import NewButton from "./new-button";

export default function Sidebar() {
  return (
    <aside className="fixed z-1 left-0 bg-blue-900 w-[60px] h-full flex flex-col p-3 gap-y-4 text-white">
      <NewButton />
      <List />
    </aside>
  );
}
