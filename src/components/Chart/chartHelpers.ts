// Utility helpers for Chart component

export function getSafe<T>(fn: () => T, fallback: T): T {
	try {
		const result = fn();
		return result ?? fallback;
	} catch {
		return fallback;
	}
}

export function getPrimaryValue(dataSeries: any[]): any {
	return getSafe(() => dataSeries[0]?.data?.[0]?.value, 0);
}

export function getPrimaryLabel(dataSeries: any[]): string {
	return getSafe(() => dataSeries[0]?.label, '');
}

export function getPrimaryDelta(dataSeries: any[]): number {
	return getSafe(() => dataSeries[0]?.data?.[0]?.delta, 0);
}

export function getPrimaryStatus(
	dataSeries: any[]
): string {
	return getSafe(
		() => dataSeries[0]?.data?.[0]?.status,
		'unknown'
	);
}

export function getLeaderboardEntries(
	dataSeries: any[]
): any[] {
	return getSafe(() => dataSeries[0]?.data, []);
}
