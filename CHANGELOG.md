# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-26

### Added
- Support for React 19 in peer dependencies
- Support for 22 additional icon libraries from react-icons:
  - Font Awesome 6 (`Fa6`)
  - Heroicons 2 (`Hi2`)
  - css.gg (`Cg`)
  - Devicons (`Di`)
  - Flat Color Icons (`Fc`)
  - Game Icons (`Gi`)
  - Github Octicons (`Go`)
  - Grommet Icons (`Gr`)
  - IcoMoon Free (`Im`)
  - Ionicons 4 (`Io4`)
  - Icons8 Line Awesome (`Lia`)
  - Lucide (`Lu`)
  - Phosphor Icons (`Pi`)
  - Radix Icons (`Rx`)
  - Simple Icons (`Si`)
  - Simple Line Icons (`Sl`)
  - Tabler Icons (`Tb`)
  - Themify Icons (`Tfi`)
  - Typicons (`Ti`)
  - VS Code Icons (`Vsc`)
  - Weather Icons (`Wi`)
- Comprehensive README documentation with:
  - Installation instructions for npm, yarn, and pnpm
  - Framework-specific usage examples (Next.js, Vite, CRA)
  - UI library integration examples (MUI, Chakra UI, Tailwind CSS)
  - TypeScript support documentation
  - Bundle size information
  - Error handling details
- Complete package.json metadata (repository, bugs, homepage, author)

### Changed
- Improved icon prefix detection algorithm to support 3-character prefixes (Hi2, Fa6, Io4, etc.)
- Enhanced error messages to include examples of valid icon names

### Fixed
- Icon prefix pattern matching now correctly handles all react-icons library naming conventions

## [1.0.0] - 2025-11-21

### Added
- Initial release
- Dynamic icon rendering based on icon name strings
- Full TypeScript support with type-safe icon names
- Support for 8 icon libraries from react-icons (Fa, Md, Ai, Bi, Bs, Fi, Io, Ri)
- Built-in error handling with console warnings
- Support for all react-icons props (size, color, className, style, etc.)
