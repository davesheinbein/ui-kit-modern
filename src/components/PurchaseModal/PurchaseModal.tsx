import React, { useState } from 'react';
import styles from './PurchaseModal.module.scss';

export interface PurchaseModalProps {
	item: any;
	onClose: () => void;
	onPurchase: (item: any) => Promise<void>;
	user: any;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({
	item,
	onClose,
	onPurchase,
	user,
}) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const handlePurchase = async () => {
		setLoading(true);
		setError(null);
		try {
			await onPurchase(item);
			setSuccess(true);
			setTimeout(() => {
				onClose();
			}, 1200);
		} catch (e: any) {
			setError(e?.message || 'Purchase failed.');
		} finally {
			setLoading(false);
		}
	};

	// Placeholder handlers for Gift/Trade
	const handleGift = () => alert('Gifting coming soon!');
	const handleTrade = () => alert('Trading coming soon!');

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<button
					className={styles.closeBtn}
					onClick={onClose}
				>
					&times;
				</button>
				<h2 className={styles.title}>
					{item.label || item.name}
				</h2>
				<div className={styles.previewSection}>
					{item.previewUrl && (
						<img
							src={item.previewUrl}
							alt={item.label}
							className={styles.previewImg}
						/>
					)}
					<p className={styles.description}>
						{item.description}
					</p>
				</div>
				<div className={styles.priceSection}>
					<span className={styles.priceLabel}>Price: </span>
					<span className={styles.priceValue}>
						{item.price} {item.currency || 'coins'}
					</span>
				</div>
				{error && (
					<div className={styles.error}>{error}</div>
				)}
				{success && (
					<div className={styles.success}>
						Purchase successful!
					</div>
				)}
				<button
					className={styles.buyBtn}
					onClick={handlePurchase}
					disabled={!user || loading || success}
				>
					{loading ?
						'Processing...'
					: success ?
						'Purchased!'
					:	'Buy Now'}
				</button>
				{item.type === 'consumable' && !success && (
					<div className={styles.actionsRow}>
						<button
							className={styles.giftBtn}
							onClick={handleGift}
						>
							Gift
						</button>
						<button
							className={styles.tradeBtn}
							onClick={handleTrade}
						>
							Trade
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default PurchaseModal;
