import { TileI } from "@/app/tiles/page";
import { Dispatch, SetStateAction } from "react";

const Tile = ({
  tile,
  setter,
}: {
  tile: TileI;
  setter: Dispatch<SetStateAction<TileI[]>>;
}) => {
  return (
    <div
      onClick={() => {
        setter((prev) => {
          return prev.map((t) => {
            if (t.id === tile.id) {
              return { ...t, isSelected: !t.isSelected };
            } else {
              return t;
            }
          });
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
