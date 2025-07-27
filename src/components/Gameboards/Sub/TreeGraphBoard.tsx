import React from 'react';

export interface TreeNode {
	id: string;
	label?: string;
	children?: TreeNode[];
}

export interface TreeGraphBoardProps {
	root?: TreeNode;
	nodes?: Array<{ id: string | number; label?: string }>;
	edges?: Array<[string | number, string | number]>;
	orientation?: 'vertical' | 'horizontal';
	nodeRenderer?: (node: TreeNode) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const NODE_RADIUS = 18;
const SVG_SIZE = 400;

const TreeGraphBoard: React.FC<TreeGraphBoardProps> = (
	props
) => {
	// Support both root (advanced) and nodes/edges (simple)
	const {
		root,
		nodes,
		edges,
		orientation = 'vertical',
		nodeRenderer,
		className = '',
		style = {},
	} = props;

	// If nodes/edges provided, build a root node
	let treeRoot: TreeNode | undefined = root;
	if (!treeRoot && nodes && edges) {
		// All ids as strings
		const nodeMap: { [id: string]: TreeNode } =
			Object.fromEntries(
				nodes.map((n) => [
					String(n.id),
					{
						id: String(n.id),
						label: n.label,
						children: [],
					},
				])
			);
		const childIds = new Set(
			edges.map((e) => String(e[1]))
		);
		const rootCandidates = nodes.filter(
			(n) => !childIds.has(String(n.id))
		);
		const rootNode = rootCandidates[0] || nodes[0];
		// Build children
		edges.forEach(([from, to]) => {
			const fromId = String(from);
			const toId = String(to);
			if (nodeMap[fromId] && nodeMap[toId]) {
				nodeMap[fromId].children =
					nodeMap[fromId].children || [];
				(nodeMap[fromId].children as TreeNode[]).push(
					nodeMap[toId]
				);
			}
		});
		treeRoot = nodeMap[String(rootNode.id)];
	}
	if (!treeRoot) {
		return (
			<div
				className={'tree-graph-board ' + className}
				style={style}
			>
				No tree data
			</div>
		);
	}

	// Layout: simple vertical tree, assign x/y by depth and order
	let positions: {
		[id: string]: { x: number; y: number };
	} = {};
	let maxDepth = 0;
	let leafCount = 0;
	function layout(
		node: TreeNode,
		depth: number,
		xStart: number,
		xEnd: number
	) {
		maxDepth = Math.max(maxDepth, depth);
		if (!node.children || node.children.length === 0) {
			const x = (xStart + xEnd) / 2;
			const y = 60 + depth * 80;
			positions[node.id] = { x, y };
			leafCount++;
			return x;
		}
		const n = node.children.length;
		const childWidth = (xEnd - xStart) / n;
		let childCenters: number[] = [];
		node.children.forEach((child, i) => {
			const c = layout(
				child,
				depth + 1,
				xStart + i * childWidth,
				xStart + (i + 1) * childWidth
			);
			childCenters.push(c);
		});
		const x = childCenters.reduce((a, b) => a + b, 0) / n;
		const y = 60 + depth * 80;
		positions[node.id] = { x, y };
		return x;
	}
	layout(treeRoot, 0, 60, SVG_SIZE - 60);

	// Render tree as SVG
	function renderNode(node: TreeNode) {
		const pos = positions[node.id];
		return (
			<g key={node.id}>
				{/* Edges */}
				{node.children &&
					node.children.map((child) => (
						<line
							key={node.id + '-' + child.id}
							x1={pos.x}
							y1={pos.y}
							x2={positions[child.id].x}
							y2={positions[child.id].y}
							stroke='#94a3b8'
							strokeWidth={3}
						/>
					))}
				{/* Node */}
				<circle
					cx={pos.x}
					cy={pos.y}
					r={NODE_RADIUS}
					fill='#fff'
					stroke='#2563eb'
					strokeWidth={3}
				/>
				<text
					x={pos.x}
					y={pos.y + 5}
					textAnchor='middle'
					fontSize={16}
					fill='#2563eb'
				>
					{node.label || node.id}
				</text>
				{/* Children */}
				{node.children && node.children.map(renderNode)}
			</g>
		);
	}

	return (
		<svg
			width={SVG_SIZE}
			height={SVG_SIZE}
			className={'tree-graph-board ' + className}
			style={style}
			viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
			role='img'
			aria-label='Tree Graph'
		>
			{renderNode(treeRoot)}
		</svg>
	);
};

export default TreeGraphBoard;
