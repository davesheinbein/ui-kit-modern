// Grid-based board configurations for import/use in stories, tests, or board selectors
import SquareGridBoard from './Sub/SquareGridBoard';
import RectangularGridBoard from './Sub/RectangularGridBoard';
import HexGridBoard from './Sub/HexGridBoard';
import IsometricCubeGridBoard from './Sub/IsometricCubeGridBoard';
import TriangularGridBoard from './Sub/TriangularGridBoard';
import CircularGridBoard from './Sub/CircularGridBoard';
import RadialHexGridBoard from './Sub/RadialHexGridBoard';
import WaffleGridBoard from './Sub/WaffleGridBoard';
import SparseGridBoard from './Sub/SparseGridBoard';
import TiledCrossGridBoard from './Sub/TiledCrossGridBoard';
import MultiZoneGridBoard from './Sub/MultiZoneGridBoard';
import RotatingSquareGridBoard from './Sub/RotatingSquareGridBoard';
import SlidingGridBoard from './Sub/SlidingGridBoard';
import TeleportationZoneGridBoard from './Sub/TeleportationZoneGridBoard';
import ExpandingGridBoard from './Sub/ExpandingGridBoard';
import HiddenTileFlipBoard from './Sub/HiddenTileFlipBoard';
import RandomTerrainGridBoard from './Sub/RandomTerrainGridBoard';
import SpiralGridBoard from './Sub/SpiralGridBoard';
import StaticSquareGridBoard from './Sub/StaticSquareGridBoard';
import TeleportingGridTilesBoard from './Sub/TeleportingGridTilesBoard';
import NonSquareGridBoard from './Sub/NonSquareGridBoard';

export const GRID_BASED_BOARDS = {
	SquareGridBoard,
	RectangularGridBoard,
	HexGridBoard,
	IsometricCubeGridBoard,
	TriangularGridBoard,
	CircularGridBoard,
	RadialHexGridBoard,
	WaffleGridBoard,
	SparseGridBoard,
	TiledCrossGridBoard,
	MultiZoneGridBoard,
	RotatingSquareGridBoard,
	SlidingGridBoard,
	TeleportationZoneGridBoard,
	ExpandingGridBoard,
	HiddenTileFlipBoard,
	RandomTerrainGridBoard,
	SpiralGridBoard,
	StaticSquareGridBoard,
	TeleportingGridTilesBoard,
	NonSquareGridBoard,
};

// Optionally, export as array for iteration
export const GRID_BASED_BOARD_LIST = Object.values(
	GRID_BASED_BOARDS
);
