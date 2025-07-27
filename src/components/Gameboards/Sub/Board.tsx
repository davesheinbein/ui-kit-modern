import React from 'react';
import SquareGridBoard from './SquareGridBoard';
import RectangularGridBoard from './RectangularGridBoard';
import HexGridBoard from './HexGridBoard';
import TriangularGridBoard from './TriangularGridBoard';
import IsometricGridBoard from './IsometricGridBoard';
import BlockedTerrainGridBoard from './BlockedTerrainGridBoard';
import TeleportationZoneGridBoard from './TeleportationZoneGridBoard';
import ElevationGridBoard from './ElevationGridBoard';
import MultiZoneGridBoard from './MultiZoneGridBoard';
import RotatingSquareGridBoard from './RotatingSquareGridBoard';
import ModularSquareTileGridBoard from './ModularSquareTileGridBoard';
import ModularHexTileBoard from './ModularHexTileBoard';
import FogOfWarGridBoard from './FogOfWarGridBoard';
import SlidingGridBoard from './SlidingGridBoard';
import LayeredGridBoard from './LayeredGridBoard';
import RandomTerrainGridBoard from './RandomTerrainGridBoard';
import ExpandingGridBoard from './ExpandingGridBoard';
import HiddenTileFlipBoard from './HiddenTileFlipBoard';
import CircularGridBoard from './CircularGridBoard';
import SpiralGridBoard from './SpiralGridBoard';
// Path-based, territory/map, abstract, tile/card, themed, hybrid boards (stubs for now)
// You can import and implement these as needed

export interface BoardProps {
	boardType: string;
	boardProps?: Record<string, any>;
}

const Board: React.FC<BoardProps> = ({
	boardType,
	boardProps = {},
}) => {
	switch (boardType) {
		case 'square-grid':
			return <SquareGridBoard {...boardProps} />;
		case 'rectangular-grid':
			return <RectangularGridBoard {...boardProps} />;
		case 'hex-grid':
			return <HexGridBoard {...boardProps} />;
		case 'triangular-grid':
			return <TriangularGridBoard {...boardProps} />;
		case 'isometric-grid':
			return <IsometricGridBoard {...boardProps} />;
		case 'blocked-terrain-grid':
			return <BlockedTerrainGridBoard {...boardProps} />;
		case 'teleportation-zone-grid':
			return <TeleportationZoneGridBoard {...boardProps} />;
		case 'elevation-grid':
			return <ElevationGridBoard {...boardProps} />;
		case 'multi-zone-grid':
			return <MultiZoneGridBoard {...boardProps} />;
		case 'rotating-square-grid':
			return <RotatingSquareGridBoard {...boardProps} />;
		case 'modular-square-tile-grid':
			return <ModularSquareTileGridBoard {...boardProps} />;
		case 'modular-hex-tile-board':
			return <ModularHexTileBoard {...boardProps} />;
		case 'fog-of-war-grid':
			return <FogOfWarGridBoard {...boardProps} />;
		case 'sliding-grid':
			return <SlidingGridBoard {...boardProps} />;
		case 'layered-grid':
			return <LayeredGridBoard {...boardProps} />;
		case 'random-terrain-grid':
			return <RandomTerrainGridBoard {...boardProps} />;
		case 'expanding-grid':
			return <ExpandingGridBoard {...boardProps} />;
		case 'hidden-tile-flip-grid':
			return <HiddenTileFlipBoard {...boardProps} />;
		case 'circular-grid':
			return <CircularGridBoard {...boardProps} />;
		case 'spiral-grid':
			return <SpiralGridBoard {...boardProps} />;
		// Add more cases for additional board types as needed
		default:
			return (
				<div
					style={{
						padding: 24,
						color: 'red',
						textAlign: 'center',
					}}
				>
					Unknown board type: <b>{boardType}</b>
				</div>
			);
	}
};

export default Board;
