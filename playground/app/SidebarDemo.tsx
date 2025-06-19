import React, { useState } from 'react';
import {
	UnifiedSidebar,
	FriendsSidebar,
	S,
	SidebarPresets,
	SidebarFactory,
} from '../../src/components/Sidebar';
import '../../src/styles/globals.css';

function SidebarDemo() {
	const [openSidebars, setOpenSidebars] = useState<{
		[key: string]: boolean;
	}>({});

	const toggleSidebar = (key: string) => {
		setOpenSidebars((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const closeSidebar = (key: string) => {
		setOpenSidebars((prev) => ({ ...prev, [key]: false }));
	};

	return (
		<div
			style={{
				padding: '20px',
				fontFamily: 'Arial, sans-serif',
			}}
		>
			<h1>DRY Sidebar System Demo</h1>
			<p>
				This demo shows the new DRY (Don't Repeat Yourself)
				sidebar system in action.
			</p>

			<div
				style={{
					display: 'grid',
					gap: '10px',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(200px, 1fr))',
					marginBottom: '20px',
				}}
			>
				<button
					onClick={() => toggleSidebar('legacy')}
					style={{
						padding: '12px',
						background: '#3b82f6',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
					}}
				>
					Legacy FriendsSidebar
				</button>
				<button
					onClick={() => toggleSidebar('unified')}
					style={{
						padding: '12px',
						background: '#10b981',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
					}}
				>
					UnifiedSidebar
				</button>
				<button
					onClick={() => toggleSidebar('ultra-dry')}
					style={{
						padding: '12px',
						background: '#f59e0b',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
					}}
				>
					Ultra-DRY S()
				</button>
				<button
					onClick={() => toggleSidebar('preset')}
					style={{
						padding: '12px',
						background: '#8b5cf6',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
					}}
				>
					Preset Function
				</button>
				<button
					onClick={() => toggleSidebar('factory')}
					style={{
						padding: '12px',
						background: '#ef4444',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
					}}
				>
					Factory Method
				</button>
				<button
					onClick={() => toggleSidebar('compact')}
					style={{
						padding: '12px',
						background: '#06b6d4',
						color: 'white',
						border: 'none',
						borderRadius: '6px',
					}}
				>
					Compact Sidebar
				</button>
			</div>

			{/* Legacy FriendsSidebar */}
			<FriendsSidebar
				open={openSidebars['legacy'] || false}
				onClose={() => closeSidebar('legacy')}
			>
				<div style={{ padding: '20px' }}>
					<h3>Legacy FriendsSidebar</h3>
					<p>
						This uses the original FriendsSidebar API but
						the new DRY system under the hood.
					</p>
					<ul>
						<li>Backward compatible</li>
						<li>Same API</li>
						<li>DRY system internally</li>
					</ul>
				</div>
			</FriendsSidebar>

			{/* UnifiedSidebar */}
			<UnifiedSidebar
				kind='friends'
				open={openSidebars['unified'] || false}
				onClose={() => closeSidebar('unified')}
				title='Unified Sidebar'
			>
				<div style={{ padding: '20px' }}>
					<h3>UnifiedSidebar</h3>
					<p>
						Modern DRY approach with explicit kind prop.
					</p>
					<ul>
						<li>Explicit configuration</li>
						<li>50+ variants available</li>
						<li>Full feature set</li>
					</ul>
				</div>
			</UnifiedSidebar>

			{/* Ultra-DRY S() */}
			{S('friends-expanded', {
				open: openSidebars['ultra-dry'] || false,
				onClose: () => closeSidebar('ultra-dry'),
				title: 'Ultra-DRY S()',
				children: (
					<div style={{ padding: '20px' }}>
						<h3>Ultra-DRY Syntax</h3>
						<p>
							Shortest possible way to create sidebars:
							S('friends-expanded', props)
						</p>
						<ul>
							<li>Minimal code</li>
							<li>Maximum reusability</li>
							<li>Type-safe</li>
						</ul>
					</div>
				),
			})}

			{/* Preset function */}
			{SidebarPresets.Friends({
				open: openSidebars['preset'] || false,
				onClose: () => closeSidebar('preset'),
				title: 'Preset Function',
				children: (
					<div style={{ padding: '20px' }}>
						<h3>SidebarPresets.Friends()</h3>
						<p>
							Pre-configured function for common use cases.
						</p>
						<ul>
							<li>Predefined settings</li>
							<li>Semantic naming</li>
							<li>Quick setup</li>
						</ul>
					</div>
				),
			})}

			{/* Factory method */}
			{SidebarFactory.create('settings', {
				open: openSidebars['factory'] || false,
				onClose: () => closeSidebar('factory'),
				title: 'Factory Method',
				children: (
					<div style={{ padding: '20px' }}>
						<h3>SidebarFactory.create()</h3>
						<p>
							Explicit factory pattern for programmatic
							creation.
						</p>
						<ul>
							<li>Factory pattern</li>
							<li>Runtime configuration</li>
							<li>Programmatic control</li>
						</ul>
					</div>
				),
			})}

			{/* Compact variant */}
			{S('friends-compact', {
				open: openSidebars['compact'] || false,
				onClose: () => closeSidebar('compact'),
				title: 'Compact Sidebar',
				children: (
					<div style={{ padding: '20px' }}>
						<h3>Compact Variant</h3>
						<p>
							Smaller width for mobile or space-constrained
							layouts.
						</p>
						<ul>
							<li>Optimized size</li>
							<li>Mobile friendly</li>
							<li>Space efficient</li>
						</ul>
					</div>
				),
			})}
		</div>
	);
}

export default SidebarDemo;
