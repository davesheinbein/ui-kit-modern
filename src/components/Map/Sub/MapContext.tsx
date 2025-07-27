import { createContext } from 'react';

/**
 * MapContext provides access to map state, events, and configuration for plugins/children.
 */
export const MapContext = createContext<any>(null);
