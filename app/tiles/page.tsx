import Tiles from "@/components/tiles/Tiles";
import TilesWithAtom from "@/components/tilesWithAtom/Tiles";

export interface TileI {
  id: number;
  color: string;
  isSelected: boolean;
}

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-20">
      {/* Container */}
      <Tiles />
      <TilesWithAtom />
    </div>
  );
};

export default Page;
