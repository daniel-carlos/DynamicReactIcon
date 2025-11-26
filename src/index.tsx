import * as React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import { IconBaseProps, IconType } from 'react-icons';

// Mapping of prefixes to libraries
const iconLibraries = {
    Fa: FaIcons,
    Md: MdIcons,
    Ai: AiIcons,
    Bi: BiIcons,
    Bs: BsIcons,
    Fi: FiIcons,
    Io: IoIcons,
    Ri: RiIcons,
} as const;

// Extract all available icon names
type IconLibraries = typeof iconLibraries;
type IconNames<T> = T extends Record<string, any> ? keyof T : never;
export type AllIconNames = {
    [K in keyof IconLibraries]: IconNames<IconLibraries[K]>
}[keyof IconLibraries];

interface DynamicIconProps extends IconBaseProps {
    iconName: AllIconNames;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    style?: React.CSSProperties;
}

export const DynamicReactIcon = ({ iconName, className, style, ...props }: DynamicIconProps) => {
    // Extract the icon name prefix (e.g.: "Fa" from "FaBeer")
    const prefix = (iconName as string).match(/^[A-Z][a-z]/)?.[0] as keyof IconLibraries | undefined;
    
    if (!prefix) {
        console.warn(`Invalid icon: ${iconName}. The name must follow the prefix pattern (e.g.: FaBeer, MdHome)`);
        return null;
    }
    
    const library = iconLibraries[prefix];
    
    if (!library) {
        console.warn(`Library not found for prefix: ${prefix}`);
        return null;
    }
    
    const IconComponent = library[iconName as keyof typeof library] as IconType;
    
    if (!IconComponent) {
        console.warn(`Icon not found: ${iconName} in library ${prefix}`);
        return null;
    }
    
    return <IconComponent className={`${className}`} style={style} {...props} />;
};

// Usage:
// <DynamicReactIcon iconName="FaBeer" size={24} color="blue" />
// <DynamicReactIcon iconName="MdHome" size={32} />
// <DynamicReactIcon iconName="AiOutlineUser" className="text-red-500" />