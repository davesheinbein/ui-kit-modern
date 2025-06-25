import React from 'react';
import { Header } from '../../components/Header';
import type { Meta, StoryObj } from '@storybook/react';
import {
	navItemsMain,
	navItemsLeft,
	navItemsRight,
	navItemsMega,
	navItemsGallery,
	navItemsSidebar,
	navItemsShop,
	navItemsHelp,
	navItemsBottom,
	navItemsBlog,
	navItemsShopDeals,
	navItemsFeatures,
	navItemsIconOnly,
	navItemsCart,
	navItemsBottomNav,
	navItemsShopContact,
	breadcrumbsCategory,
	notificationTextShipping,
	ctaSubscribe,
	ctaSignUp,
	ctaLogIn,
	ctaBuyNow,
} from '../mocks';

// === Placeholder Components for Demo Purposes ===
const Logo = () => (
	<span style={{ fontWeight: 'bold' }}>Logo</span>
);
const Nav = ({ items }: { items: string[] }) => (
	<nav style={{ display: 'flex', gap: 16 }}>
		{items.map((item) => (
			<a key={item}>{item}</a>
		))}
	</nav>
);
const SearchBar = () => (
	<input
		placeholder='Search'
		style={{ padding: 4, borderRadius: 4 }}
	/>
);
const ProfileMenu = () => <span>Profile</span>;
const CartIcon = () => <span>🛒</span>;
const HamburgerMenu = () => (
	<span style={{ fontSize: 24 }}>☰</span>
);
const SocialIcons = () => <span>FB | IG | TW</span>;
const Breadcrumbs = ({ items }: { items: string[] }) => (
	<span>{items.join(' > ')}</span>
);
const NotificationBar = ({ text }: { text: string }) => (
	<div
		style={{
			background: '#ffe',
			padding: 8,
			textAlign: 'center',
		}}
	>
		{text}
	</div>
);
const LanguageSelector = () => <span>🇬🇧 EN</span>;
const CurrencySelector = () => <span>$ USD</span>;
const CTAButton = ({
	children,
}: {
	children: React.ReactNode;
}) => (
	<button
		style={{
			background: '#2563eb',
			color: 'white',
			borderRadius: 4,
			padding: '4px 12px',
		}}
	>
		{children}
	</button>
);
const BottomNav = ({ items }: { items: string[] }) => (
	<nav
		style={{
			display: 'flex',
			gap: 24,
			justifyContent: 'center',
		}}
	>
		{items.map((item) => (
			<a key={item}>{item}</a>
		))}
	</nav>
);

const meta: Meta<typeof Header> = {
	title: 'Headers/Header',
	component: Header,
	parameters: {
		docs: {
			description: {
				component: `\n**DRY Header System** - Demonstrates 20 layout variations using a single, prop-driven <Header /> component.\nAll content is passed via props.\n`,
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof Header>;

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

// === 2. Logo Centered, Split Navigation ===
export const LogoCenteredSplitNav: Story = {
	args: {
		layout: 'split',
		sections: {
			navLeft: <Nav items={navItemsLeft} />,
			logo: <Logo />,
			navRight: <Nav items={navItemsRight} />,
		},
	},
};

// === 3. Logo + Hamburger (Desktop & Mobile) ===
export const LogoHamburger: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			actionsRight: [<HamburgerMenu key='hamburger' />],
		},
	},
};

// === 4. Logo + Mega Nav ===
export const LogoMegaNav: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsMega} />,
			search: <SearchBar />,
			actionsRight: [
				<CartIcon key='cart' />,
				<ProfileMenu key='profile' />,
			],
		},
	},
};

// === 5. Sticky Transparent Over Hero ===
export const StickyTransparentOverHero: Story = {
	args: {
		layout: 'horizontal',
		sticky: true,
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsGallery} />,
			actionsRight: [<ProfileMenu key='profile' />],
		},
	},
};

// === 6. Left Vertical Sidebar Header ===
export const LeftVerticalSidebarHeader: Story = {
	args: {
		layout: 'vertical',
		position: 'sidebar',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsSidebar} />,
		},
	},
};

// === 7. Centered Logo + Social Icons ===
export const CenteredLogoSocialIcons: Story = {
	args: {
		layout: 'split',
		sections: {
			navLeft: <SocialIcons />,
			logo: <Logo />,
			navRight: <Nav items={navItemsCart} />, // Shop, About, Cart
		},
	},
};

// === 8. Logo + Search-Priority ===
export const LogoSearchPriority: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			search: <SearchBar />,
			nav: <Nav items={navItemsShop} />,
		},
	},
};

// === 9. Split Top + Bottom Nav ===
export const SplitTopBottomNav: Story = {
	args: {
		layout: 'stacked',
		sections: {
			top: (
				<>
					<Logo />
					<Nav items={navItemsHelp} />
				</>
			),
			bottom: <Nav items={navItemsBottom} />,
		},
	},
};

// === 10. Sticky Logo + CTA ===
export const StickyLogoCTA: Story = {
	args: {
		layout: 'horizontal',
		sticky: true,
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsBlog} />,
			actionsRight: [
				<CTAButton key='cta'>{ctaSubscribe}</CTAButton>,
			],
		},
	},
};

// === 11. Logo + Breadcrumb Header (Page-Level) ===
export const LogoBreadcrumbHeader: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			breadcrumbs: (
				<Breadcrumbs items={breadcrumbsCategory} />
			),
		},
	},
};

// === 12. Centered Logo with Bottom Nav ===
export const CenteredLogoBottomNav: Story = {
	args: {
		layout: 'vertical',
		sections: {
			logo: <Logo />,
			bottom: <Nav items={navItemsShopContact} />,
		},
	},
};

// === 13. Fullscreen Hamburger ===
export const FullscreenHamburger: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			actionsRight: [<HamburgerMenu key='hamburger' />],
		},
		// In a real app, clicking ☰ would open a fullscreen overlay nav
	},
};

// === 14. Logo + Icon-Only Nav ===
export const LogoIconOnlyNav: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsIconOnly} />,
		},
	},
};

// === 15. Logo + Notification Bar ===
export const LogoNotificationBar: Story = {
	args: {
		layout: 'stacked',
		sections: {
			top: (
				<NotificationBar text={notificationTextShipping} />
			),
			bottom: (
				<>
					<Logo />
					<Nav items={['Shop', 'Deals', 'Cart']} />
				</>
			),
		},
	},
};

// === 16. Logo + Language / Currency Selector ===
export const LogoLanguageCurrency: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsShopDeals} />,
			actionsRight: [
				<CurrencySelector key='currency' />,
				<LanguageSelector key='lang' />,
			],
		},
	},
};

// === 17. Dual CTA Header ===
export const DualCTAHeader: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			nav: <Nav items={navItemsFeatures} />,
			actionsRight: [
				<CTAButton key='signup'>{ctaSignUp}</CTAButton>,
				<CTAButton key='login'>{ctaLogIn}</CTAButton>,
			],
		},
	},
};

// === 18. Logo + Compact Nav (Single Icon + CTA) ===
export const LogoCompactNav: Story = {
	args: {
		layout: 'horizontal',
		sections: {
			logo: <Logo />,
			actionsRight: [
				<HamburgerMenu key='hamburger' />,
				<CTAButton key='buy'>{ctaBuyNow}</CTAButton>,
			],
		},
	},
};

// === 19. Sticky Bottom Nav (Mobile Only) ===
export const StickyBottomNav: Story = {
	args: {
		layout: 'bottom',
		position: 'bottom',
		sticky: true,
		sections: {
			bottomNav: <BottomNav items={navItemsBottomNav} />,
		},
	},
};

// === 20. Logo + Center Search (Mobile) ===
export const LogoCenterSearchMobile: Story = {
	args: {
		layout: 'vertical',
		sections: {
			logo: <Logo />,
			search: <SearchBar />,
			actionsRight: [
				<HamburgerMenu key='hamburger' />,
				<CartIcon key='cart' />,
			],
		},
	},
};
