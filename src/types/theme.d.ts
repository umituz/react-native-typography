/**
 * Type definitions for @umituz/react-native-design-system-theme
 * This is a minimal type definition to avoid compilation issues
 */

export interface DesignTokens {
  colors: {
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textDisabled: string;
    textInverse: string;
    onSurface: string;
    onBackground: string;
    onPrimary: string;
    onSecondary: string;
    onSuccess: string;
    onError: string;
    onWarning: string;
    onInfo: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    primary: string;
    secondary: string;
    tertiary: string;
    surface: string;
    surfaceVariant: string;
    background: string;
  };
  typography: {
    [key: string]: {
      fontSize: number;
      fontWeight: string;
    };
  };
  spacing: Record<string, string | number>;
  shadows: Record<string, unknown>;
  borderRadius: Record<string, string | number>;
  iconSizes: Record<string, string | number>;
  opacity: Record<string, string | number>;
  avatarSizes: Record<string, string | number>;
  borders: Record<string, unknown>;
}

/**
 * Create a mock DesignTokens object for testing
 * This provides a complete, type-safe implementation
 */
export function createMockDesignTokens(overrides?: Partial<DesignTokens>): DesignTokens {
  const defaultTokens: DesignTokens = {
    colors: {
      textPrimary: '#000000',
      textSecondary: '#666666',
      textTertiary: '#999999',
      textDisabled: '#CCCCCC',
      textInverse: '#FFFFFF',
      onSurface: '#000000',
      onBackground: '#000000',
      onPrimary: '#FFFFFF',
      onSecondary: '#FFFFFF',
      onSuccess: '#FFFFFF',
      onError: '#FFFFFF',
      onWarning: '#000000',
      onInfo: '#FFFFFF',
      success: '#4CAF50',
      error: '#F44336',
      warning: '#FF9800',
      info: '#2196F3',
      primary: '#2196F3',
      secondary: '#FF9800',
      tertiary: '#9C27B0',
      surface: '#FFFFFF',
      surfaceVariant: '#F5F5F5',
      background: '#FFFFFF',
    },
    typography: {
      displayLarge: { fontSize: 57, fontWeight: '400' },
      displayMedium: { fontSize: 45, fontWeight: '400' },
      displaySmall: { fontSize: 36, fontWeight: '400' },
      headlineLarge: { fontSize: 32, fontWeight: '400' },
      headlineMedium: { fontSize: 28, fontWeight: '400' },
      headlineSmall: { fontSize: 24, fontWeight: '400' },
      titleLarge: { fontSize: 22, fontWeight: '500' },
      titleMedium: { fontSize: 16, fontWeight: '500' },
      titleSmall: { fontSize: 14, fontWeight: '500' },
      bodyLarge: { fontSize: 16, fontWeight: '400' },
      bodyMedium: { fontSize: 14, fontWeight: '400' },
      bodySmall: { fontSize: 12, fontWeight: '400' },
      labelLarge: { fontSize: 14, fontWeight: '500' },
      labelMedium: { fontSize: 12, fontWeight: '500' },
      labelSmall: { fontSize: 11, fontWeight: '500' },
    },
    spacing: {},
    shadows: {},
    borderRadius: {},
    iconSizes: {},
    opacity: {},
    avatarSizes: {},
    borders: {},
  };

  return { ...defaultTokens, ...overrides };
}