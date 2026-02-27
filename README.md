# Dynamic React Icon

[![npm version](https://img.shields.io/npm/v/dynamic-react-icon.svg)](https://www.npmjs.com/package/dynamic-react-icon)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A dynamic React component for rendering [react-icons](https://react-icons.github.io/react-icons/) dynamically based on icon name strings. Perfect for scenarios where you need to render icons from database values, API responses, or user input.

## ✨ Features

- 🎯 **Type-Safe**: Full TypeScript support with autocomplete for all icon names
- 🔄 **Dynamic Rendering**: Render icons based on string values
- 📦 **Multiple Icon Libraries**: Supports 30+ icon libraries from react-icons
- 🎨 **Fully Customizable**: All react-icons props supported (size, color, className, etc.)
- 🛡️ **Error Handling**: Graceful fallback with configurable fallback icons
- 🔗 **Generic String Support**: Pass any string as icon name (with fallback support)
- ⚛️ **React 16.8+**: Compatible with React 16.8, 17, 18, and 19

## 🎨 Supported Icon Libraries

The component supports **30+ icon libraries** from react-icons:

| Prefix | Library | Example |
|--------|---------|---------|
| `Fa` | Font Awesome 5 | `FaBeer`, `FaReact`, `FaGithub` |
| `Fa6` | Font Awesome 6 | `Fa6React`, `Fa6Github` |
| `Md` | Material Design | `MdHome`, `MdSettings`, `MdSearch` |
| `Ai` | Ant Design | `AiOutlineUser`, `AiOutlineHeart` |
| `Bi` | Bootstrap Icons | `BiUser`, `BiHome` |
| `Bs` | Bootstrap Icons | `BsHeart`, `BsGithub` |
| `Cg` | css.gg | `CgProfile`, `CgSearch` |
| `Di` | Devicons | `DiReact`, `DiJavascript` |
| `Fi` | Feather | `FiSettings`, `FiUser` |
| `Fc` | Flat Color Icons | `FcLinux`, `FcAndroidOs` |
| `Gi` | Game Icons | `GiArcher`, `GiDragonfly` |
| `Go` | Github Octicons | `GoRepo`, `GoGist` |
| `Gr` | Grommet Icons | `GrAdd`, `GrCircleInformation` |
| `Hi` | Heroicons 1 | `HiHome`, `HiUser` |
| `Hi2` | Heroicons 2 | `Hi2Home`, `Hi2User` |
| `Im` | IcoMoon Free | `ImHome`, `ImUser` |
| `Io` | Ionicons 5 | `IoHome`, `IoSettings` |
| `Io4` | Ionicons 4 | `Io4IosHome`, `Io4MdHome` |
| `Lia` | Icons8 Line Awesome | `LiaHomeSolid`, `LiaUserSolid` |
| `Lu` | Lucide | `LuHome`, `LuUser` |
| `Pi` | Phosphor Icons | `PiHouse`, `PiUser` |
| `Ri` | Remix Icons | `RiHome2Line`, `RiUserLine` |
| `Rx` | Radix Icons | `RxHome`, `RxAvatar` |
| `Si` | Simple Icons | `SiReact`, `SiTypescript` |
| `Sl` | Simple Line Icons | `SlHome`, `SlUser` |
| `Tb` | Tabler Icons | `TbHome`, `TbUser` |
| `Tfi` | Themify Icons | `TfiHome`, `TfiUser` |
| `Ti` | Typicons | `TiHome`, `TiUser` |
| `Vsc` | VS Code Icons | `VscHome`, `VscAccount` |
| `Wi` | Weather Icons | `WiDaySunny`, `WiNightClear` |

[Browse all available icons →](https://react-icons.github.io/react-icons/)

## 📦 Installation

```bash
npm install dynamic-react-icon react-icons
```

```bash
yarn add dynamic-react-icon react-icons
```

```bash
pnpm add dynamic-react-icon react-icons
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { DynamicReactIcon } from 'dynamic-react-icon';

function App() {
  return (
    <div>
      <DynamicReactIcon iconName="FaBeer" />
      <DynamicReactIcon iconName="MdHome" size={32} />
      <DynamicReactIcon iconName="AiOutlineUser" color="blue" />
    </div>
  );
}
```

### With Props

```tsx
<DynamicReactIcon 
  iconName="FaReact" 
  size={48}
  color="#61dafb"
  className="my-icon-class"
  style={{ marginRight: '10px' }}
/>
```

### With Fallback Icon

```tsx
// If iconName doesn't exist, fallback icon will be shown
<DynamicReactIcon 
  iconName="FaInvalidIcon" 
  fallback="FaBeer"
  size={24}
/>

// With dynamic data
<DynamicReactIcon 
  iconName={dynamicIconFromAPI}
  fallback="FaQuestionCircle"
  size={32}
/>
```

### With Generic Strings

```tsx
// Now you can pass any string as iconName
const getIconName = (type: string): string => {
  return `Fa${type}`; // Returns 'FaBeer', 'FaHome', etc.
};

<DynamicReactIcon 
  iconName={getIconName('Beer')}
  fallback="FaUser"
/>
```

### Dynamic from Data

```tsx
function IconList({ items }) {
  return (
    <div>
      {items.map(item => (
        <DynamicReactIcon 
          key={item.id}
          iconName={item.iconName}
          size={24}
        />
      ))}
    </div>
  );
}

// Usage
const items = [
  { id: 1, iconName: 'FaHome' },
  { id: 2, iconName: 'MdSettings' },
  { id: 3, iconName: 'AiOutlineHeart' }
];
```

## 📚 TypeScript Support

This package includes full TypeScript definitions with autocomplete for all available icons:

```tsx
import { DynamicReactIcon, AllIconNames } from 'dynamic-react-icon';

// TypeScript will autocomplete all valid icon names
const iconName: AllIconNames = 'FaBeer'; // ✅ Valid
const invalidIcon: AllIconNames = 'InvalidIcon'; // ❌ TypeScript error

function MyComponent() {
  return <DynamicReactIcon iconName={iconName} />;
}
```

## 🔧 API Reference

### Props

The `DynamicReactIcon` component accepts all standard props from [react-icons](https://react-icons.github.io/react-icons/):

```tsx
interface DynamicIconProps extends IconBaseProps {
  iconName: AllIconNames | string;    // Icon name (required) - accepts typed names or any string
  fallback?: AllIconNames | string;   // Fallback icon name if primary icon is not found
  className?: string;                  // CSS class name
  style?: React.CSSProperties;         // Inline styles
  size?: string | number;              // Icon size
  color?: string;                      // Icon color
  title?: string;                      // Icon title
  // ... all other react-icons props
}
```

#### `iconName` (required)
- **Type**: `AllIconNames | string`
- **Description**: The name of the icon to render. Can be a typed icon name for autocomplete or any string for dynamic usage.

#### `fallback` (optional)
- **Type**: `AllIconNames | string`
- **Description**: A fallback icon name to display if the primary `iconName` is not found.

## 🌐 Framework-Specific Usage

### Next.js App Router (13+)

When using with Next.js App Router, you need to mark the component as a Client Component:

```tsx
'use client'; // Add this directive

import { DynamicReactIcon } from 'dynamic-react-icon';

export default function MyComponent() {
  return <DynamicReactIcon iconName="FaReact" />;
}
```

### Next.js Pages Router

Works without any additional configuration:

```tsx
import { DynamicReactIcon } from 'dynamic-react-icon';

export default function MyPage() {
  return <DynamicReactIcon iconName="FaHome" />;
}
```

### Vite + React

```tsx
import { DynamicReactIcon } from 'dynamic-react-icon';

function App() {
  return <DynamicReactIcon iconName="FaReact" />;
}

export default App;
```

### Create React App

```tsx
import { DynamicReactIcon } from 'dynamic-react-icon';

function App() {
  return (
    <div className="App">
      <DynamicReactIcon iconName="FaBeer" size={48} />
    </div>
  );
}

export default App;
```

## 🎯 Use Cases

### From Database/API

```tsx
function ProductCard({ product }) {
  return (
    <div>
      <DynamicReactIcon iconName={product.icon} size={32} />
      <h3>{product.name}</h3>
    </div>
  );
}
```

### With UI Libraries

#### Material-UI

```tsx
import { IconButton } from '@mui/material';
import { DynamicReactIcon } from 'dynamic-react-icon';

<IconButton>
  <DynamicReactIcon iconName="MdSettings" />
</IconButton>
```

#### Chakra UI

```tsx
import { Button } from '@chakra-ui/react';
import { DynamicReactIcon } from 'dynamic-react-icon';

<Button leftIcon={<DynamicReactIcon iconName="FaPlus" />}>
  Add Item
</Button>
```

#### Tailwind CSS

```tsx
<DynamicReactIcon 
  iconName="FaReact" 
  className="text-blue-500 hover:text-blue-700" 
  size={24}
/>
```

## ⚠️ Important Notes

### Bundle Size

This package imports all supported icon libraries from react-icons, resulting in:
- **Uncompressed**: ~9 MB
- **Gzipped**: ~2.2 MB
- **Brotli**: ~1.8 MB (estimated)

This is necessary to enable dynamic icon rendering. If bundle size is critical for your application and you only use a specific icon library, consider importing icons directly from react-icons instead.

### Error Handling

The component includes built-in error handling:

```tsx
// Invalid icon name without fallback
<DynamicReactIcon iconName="InvalidIcon" />
// Console warning: "Icon not found: InvalidIcon..."
// Renders: null (no error thrown)

// Invalid icon name with fallback
<DynamicReactIcon 
  iconName="InvalidIcon" 
  fallback="FaQuestionCircle"
/>
// Falls back to FaQuestionCircle
// Renders: <FaQuestionCircle />

// If even the fallback is invalid
<DynamicReactIcon 
  iconName="InvalidIcon" 
  fallback="AlsoInvalid"
/>
// Console warning: "Fallback icon not found: AlsoInvalid"
// Renders: null (no error thrown)
```

### Server-Side Rendering

- ✅ **Next.js Pages Router**: Works out of the box
- ⚠️ **Next.js App Router**: Requires `'use client'` directive
- ✅ **Gatsby**: Works with standard React components
- ✅ **Remix**: Works in client-side components

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © Dynamic React Icon Contributors

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/dynamic-react-icon)
- [react-icons Documentation](https://react-icons.github.io/react-icons/)
- [GitHub Repository](https://github.com/daniel-carlos/DynamicReactIcon)
- [Report Issues](https://github.com/daniel-carlos/DynamicReactIcon/issues)

## 🙏 Acknowledgments

Built on top of the excellent [react-icons](https://github.com/react-icons/react-icons) library.

---

Made with ❤️ for the React community
