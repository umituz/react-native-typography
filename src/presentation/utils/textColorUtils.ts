/**
 * Text Color Utilities
 * 
 * Helper functions for resolving text colors from design tokens.
 * These utilities are used by components like AtomicText to map color variants
 * to actual color values from the theme.
 */

import type { ColorVariant } from '../../domain/entities/TypographyTypes';
import type { DesignTokens } from '@umituz/react-native-theme';

/**
 * Get text color from design tokens based on color variant
 * 
 * @param color - Color variant or custom color string
 * @param tokens - Design tokens containing color values
 * @returns Resolved color string
 * 
 * @example
 * ```tsx
 * const tokens = useAppDesignTokens();
 * const textColor = getTextColor('textPrimary', tokens);
 * ```
 */
export function getTextColor(
  color: ColorVariant | string | undefined,
  tokens: DesignTokens,
): string {
  if (!color) {
    return tokens.colors.textPrimary;
  }

  // If it's a custom color string (not a variant), return as-is
  if (typeof color === 'string' && !isColorVariant(color)) {
    return color;
  }

  // Material Design 3 text color mapping
  const colorMap: Partial<Record<ColorVariant, string>> = {
    // General text colors (Material Design 3)
    textPrimary: tokens.colors.textPrimary,
    textSecondary: tokens.colors.textSecondary,
    textTertiary: tokens.colors.textTertiary,
    textDisabled: tokens.colors.textDisabled,
    textInverse: tokens.colors.textInverse,

    // Text on surfaces (Material Design 3)
    onSurface: tokens.colors.onSurface,
    onBackground: tokens.colors.onBackground,

    // Text on colored backgrounds (Material Design 3)
    onPrimary: tokens.colors.onPrimary,
    onSecondary: tokens.colors.onSecondary,
    onSuccess: tokens.colors.onSuccess,
    onError: tokens.colors.onError,
    onWarning: tokens.colors.onWarning,
    onInfo: tokens.colors.onInfo,

    // Semantic colors (can be used as text)
    success: tokens.colors.success,
    error: tokens.colors.error,
    warning: tokens.colors.warning,
    info: tokens.colors.info,

    // Legacy support (deprecated - maps to new names)
    primary: tokens.colors.textPrimary, // Legacy: use textPrimary or onPrimary
    secondary: tokens.colors.textSecondary, // Legacy: use textSecondary or onSecondary
    tertiary: tokens.colors.textTertiary, // Legacy: use textTertiary
    disabled: tokens.colors.textDisabled, // Legacy: use textDisabled
    inverse: tokens.colors.textInverse, // Legacy: use textInverse
    // Legacy: surfaceVariant is a background color, but used as text - map to textSecondary
    surfaceVariant: tokens.colors.textSecondary, // Legacy: use textSecondary instead
  };

  return colorMap[color as ColorVariant] || color;
}

/**
 * Check if a string is a valid ColorVariant
 * 
 * @param value - String to check
 * @returns True if value is a ColorVariant
 */
function isColorVariant(value: string): value is ColorVariant {
  const validVariants: ColorVariant[] = [
    'textPrimary',
    'textSecondary',
    'textTertiary',
    'textDisabled',
    'textInverse',
    'onSurface',
    'onBackground',
    'onPrimary',
    'onSecondary',
    'onSuccess',
    'onError',
    'onWarning',
    'onInfo',
    'success',
    'error',
    'warning',
    'info',
    'primary',
    'secondary',
    'tertiary',
    'disabled',
    'inverse',
    'surfaceVariant',
  ];

  return validVariants.includes(value as ColorVariant);
}

