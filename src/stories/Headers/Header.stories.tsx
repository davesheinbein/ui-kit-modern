import React from 'react';
import { Header } from '../../components/Header';
import type { Meta, StoryObj } from '@storybook/react';
import { commonDecorators } from '../config/decorators';
import { Dropdown } from '../../components/Dropdown/Dropdown';

const meta: Meta<typeof Header> = {
	title: 'Headers/Header',
	component: Header,
	decorators: commonDecorators,
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Header>;

// === Minimal Placeholder Components for Demo Purposes ===
const Logo = () => (
	<span style={{ fontWeight: 'bold' }}>LOGO</span>
);
const Nav = ({ items }: { items: string[] }) => (
	<nav>
		<ul
			style={{
				display: 'flex',
				gap: 16,
				listStyle: 'none',
				margin: 0,
				padding: 0,
			}}
		>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	</nav>
);
const SearchBar = () => (
	<input
		placeholder='Search'
		style={{ padding: 4, borderRadius: 4 }}
	/>
);
const ProfileMenu = () => <span>👤</span>;
const CartIcon = () => <span>🛒</span>;
const HamburgerMenu = () => <span>☰</span>;
const SocialIcons = () => <span>🌐</span>;
const Breadcrumbs = ({ items }: { items: string[] }) => (
	<nav>{items.join(' / ')}</nav>
);
const NotificationBar = ({ text }: { text: string }) => (
	<div
		style={{
			background: '#f59e42',
			color: '#fff',
			padding: 4,
		}}
	>
		{text}
	</div>
);
const LanguageSelector = () => (
	<Dropdown>
		<option data-value='en'>EN</option>
		<option data-value='es'>ES</option>
	</Dropdown>
);
const CurrencySelector = () => (
	<Dropdown>
		<option data-value='usd'>USD</option>
		<option data-value='eur'>EUR</option>
	</Dropdown>
);
const CTAButton = ({
	children,
}: {
	children: React.ReactNode;
}) => (
	<button
		style={{
			background: '#2563eb',
			color: '#fff',
			border: 'none',
			borderRadius: 4,
			padding: '4px 12px',
		}}
	>
		{children}
	</button>
);
const BottomNav = ({ items }: { items: string[] }) => (
	<nav style={{ borderTop: '1px solid #eee', padding: 8 }}>
		{items.join(' | ')}
	</nav>
);

// Example nav items
const navItemsMain = [
	'Home',
	'About',
	'Features',
	'Pricing',
	'Contact',
];
const navItemsBottom = ['Terms', 'Privacy', 'Help'];

// === 1. Classic Left-Logo, Inline Nav ===
export const ClassicLeftLogoInlineNav: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsMain} />,
			search: <SearchBar />,
			actionsRight: [<ProfileMenu key='profile' />],
		},
	},
};

// === 2. Centered Logo, Nav Below ===
export const CenteredLogoNavBelow: Story = {
	args: {
		layout: 'vertical',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsMain} />,
			actionsRight: [
				<CartIcon key='cart' />,
				<ProfileMenu key='profile' />,
			],
		},
	},
};

// === 3. With Notification Bar and Breadcrumbs ===
export const WithNotificationAndBreadcrumbs: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			notification: (
				<NotificationBar text='Welcome to the site!' />
			),
			breadcrumbs: (
				<Breadcrumbs items={['Home', 'Shop', 'Cart']} />
			),
			logo: <Logo />,
			nav: <Nav items={navItemsMain} />,
			actionsRight: [
				<LanguageSelector key='lang' />,
				<CurrencySelector key='cur' />,
			],
		},
	},
};

// === 4. Mobile Hamburger Menu ===
export const MobileHamburgerMenu: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			nav: <HamburgerMenu />,
			actionsRight: [<ProfileMenu key='profile' />],
		},
	},
};

// === 5. Bottom Navigation Example ===
export const WithBottomNav: Story = {
	args: {
		layout: 'vertical',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsMain} />,
			bottomNav: <BottomNav items={navItemsBottom} />,
		},
	},
};
