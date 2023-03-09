"use client";
import { TileI } from "@/app/tiles/page";
import { atom, useAtomValue } from "jotai";
import { splitAtom } from "jotai/utils";
import Tile from "./Tile";

const tilesAtom = atom<TileI[]>([
  { id: 1, color: "#f87171", isSelected: false },
  { id: 2, color: "#fb923c", isSelected: false },
  { id: 3, color: "#fbbf24", isSelected: false },
  { id: 4, color: "#facc15", isSelected: false },
  { id: 5, color: "#a3e635", isSelected: false },
  { id: 6, color: "#4ade80", isSelected: false },
  { id: 7, color: "#34d399", isSelected: false },
  { id: 8, color: "#2dd4bf", isSelected: false },
  { id: 9, color: "#22d3ee", isSelected: false },
]);

const splittedTilesAtom = splitAtom(tilesAtom);

const TilesWithAtom = () => {
  const tiles = useAtomValue(splittedTilesAtom);
  return (
    <div>
      <h1 className="mb-4 text-lg text-neutral-500">
        Jotai (splitAtom Version)
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {tiles.map((tile) => (
          <Tile atom={tile} key={tile.toString()} />
        ))}
      </div>
    </div>
  );
};

export default TilesWithAtom;
