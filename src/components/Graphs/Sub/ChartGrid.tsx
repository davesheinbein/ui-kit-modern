import React from 'react';
import { CartesianGrid } from 'recharts';

interface ChartGridProps {
	showGrid?: boolean;
}

const ChartGrid: React.FC<ChartGridProps> = ({
	showGrid,
}) =>
	showGrid ? <CartesianGrid strokeDasharray='3 3' /> : null;

export default ChartGrid;
