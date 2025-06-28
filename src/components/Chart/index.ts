import Chart, { ChartProps } from './Chart';
export type { ChartProps };
export * from './configurations';
export * from './Chart';

// Alias Chart as Charts for a single entry point
export const Charts = Chart;
export default Charts;
