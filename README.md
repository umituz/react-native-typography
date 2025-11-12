# @umituz/react-native-typography

Typography types and utilities for React Native applications following Material Design 3 principles.

## ✨ Features

- 🎨 **Material Design 3** - Complete typography scale (Display, Headline, Title, Body, Label)
- 🎯 **Type-Safe** - Full TypeScript support with strict types
- 🎨 **Color Variants** - Material Design 3 text color system
- 🛠️ **Utilities** - Helper functions for color resolution
- 📦 **Lightweight** - Zero dependencies (only peer dependencies)

## 📦 Installation

```bash
npm install @umituz/react-native-typography
```

### Peer Dependencies

```bash
npm install @umituz/react-native-theme
```

## 🚀 Usage

### Types

```typescript
import type { TextStyleVariant, ColorVariant } from '@umituz/react-native-typography';

// Text style variants
const variant: TextStyleVariant = 'headlineLarge';

// Color variants
const color: ColorVariant = 'textPrimary';
```

### Utilities

```typescript
import { getTextColor } from '@umituz/react-native-typography';
import { useAppDesignTokens } from '@umituz/react-native-theme';

const MyComponent = () => {
  const tokens = useAppDesignTokens();
  
  // Get resolved color from variant
  const textColor = getTextColor('textPrimary', tokens);
  
  return <Text style={{ color: textColor }}>Hello</Text>;
};
```

## 📚 API Reference

### Types

#### `TextStyleVariant`

Material Design 3 text style variants:

- **Display**: `displayLarge`, `displayMedium`, `displaySmall`
- **Headline**: `headlineLarge`, `headlineMedium`, `headlineSmall`
- **Title**: `titleLarge`, `titleMedium`, `titleSmall`
- **Body**: `bodyLarge`, `bodyMedium`, `bodySmall`
- **Label**: `labelLarge`, `labelMedium`, `labelSmall`

#### `ColorVariant`

Material Design 3 text color variants:

- **Text Colors**: `textPrimary`, `textSecondary`, `textTertiary`, `textDisabled`, `textInverse`
- **On Colors**: `onSurface`, `onBackground`, `onPrimary`, `onSecondary`, `onSuccess`, `onError`, `onWarning`, `onInfo`
- **Semantic**: `success`, `error`, `warning`, `info`
- **Legacy**: `primary`, `secondary`, `tertiary`, `disabled`, `inverse`, `surfaceVariant` (deprecated)

### Utilities

#### `getTextColor(color, tokens)`

Resolves a color variant to an actual color value from design tokens.

**Parameters:**
- `color`: `ColorVariant | string | undefined` - Color variant or custom color string
- `tokens`: `DesignTokens` - Design tokens from `@umituz/react-native-theme`

**Returns:** `string` - Resolved color value

**Example:**
```typescript
const tokens = useAppDesignTokens();
const color = getTextColor('textPrimary', tokens); // Returns actual color value
const customColor = getTextColor('#FF0000', tokens); // Returns custom color as-is
```

## 🎨 Material Design 3 Typography Scale

| Variant | Font Size | Font Weight | Line Height |
|---------|-----------|-------------|-------------|
| displayLarge | 57px | 400 | 64px |
| displayMedium | 45px | 400 | 52px |
| displaySmall | 36px | 400 | 44px |
| headlineLarge | 32px | 400 | 40px |
| headlineMedium | 28px | 400 | 36px |
| headlineSmall | 24px | 400 | 32px |
| titleLarge | 22px | 500 | 28px |
| titleMedium | 16px | 500 | 24px |
| titleSmall | 14px | 500 | 20px |
| bodyLarge | 16px | 400 | 24px |
| bodyMedium | 14px | 400 | 20px |
| bodySmall | 12px | 400 | 16px |
| labelLarge | 14px | 500 | 20px |
| labelMedium | 12px | 500 | 16px |
| labelSmall | 11px | 500 | 16px |

## 🔗 Related Packages

- `@umituz/react-native-design-system` - UI components using these typography types
- `@umituz/react-native-theme` - Design tokens and theme system

## 📝 License

MIT

## 👤 Author

Ümit UZ <umit@umituz.com>

