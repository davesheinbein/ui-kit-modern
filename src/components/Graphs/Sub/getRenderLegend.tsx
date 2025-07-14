export function getRenderLegend(legendRenderer: any) {
	return legendRenderer ?
			(props: any) => legendRenderer(props)
		:	undefined;
}
