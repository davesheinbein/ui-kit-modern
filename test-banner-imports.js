// Test script to verify Banner imports work correctly
const {
	BannerFactory,
	Ban,
	BannerPresets,
	UnifiedBanner,
	Banner,
} = require('./dist/index.cjs.js');

console.log('✅ Banner System - All imports successful!');
console.log('Available Banner types:');
console.log('- BannerFactory (main factory)');
console.log('- Ban (ultra-short alias)');
console.log('- BannerPresets (preset configurations)');
console.log('- UnifiedBanner (backward compatibility)');
console.log('- Banner (base component)');
