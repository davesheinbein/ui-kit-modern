import Chart from './Chart';
export type { ChartProps } from './Chart';
export * from './configurations';
export * from './Chart';

// Only export as Charts for consumers
export { Chart as Charts };
export default Chart;
