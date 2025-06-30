import React, { useState } from 'react';
import { Overlay } from '../../components/Overlays';
import { Button } from '../../components/Button';
import { Wrapper } from '../../components/Wrappers';

export default {
	title: 'Overlays/Overlay',
	component: Overlay,
	parameters: {
		docs: {
			description: {
				component: `A flexible overlay for modals, dialogs, and more. All overlay features are demonstrated in two interactive stories: General and Image Overlay.`,
			},
		},
	},
};

// ================= General Overlay Demo =================
export const GeneralOverlay = () => {
	const [open, setOpen] = useState(false);
	const [blur, setBlur] = useState(false);
	const [background, setBackground] = useState(
		'rgba(0,0,0,0.4)'
	);
	const [transitionDuration, setTransitionDuration] =
		useState(200);
	const [closeOnEsc, setCloseOnEsc] = useState(false);
	const [closeOnClick, setCloseOnClick] = useState(true);

	return (
		<Wrapper p={6} center gap={24}>
			<Wrapper gap={8} center>
				<Button
					kind='primary'
					onClick={() => setOpen(true)}
				>
					Show Overlay
				</Button>
				<Button
					kind={blur ? 'primary' : 'secondary'}
					onClick={() => setBlur((b) => !b)}
				>
					Blur: {blur ? 'On' : 'Off'}
				</Button>
				<Button
					kind={closeOnEsc ? 'primary' : 'secondary'}
					onClick={() => setCloseOnEsc((e) => !e)}
				>
					Close on Esc: {closeOnEsc ? 'On' : 'Off'}
				</Button>
				<Button
					kind={closeOnClick ? 'primary' : 'secondary'}
					onClick={() => setCloseOnClick((c) => !c)}
				>
					Close on Click: {closeOnClick ? 'On' : 'Off'}
				</Button>
			</Wrapper>
			<Wrapper gap={8} center>
				<Button
					kind={
						background === 'rgba(0,0,0,0.4)' ? 'primary' : (
							'secondary'
						)
					}
					onClick={() => setBackground('rgba(0,0,0,0.4)')}
				>
					Default BG
				</Button>
				<Button
					kind={
						background.startsWith('linear-gradient') ?
							'primary'
						:	'secondary'
					}
					onClick={() =>
						setBackground(
							'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
						)
					}
				>
					Gradient BG
				</Button>
			</Wrapper>
			<Wrapper gap={8} center>
				<span>Transition:</span>
				<Button
					kind={
						transitionDuration === 200 ? 'primary' : (
							'secondary'
						)
					}
					onClick={() => setTransitionDuration(200)}
				>
					200ms
				</Button>
				<Button
					kind={
						transitionDuration === 400 ? 'primary' : (
							'secondary'
						)
					}
					onClick={() => setTransitionDuration(400)}
				>
					400ms
				</Button>
			</Wrapper>
			<Overlay
				open={open}
				onClick={() => setOpen(false)}
				blur={blur}
				background={background}
				transitionDuration={transitionDuration}
				closeOnEsc={closeOnEsc}
				closeOnClick={closeOnClick}
			>
				<Wrapper
					p={4}
					bg='#fff'
					radius={8}
					style={{
						minWidth: 320,
						minHeight: 120,
						boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
					}}
				>
					<h3>General Overlay Content</h3>
					<Button
						kind='secondary'
						onClick={() => setOpen(false)}
					>
						Close
					</Button>
				</Wrapper>
			</Overlay>
		</Wrapper>
	);
};
GeneralOverlay.storyName = 'General Overlay (All Features)';

// ================= Image Overlay Demo =================
const imagePositions = [
	'center',
	'top-left',
	'top-right',
	'bottom-left',
	'bottom-right',
];
const objectFits = [
	'contain',
	'cover',
	'fill',
	'none',
	'scale-down',
];

export const ImageOverlay = () => {
	const [open, setOpen] = useState(false);
	const [position, setPosition] = useState('center');
	const [objectFit, setObjectFit] = useState('cover');
	const [fullscreen, setFullscreen] = useState(false);
	const [width, setWidth] = useState(400);
	const [height, setHeight] = useState(300);

	return (
		<Wrapper p={6} center gap={24}>
			<Wrapper gap={8} center>
				<Button
					kind='primary'
					onClick={() => setOpen(true)}
				>
					Show Image Overlay
				</Button>
				<Button
					kind={fullscreen ? 'primary' : 'secondary'}
					onClick={() => setFullscreen((f) => !f)}
				>
					{fullscreen ? 'Fullscreen' : 'Windowed'}
				</Button>
			</Wrapper>
			<Wrapper gap={8} center>
				{imagePositions.map((pos) => (
					<Button
						key={pos}
						kind={
							position === pos ? 'primary' : 'secondary'
						}
						onClick={() => setPosition(pos)}
					>
						{pos}
					</Button>
				))}
			</Wrapper>
			<Wrapper gap={8} center>
				{objectFits.map((fit) => (
					<Button
						key={fit}
						kind={
							objectFit === fit ? 'primary' : 'secondary'
						}
						onClick={() => setObjectFit(fit)}
					>
						objectFit: {fit}
					</Button>
				))}
			</Wrapper>
			{!fullscreen && (
				<Wrapper gap={8} center>
					<span>Width:</span>
					<Button
						kind={width === 200 ? 'primary' : 'secondary'}
						onClick={() => setWidth(200)}
					>
						200
					</Button>
					<Button
						kind={width === 400 ? 'primary' : 'secondary'}
						onClick={() => setWidth(400)}
					>
						400
					</Button>
					<span>Height:</span>
					<Button
						kind={height === 200 ? 'primary' : 'secondary'}
						onClick={() => setHeight(200)}
					>
						200
					</Button>
					<Button
						kind={height === 300 ? 'primary' : 'secondary'}
						onClick={() => setHeight(300)}
					>
						300
					</Button>
				</Wrapper>
			)}
			<Overlay
				open={open}
				onClick={() => setOpen(false)}
				imageSrc='https://i.imgur.com/1jPtNmW.png'
				imageAlt='Mock Overlay'
				imagePosition={position as any}
				imageObjectFit={objectFit as any}
				imageFullScreen={fullscreen}
				{...(!fullscreen && {
					imageWidth: width,
					imageHeight: height,
				})}
			>
				<Button
					kind='secondary'
					style={{
						position: 'absolute',
						top: 24,
						right: 24,
						zIndex: 2,
					}}
					onClick={() => setOpen(false)}
				>
					Close
				</Button>
			</Overlay>
		</Wrapper>
	);
};
ImageOverlay.storyName =
	'Image Overlay (All Positions & objectFit)';
