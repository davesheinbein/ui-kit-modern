import React, { useState } from 'react';
import ButtonDemo from './components/button/page';
import FooterDemo from './components/footer/page';
import {
	Button,
	UnifiedButton,
} from '../../src/components/Button';
import '../../src/styles/globals.css';

type DemoType = 'button' | 'footer';

export default function PlaygroundApp() {
	const [currentDemo, setCurrentDemo] =
		useState<DemoType>('footer');

	const demos = {
		button: {
			component: <ButtonDemo />,
			title: 'Button Component',
		},
		footer: {
			component: <FooterDemo />,
			title: 'Footer Component',
		},
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Navigation */}
			<nav className='bg-white shadow-sm border-b p-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='flex items-center justify-between mb-4'>
						<h1 className='text-2xl font-bold text-gray-900'>
							UI Kit Playground
						</h1>
						<div className='text-sm text-gray-600'>
							Interactive demos of our UI components
						</div>
					</div>
					{/* <div className='flex gap-4'>
						{Object.entries(demos).map(([key, demo]) => (
							<Button
								key={key}
								label={demo.title}
								onClick={() =>
									setCurrentDemo(key as DemoType)
								}
								className={`${
									currentDemo === key ?
										'bg-blue-600 text-white'
									:	'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							/>
						))}
					</div> */}
					<UnifiedButton />
				</div>
			</nav>

			{/* Demo Content */}
			{/* <div className='demo-content'>
				{demos[currentDemo].component}
			</div> */}
		</div>
	);
}
