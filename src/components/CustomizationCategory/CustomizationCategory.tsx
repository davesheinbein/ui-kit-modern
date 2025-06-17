import React from 'react';
import clsx from 'clsx';
import styles from './CustomizationCategory.module.scss';

export interface CustomizationCategoryProps {
	title: string;
	items: Array<{
		id: string;
		name: string;
		description?: string;
		primaryColor?: string;
		accentColor?: string;
		secondaryColor?: string;
		borderColor?: string;
		swatchGradient?: string;
		imageUrl?: string;
		previewBorder?: string;
		previewImage?: string;
		backgroundColor?: string;
		style?: string;
		equipped?: boolean;
		price?: number;
		currency?: string;
		shop?: boolean;
		unlocked?: boolean;
		[key: string]: any;
	}>;
	onEquip: (
		slot: string,
		id: string
	) => void | Promise<void>;
	ariaLabelPrefix: string;
	lockedIndices?: number[];
	onLockedClick?: (item: any) => void;
	onShopItemClick?: (item: any) => void;
}

function getCustomizationTypeFlags(title: string) {
	const lowerTitle = title.toLowerCase();
	return {
		isEmote: lowerTitle.includes('emote'),
		isFont: lowerTitle.includes('font'),
		isTheme: lowerTitle.includes('theme'),
		isBorder: lowerTitle.includes('border'),
		isBackground: lowerTitle.includes('background'),
		lowerTitle,
	};
}

const CustomizationCategory: React.FC<
	CustomizationCategoryProps
> = (props) => {
	const {
		title,
		items = [],
		onEquip,
		ariaLabelPrefix,
		lockedIndices = [],
		onLockedClick,
		onShopItemClick,
	} = props;
	const {
		isEmote,
		isFont,
		isTheme,
		isBorder,
		isBackground,
		lowerTitle,
	} = getCustomizationTypeFlags(title);

	return (
		<div
			className={clsx(
				styles.customizationCategory,
				`customization-category-${lowerTitle}`
			)}
		>
			{items.length === 0 ?
				<div className={styles.customizationEmptyMsg}>
					No {lowerTitle} unlocked yet.
				</div>
			:	<div className={styles.customizationGrid}>
					{items.map((item, idx) => {
						const isLocked = lockedIndices.includes(idx);
						const isShop = !!item.shop && !item.unlocked;
						return (
							<button
								key={item.id}
								onClick={
									isLocked ?
										(e) => {
											e.preventDefault();
											if (onLockedClick)
												onLockedClick(item);
										}
									: isShop ?
										(e) => {
											e.preventDefault();
											if (onShopItemClick)
												onShopItemClick(item);
										}
									:	() => {
											void onEquip(lowerTitle, item.id);
										}

								}
								className={clsx(
									styles.customizationItemBtn,
									{
										'equipped': item.equipped,
										'theme-preview': isTheme,
										'emote-preview': isEmote,
										'font-preview': isFont,
										'border-preview': isBorder,
										'background-preview': isBackground,
										'locked': isLocked,
										'shop-item': isShop,
									}
								)}
								style={{
									height: 'fit-content',
									width: '100%',
									maxWidth: 320,
									padding: '14px',
									borderRadius: 14,
									border:
										item.equipped ?
											'2.5px solid #38bdf8'
										:	'2px solid #e0e7ef',
									background:
										isLocked ? '#f1f5f9'
										: item.equipped ?
											'linear-gradient(90deg, #e0f2fe 0%, #bae6fd 100%)'
										: isShop ? '#f8fafc'
										: '#fff',
									fontWeight: 700,
									color:
										isLocked ? '#b0b7c3'
										: item.equipped ? '#2563eb'
										: isShop ? '#64748b'
										: '#222',
									boxShadow:
										item.equipped ?
											'0 0 12px 2px #38bdf855'
										:	'0 1px 4px 0 #e3eaff33',
									fontSize: '1.1rem',
									fontFamily:
										isFont ? item.name : undefined,
									cursor: 'pointer',
									transition: 'all 0.18s',
									position: 'relative',
									opacity: isShop ? 0.7 : 1,
								}}
								aria-label={
									isLocked ?
										`Locked: log in to unlock ${item.name}`
									: isShop ?
										`Buy ${item.name} ${ariaLabelPrefix}`
									:	`Equip ${item.name} ${ariaLabelPrefix}`
								}
							>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
									}}
								>
									{isTheme && (
										<div
											style={{
												width: 60,
												height: 60,
												borderRadius: 10,
												background:
													item.primaryColor ||
													item.accentColor ||
													'#e0e7ef',
												border: `3px solid ${item.secondaryColor || item.borderColor || '#38bdf8'}`,
												marginBottom: 6,
												position: 'relative',
											}}
										>
											<div
												style={{
													position: 'absolute',
													bottom: 0,
													left: 0,
													width: '100%',
													height: 10,
													borderBottomLeftRadius: 10,
													borderBottomRightRadius: 10,
													background:
														item.swatchGradient ||
														item.accentColor ||
														'#a78bfa',
												}}
											/>
										</div>
									)}
									{isEmote && (
										<img
											src={item.imageUrl || '/logo.svg'}
											alt={item.name}
											width={60}
											height={60}
											style={{
												borderRadius: 10,
												marginBottom: 6,
												objectFit: 'cover',
												background: '#f3f6fa',
											}}
										/>
									)}
									{isBorder && (
										<div
											style={{
												width: 60,
												height: 60,
												borderRadius: 10,
												border:
													item.previewBorder ||
													'3px solid #e0e7ef',
												marginBottom: 6,
												background: '#fff',
											}}
										/>
									)}
									{isBackground && (
										<div
											style={{
												width: 60,
												height: 60,
												borderRadius: 10,
												marginBottom: 6,
												background:
													item.previewImage ?
														`url(${item.previewImage}) center/cover no-repeat`
													:	item.backgroundColor ||
														'#e0e7ef',
											}}
										/>
									)}
									{isFont && (
										<div
											style={{
												width: 60,
												height: 60,
												borderRadius: 10,
												marginBottom: 6,
												background: '#fff',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												fontFamily: item.name,
												fontWeight: 700,
												fontSize: 20,
												color: '#222',
											}}
										>
											{item.previewText || 'Aa'}
										</div>
									)}
									<span
										style={{
											fontSize: 14,
											fontWeight: 600,
											marginTop: 2,
											fontFamily:
												isFont ? item.name : undefined,
										}}
									>
										{item.name}
									</span>
									{item.description && (
										<span
											style={{
												fontSize: 10,
												color: '#64748b',
												marginTop: 2,
												fontFamily:
													isFont ? item.name : undefined,
											}}
										>
											{item.description}
										</span>
									)}
								</div>
								{item.equipped && (
									<div
										className={
											styles.customizationEquippedIndicator
										}
									>
										✓
									</div>
								)}
								{isLocked && (
									<span
										className={
											styles.customizationLockedBadge
										}
										title='Log in to unlock this style'
									>
										🔒
									</span>
								)}
								{isShop && (
									<span
										style={{
											position: 'absolute',
											top: 8,
											left: 8,
											background: '#fff',
											borderRadius: 8,
											padding: '2px 10px',
											fontSize: 13,
											color: '#2563eb',
											fontWeight: 700,
											boxShadow: '0 1px 4px #e3eaff33',
											border: '1.5px solid #e0e7ef',
											zIndex: 2,
										}}
									>
										{item.price} {item.currency || 'coins'}
									</span>
								)}
								{isShop && (
									<span
										className={
											styles.customizationLockedBadge
										}
										title='Purchase to unlock this style'
									>
										🔒
									</span>
								)}
							</button>
						);
					})}
				</div>
			}
		</div>
	);
};

export default CustomizationCategory;
