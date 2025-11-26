# Dynamic React Icon

A lightweight and type-safe React component for dynamically rendering icons from [react-icons](https://react-icons.github.io/react-icons/) based on icon names.

## Features

- ✅ **Type-safe**: Full TypeScript support with autocomplete for all available icon names
- 🎯 **Dynamic**: Render icons dynamically based on string names
- 📦 **Lightweight**: No extra dependencies beyond React and react-icons
- 🔧 **Flexible**: Supports all react-icons props (size, color, className, style, etc.)
- 🚀 **Tree-shakable**: Only imports the icon libraries you use

## Supported Icon Libraries

- Font Awesome (`Fa`)
- Material Design (`Md`)
- Ant Design (`Ai`)
- Bootstrap (`Bs`, `Bi`)
- Feather (`Fi`)
- Ionicons (`Io`)
- Remix Icon (`Ri`)

## Installation

```bash
npm install dynamic-react-icon
```

Or with yarn:

```bash
yarn add dynamic-react-icon
```

**Peer Dependencies:**
This package requires `react` and `react-icons` to be installed:

```bash
npm install react react-icons
```

## Usage

### Basic Example

```tsx
import { DynamicReactIcon } from 'dynamic-react-icon';

function App() {
  return (
    <div>
      <DynamicReactIcon iconName="FaBeer" size={24} color="blue" />
      <DynamicReactIcon iconName="MdHome" size={32} />
      <DynamicReactIcon iconName="AiOutlineUser" className="text-red-500" />
    </div>
  );
}
```

### With Custom Styling

```tsx
<DynamicReactIcon 
  iconName="FaHeart" 
  size={48} 
  color="#ff0000"
  style={{ marginRight: '10px' }}
  className="custom-icon-class"
/>
```

### Dynamic Icon Selection

```tsx
function IconSelector({ iconName }) {
  return <DynamicReactIcon iconName={iconName} size={30} />;
}

// Usage
<IconSelector iconName="FaGithub" />
<IconSelector iconName="MdEmail" />
```

### With TypeScript

The component provides full type safety with autocomplete for all available icons:

```tsx
import { DynamicReactIcon, AllIconNames } from 'dynamic-react-icon';

// Type-safe icon name
const iconName: AllIconNames = "FaBeer"; // ✅ Valid
const invalidIcon: AllIconNames = "InvalidIcon"; // ❌ TypeScript error

function MyComponent() {
  return <DynamicReactIcon iconName={iconName} />;
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `iconName` | `AllIconNames` | Yes | Name of the icon (e.g., "FaBeer", "MdHome") |
| `size` | `string \| number` | No | Icon size |
| `color` | `string` | No | Icon color |
| `className` | `string` | No | CSS class name |
| `style` | `CSSProperties` | No | Inline styles |
| ...props | `IconBaseProps` | No | Any other props from react-icons |

## Finding Icon Names

Visit [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/) to browse and search for available icons. The icon name must include the library prefix (e.g., `Fa`, `Md`, `Ai`).

## Error Handling

The component includes built-in error handling:
- Invalid icon names will show a console warning and return `null`
- Unknown library prefixes will show a console warning and return `null`
- Non-existent icons in a valid library will show a console warning and return `null`

## Development

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run dev
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Your Name

## Links

- [GitHub Repository](#)
- [NPM Package](#)
- [Report Issues](#)
