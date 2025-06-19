import React, { useState } from 'react';
import { Footer } from '../../../../src/components/Footer';
import { Button } from '../../../../src/components/Button';
import '../../../../src/styles/globals.css';

export default function FooterDemo() {
	const [currentTheme, setCurrentTheme] = useState<
		'light' | 'dark'
	>('light');
	const [showNotification, setShowNotification] =
		useState(false);

	const toggleTheme = () => {
		setCurrentTheme((prev) =>
			prev === 'light' ? 'dark' : 'light'
		);
		document.body.className =
			currentTheme === 'light' ? 'dark-theme' : (
				'light-theme'
			);
	};

	const showAlert = (message: string) => {
		alert(message);
	};

	const showTemporaryNotification = () => {
		setShowNotification(true);
		setTimeout(() => setShowNotification(false), 3000);
	};

	return (
		<div
			className={`min-h-screen flex flex-col ${currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
		>
			{/* Header */}
			<header
				className={`${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm border-b p-4`}
			>
				<div className='max-w-6xl mx-auto flex justify-between items-center'>
					<h1 className='text-2xl font-bold'>
						UI Kit Modern
					</h1>
					<Button
						label={`Switch to ${currentTheme === 'light' ? 'Dark' : 'Light'} Theme`}
						onClick={toggleTheme}
						className='bg-gray-600 hover:bg-gray-700'
					/>
				</div>
			</header>

			{/* Notification */}
			{showNotification && (
				<div className='bg-green-500 text-white px-4 py-2 text-center'>
					✅ Newsletter subscription successful!
				</div>
			)}

			{/* Main Content */}
			<main className='flex-1 max-w-6xl mx-auto p-8 w-full'>
				<div className='mb-8'>
					<h2 className='text-3xl font-bold mb-4'>
						Footer Component Demo
					</h2>
					<p className='text-lg mb-6'>
						This page demonstrates various practical
						implementations of the Footer component in
						realistic scenarios. Scroll down to see
						different footer examples in action.
					</p>
				</div>

				{/* Demo Sections */}
				<div className='space-y-12'>
					{/* Basic Company Footer */}
					<section>
						<h3 className='text-xl font-semibold mb-4'>
							1. Basic Company Footer
						</h3>
						<div
							className={`border rounded-lg ${currentTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} min-h-[200px] flex flex-col`}
						>
							<div className='flex-1 p-6'>
								<p>
									Sample page content for a business
									website...
								</p>
							</div>
							<Footer
								copyright='© 2024 TechCorp Industries. All rights reserved.'
								links={[
									{
										label: 'Privacy Policy',
										href: '/privacy',
									},
									{
										label: 'Terms of Service',
										href: '/terms',
									},
									{ label: 'Contact Us', href: '/contact' },
									{ label: 'Careers', href: '/careers' },
								]}
							/>
						</div>
					</section>

					{/* E-commerce Footer */}
					<section>
						<h3 className='text-xl font-semibold mb-4'>
							2. E-commerce Footer with Actions
						</h3>
						<div
							className={`border rounded-lg ${currentTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} min-h-[200px] flex flex-col`}
						>
							<div className='flex-1 p-6'>
								<p>Online store content...</p>
							</div>
							<Footer
								copyright='© 2024 ShopSmart'
								links={[
									{
										label: 'Customer Service',
										onClick: () =>
											showAlert('Opening chat support...'),
									},
									{
										label: 'Return Policy',
										href: '/returns',
									},
									{
										label: 'Shipping Info',
										href: '/shipping',
									},
									{
										label: 'Track Order',
										onClick: () =>
											showAlert(
												'Redirecting to order tracking...'
											),
									},
								]}
							/>
						</div>
					</section>

					{/* Social Media Footer */}
					<section>
						<h3 className='text-xl font-semibold mb-4'>
							3. Social Media Footer with Center Content
						</h3>
						<div
							className={`border rounded-lg ${currentTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} min-h-[200px] flex flex-col`}
						>
							<div className='flex-1 p-6'>
								<p>Creative agency portfolio content...</p>
							</div>
							<Footer
								copyright='© 2024 Creative Studio'
								centerContent={
									<div className='flex items-center gap-3'>
										<span>Follow us:</span>
										<button
											onClick={() =>
												showAlert('Opening Twitter...')
											}
											className='hover:scale-110 transition-transform'
										>
											🐦
										</button>
										<button
											onClick={() =>
												showAlert('Opening Instagram...')
											}
											className='hover:scale-110 transition-transform'
										>
											📷
										</button>
										<button
											onClick={() =>
												showAlert('Opening LinkedIn...')
											}
											className='hover:scale-110 transition-transform'
										>
											💼
										</button>
									</div>
								}
								links={[
									{
										label: 'Portfolio',
										href: '/portfolio',
									},
									{ label: 'Blog', href: '/blog' },
									{ label: 'Contact', href: '/contact' },
								]}
							/>
						</div>
					</section>

					{/* Gaming/App Footer */}
					<section>
						<h3 className='text-xl font-semibold mb-4'>
							4. Gaming App Footer
						</h3>
						<div
							className={`border rounded-lg ${currentTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} min-h-[200px] flex flex-col`}
						>
							<div className='flex-1 p-6'>
								<p>Game dashboard content...</p>
							</div>
							<Footer
								leftContent={
									<div className='flex items-center gap-2'>
										<span>🎮</span>
										<span>© 2024 GameStudio</span>
									</div>
								}
								centerContent={
									<div className='flex items-center gap-2'>
										<span>Players online:</span>
										<span className='font-bold text-green-500'>
											1,234
										</span>
									</div>
								}
								rightContent={
									<div className='flex gap-4'>
										<button
											onClick={() =>
												showAlert(
													'Opening Discord server...'
												)
											}
											className='text-blue-500 hover:underline'
										>
											Discord
										</button>
										<button
											onClick={() =>
												showAlert('Opening support...')
											}
											className='text-blue-500 hover:underline'
										>
											Support
										</button>
										<a
											href='/leaderboard'
											className='text-blue-500 hover:underline'
										>
											Leaderboard
										</a>
									</div>
								}
							/>
						</div>
					</section>

					{/* Newsletter Footer */}
					<section>
						<h3 className='text-xl font-semibold mb-4'>
							5. Newsletter Signup Footer
						</h3>
						<div
							className={`border rounded-lg ${currentTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} min-h-[200px] flex flex-col`}
						>
							<div className='flex-1 p-6'>
								<p>Blog or news website content...</p>
							</div>
							<Footer
								leftContent={
									<div>
										<div className='text-sm'>
											© 2024 Tech News Daily
										</div>
										<div className='text-xs opacity-75'>
											Stay informed with the latest tech
											updates
										</div>
									</div>
								}
								centerContent={
									<div className='flex items-center gap-2'>
										<input
											type='email'
											placeholder='Enter email for newsletter'
											className={`px-3 py-1 text-sm border rounded ${currentTheme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
										/>
										<Button
											label='Subscribe'
											onClick={showTemporaryNotification}
											className='text-xs px-2 py-1'
										/>
									</div>
								}
								links={[
									{ label: 'Archive', href: '/archive' },
									{ label: 'RSS', href: '/rss.xml' },
									{ label: 'About', href: '/about' },
								]}
							/>
						</div>
					</section>

					{/* Minimal Footer */}
					<section>
						<h3 className='text-xl font-semibold mb-4'>
							6. Minimal Footer
						</h3>
						<div
							className={`border rounded-lg ${currentTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} min-h-[200px] flex flex-col`}
						>
							<div className='flex-1 p-6'>
								<p>Clean, minimal website content...</p>
							</div>
							<Footer />
						</div>
					</section>

					{/* Custom Styled Footer */}
					<section>
						<h3 className='text-xl font-semibold mb-4'>
							7. Custom Styled Footer
						</h3>
						<div
							className={`border rounded-lg ${currentTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} min-h-[200px] flex flex-col`}
						>
							<div className='flex-1 p-6'>
								<p>Website with custom branding...</p>
							</div>
							<Footer
								className='bg-gradient-to-r from-purple-600 to-pink-600 text-white'
								copyright='© 2024 Creative Agency'
								centerContent={
									<div className='text-center'>
										<div className='font-bold'>
											🎨 Design • Develop • Deploy
										</div>
									</div>
								}
								links={[
									{ label: 'Work', href: '/work' },
									{ label: 'Services', href: '/services' },
									{
										label: 'Contact',
										onClick: () =>
											showAlert('Contact form opening...'),
									},
								]}
							/>
						</div>
					</section>
				</div>

				{/* Usage Instructions */}
				<div className='mt-12 p-6 border rounded-lg bg-blue-50 dark:bg-blue-900/20'>
					<h3 className='text-lg font-semibold mb-4'>
						💡 Usage Tips
					</h3>
					<ul className='space-y-2 text-sm'>
						<li>
							<strong>Default behavior:</strong> Footer
							automatically shows current year copyright and
							handles external link targeting
						</li>
						<li>
							<strong>Flexible content:</strong> Use
							leftContent, centerContent, and rightContent
							for complete customization
						</li>
						<li>
							<strong>Smart links:</strong> Links can have
							href (navigation) or onClick (actions) -
							perfect for modals, alerts, or API calls
						</li>
						<li>
							<strong>Responsive design:</strong> Footer
							automatically adapts to different screen sizes
						</li>
						<li>
							<strong>Theme support:</strong> Works with
							light/dark themes and custom styling via
							className
						</li>
						<li>
							<strong>Accessibility:</strong> Proper
							semantic markup with nav elements and button
							types
						</li>
					</ul>
				</div>
			</main>

			{/* Page Footer */}
			<Footer
				copyright='© 2024 UI Kit Modern - Footer Demo Page'
				centerContent={
					<div className='text-center text-sm'>
						<div>Made with ❤️ using React & TypeScript</div>
					</div>
				}
				links={[
					{ label: 'Documentation', href: '/docs' },
					{
						label: 'Storybook',
						onClick: () =>
							showAlert('Opening Storybook...'),
					},
					{ label: 'GitHub', href: 'https://github.com' },
					{ label: 'NPM', href: 'https://npmjs.com' },
				]}
			/>
		</div>
	);
}
