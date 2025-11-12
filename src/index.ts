/**
 * @umituz/react-native-typography - Public API
 *
 * Typography types and utilities for React Native applications
 * Material Design 3 text styles and color variants
 *
 * This package provides:
 * - Typography type definitions (TextStyleVariant, ColorVariant)
 * - Text color utility functions
 * - Type-safe typography helpers
 *
 * Usage:
 *   import { TextStyleVariant, ColorVariant, getTextColor } from '@umituz/react-native-typography';
 */

// =============================================================================
// DOMAIN LAYER - Entities (Types)
// =============================================================================

export type {
  TextStyleVariant,
  ColorVariant,
} from './domain/entities/TypographyTypes';

// =============================================================================
// PRESENTATION LAYER - Utilities
// =============================================================================

export {
  getTextColor,
} from './presentation/utils/textColorUtils';

