import { TileI } from "@/app/tiles/page";
import { PrimitiveAtom, useAtom } from "jotai";

const Tile = ({ atom }: { atom: PrimitiveAtom<TileI> }) => {
  const [tile, setter] = useAtom(atom);
  return (
    <div
      onClick={() => {
        setter((prev) => {
          return {
            ...prev,
            isSelected: !prev.isSelected,
          };
        });
      }}
      style={{
        backgroundColor: tile.isSelected ? tile.color + "40" : "transparent",
        color: tile.isSelected ? tile.color : "inherit",
        borderColor: tile.isSelected ? tile.color + "40" : "#e5e5e5",
      }}
      className="flex items-center justify-center w-16 h-16 text-2xl font-medium border cursor-pointer border-neutral-200"
    >
      {tile.id}
    </div>
  );
};

export default Tile;
