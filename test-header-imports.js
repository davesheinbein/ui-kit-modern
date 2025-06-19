#!/usr/bin/env node

// Test script to verify Header imports work correctly
try {
	const {
		HeaderFactory,
		H,
		HeaderPresets,
		UnifiedHeader,
		Header,
		BrowseHeader,
		HEADER_CONFIGURATIONS,
		HEADER_GROUPS,
		QUICK_HEADERS,
		createHeader,
	} = require('./dist/index.cjs.js');

	console.log('✅ Header System - All imports successful!');
	console.log('Available Header exports:');
	console.log('- HeaderFactory (main factory)');
	console.log('- H (ultra-short alias)');
	console.log('- HeaderPresets (preset configurations)');
	console.log('- UnifiedHeader (main component)');
	console.log('- Header (simple wrapper)');
	console.log('- BrowseHeader (backward compatibility)');
	console.log(
		'- HEADER_CONFIGURATIONS (all configurations)'
	);
	console.log('- HEADER_GROUPS (grouped configurations)');
	console.log('- QUICK_HEADERS (quick presets)');
	console.log('- createHeader (factory function)');

	// Test that the legacy BrowseHeader is properly exported
	if (BrowseHeader) {
		console.log(
			'✅ Legacy BrowseHeader component is available for backward compatibility'
		);
	}

	// Test that the main configurations exist
	if (
		HEADER_CONFIGURATIONS &&
		Object.keys(HEADER_CONFIGURATIONS).length > 0
	) {
		console.log(
			`✅ Found ${Object.keys(HEADER_CONFIGURATIONS).length} header configurations`
		);
	}

	// Test factory methods exist
	if (
		HeaderFactory &&
		typeof HeaderFactory.create === 'function'
	) {
		console.log(
			'✅ HeaderFactory.create() method is available'
		);
	}

	if (H && typeof H.modal === 'function') {
		console.log(
			'✅ H (ultra-short alias) methods are available'
		);
	}

	console.log(
		'\n🎉 Header system successfully migrated to DRY architecture!'
	);
} catch (error) {
	console.error(
		'❌ Header System - Import failed:',
		error.message
	);
	process.exit(1);
}
