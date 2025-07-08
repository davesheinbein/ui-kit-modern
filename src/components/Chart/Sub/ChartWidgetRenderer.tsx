import React, { lazy } from 'react';
import { widgetConfig as staticWidgetConfig } from './ChartWidgetConfig';

export type WidgetType = keyof typeof staticWidgetConfig;

const DeltaWidget = lazy(
	() => import('./widgets/DeltaWidget')
);
const CircularProgressWidget = lazy(
	() => import('./widgets/CircularProgressWidget')
);

// Helper to wrap dynamic widgets in Suspense
function DynamicWidget({
	Widget,
	props,
	fallback,
}: {
	Widget: React.ComponentType<any>;
	props: any;
	fallback: React.ReactNode;
}) {
	return (
		<React.Suspense fallback={fallback}>
			<Widget {...props} />
		</React.Suspense>
	);
}

export function renderWidget(
	type: WidgetType,
	props: any
): React.ReactNode {
	if (type === 'delta') {
		return (
			<DynamicWidget
				Widget={DeltaWidget}
				props={props}
				fallback={<div>Loading delta widget...</div>}
			/>
		);
	}
	if (type === 'circularProgress') {
		return (
			<DynamicWidget
				Widget={CircularProgressWidget}
				props={props}
				fallback={
					<div>Loading circular progress widget...</div>
				}
			/>
		);
	}
	return staticWidgetConfig[type] ?
			staticWidgetConfig[type](props)
		:	staticWidgetConfig['kpi'](props);
}
