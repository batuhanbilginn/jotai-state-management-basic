"use client";
import { TileI } from "@/app/tiles/page";
import { useState } from "react";
import Tile from "./Tile";

const Tiles = () => {
  const [tiles, setter] = useState<TileI[]>([
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
  return (
    <div>
      <h1 className="mb-4 text-lg text-neutral-500">
        useState (Regular React Hook)
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {tiles.map((tile) => (
          <Tile setter={setter} key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default Tiles;
