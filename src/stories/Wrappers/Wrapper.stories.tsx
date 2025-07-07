import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';
import { Wrapper } from '../../components/Wrappers';
import type { WrapperProps } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';
import { wrapperArgTypes } from '../config/argTypes';
import * as mocks from '../mocks';

const meta: Meta<typeof Wrapper> = {
	title: 'Wrappers/Wrapper',
	component: Wrapper,
	decorators: commonDecorators,
	tags: ['autodocs'],
	argTypes: wrapperArgTypes,
	parameters: {
		docs: {
			description: {
				component:
					'Flexible, prop-driven wrapper for layout, spacing, and style. All functionality is exposed via props with no hardcoded logic or external CSS dependencies. Supports both abbreviated (p, m, w, h) and full-name (padding, margin, width, height) prop aliases.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

// ========================================
// Basic Wrapper Stories (using mock data)
// ========================================

export const BasicFlex: Story = {
	args: {
		layout: 'flex',
		direction: 'row',
		gap: 16,
		p: 16,
		border: '1px solid #e0e0e0',
		radius: 8,
		bg: '#f5f7fa',
		shadow: '0 2px 8px rgba(0,0,0,0.06)',
		children: mocks.gridWords3x3.slice(0, 3).map((word) => (
			<Wrapper
				key={word}
				p={8}
				bg='#fff'
				border='1px solid #eee'
				radius={6}
			>
				{word}
			</Wrapper>
		)),
	},
};

export const BasicGrid: Story = {
	args: {
		layout: 'grid',
		columns: 3,
		gap: 20,
		p: 20,
		border: '2px solid #90caf9',
		radius: 16,
		bg: '#e3f2fd',
		children: mocks.gridWords3x3.map((word) => (
			<Wrapper
				key={word}
				p={8}
				bg='#fff'
				border='1px solid #eee'
				radius={6}
			>
				{word}
			</Wrapper>
		)),
	},
};

export const ProfileCard: Story = {
	render: () => (
		<Wrapper
			w={320}
			p={24}
			radius={16}
			shadow='0 4px 16px rgba(0,0,0,0.08)'
			bg='#fff'
		>
			<img
				src={mocks.mockProfile.avatar}
				alt={mocks.mockProfile.name}
				style={{ width: 80, borderRadius: '50%' }}
			/>
			<h3 style={{ margin: '12px 0 4px' }}>
				{mocks.mockProfile.name}
			</h3>
			<p style={{ color: '#888', marginBottom: 8 }}>
				{mocks.mockProfile.bio}
			</p>
			<div>
				Level: {mocks.mockProfile.level} | Points:{' '}
				{mocks.mockProfile.points}
			</div>
			<div>
				Achievements: {mocks.mockProfile.achievements}
			</div>
		</Wrapper>
	),
};

export const FriendsList: Story = {
	render: () => (
		<Wrapper
			layout='flex'
			direction='column'
			gap={12}
			p={16}
			radius={12}
			bg='#f9f9f9'
			w={280}
		>
			{mocks.mockFriends.map((friend) => (
				<Wrapper
					key={friend.id}
					layout='flex'
					direction='row'
					gap={8}
					p={8}
					bg='#fff'
					border='1px solid #eee'
					radius={8}
				>
					<img
						src={friend.avatar}
						alt={friend.name}
						style={{
							width: 32,
							height: 32,
							borderRadius: '50%',
						}}
					/>
					<div>
						<div style={{ fontWeight: 500 }}>
							{friend.name}
						</div>
						<div style={{ fontSize: 12, color: '#888' }}>
							{friend.status} • {friend.lastSeen}
						</div>
					</div>
				</Wrapper>
			))}
		</Wrapper>
	),
};

export const AllVariations: Story = {
	render: () => {
		const variations = [
			{
				title: 'Flex Row Centered',
				props: {
					layout: 'flex' as const,
					direction: 'row' as const,
					center: true,
					gap: 16,
					p: 16,
					border: '1px solid #e0e0e0',
					radius: 8,
					bg: '#f5f7fa',
					shadow: '0 2px 8px rgba(0,0,0,0.06)',
				},
			},
			{
				title: 'Flex Column',
				props: {
					layout: 'flex' as const,
					direction: 'column' as const,
					gap: 12,
					p: 12,
					border: '1px dashed #bdbdbd',
					radius: 12,
					bg: '#fffde7',
				},
			},
			{
				title: 'Grid 3 Columns',
				props: {
					layout: 'grid' as const,
					columns: 3,
					gap: 20,
					p: 20,
					border: '2px solid #90caf9',
					radius: 16,
					bg: '#e3f2fd',
				},
			},
			{
				title: 'Grid 2 Rows',
				props: {
					layout: 'grid' as const,
					rows: 2,
					columns: 2,
					gap: 8,
					p: 8,
					border: '1px solid #c8e6c9',
					radius: 6,
					bg: '#f1f8e9',
				},
			},
			{
				title: 'Box with Sizing',
				props: {
					w: 200,
					h: 100,
					p: 16,
					border: '1px solid #ffb300',
					radius: 20,
					bg: '#fff8e1',
					shadow: '0 4px 12px rgba(255,193,7,0.12)',
				},
			},
			{
				title: 'Min/Max Sizing',
				props: {
					minW: 120,
					maxW: 300,
					minH: 60,
					maxH: 120,
					p: 10,
					border: '1px solid #b39ddb',
					radius: 10,
					bg: '#ede7f6',
				},
			},
			{
				title: 'Shadow Only',
				props: {
					p: 24,
					shadow: '0 8px 24px rgba(0,0,0,0.12)',
					bg: '#fff',
				},
			},
		];

		return (
			<div style={{ display: 'grid', gap: 24 }}>
				{variations.map((variation, idx) => (
					<div key={variation.title}>
						<div
							style={{ fontWeight: 600, marginBottom: 8 }}
						>
							{variation.title}
						</div>
						<Wrapper {...variation.props}>
							{mocks.gridWords
								.slice(idx * 3, idx * 3 + 3)
								.join(', ')}
						</Wrapper>
					</div>
				))}
			</div>
		);
	},
};

// ========================================
// End of stories
// ========================================
