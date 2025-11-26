import * as React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as DiIcons from 'react-icons/di';
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as GrIcons from 'react-icons/gr';
import * as HiIcons from 'react-icons/hi';
import * as Hi2Icons from 'react-icons/hi2';
import * as ImIcons from 'react-icons/im';
import * as IoIcons from 'react-icons/io5';
import * as Io4Icons from 'react-icons/io';
import * as LiaIcons from 'react-icons/lia';
import * as LuIcons from 'react-icons/lu';
import * as MdcIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';
import * as RiIcons from 'react-icons/ri';
import * as RxIcons from 'react-icons/rx';
import * as SiIcons from 'react-icons/si';
import * as SlIcons from 'react-icons/sl';
import * as TbIcons from 'react-icons/tb';
import * as TfiIcons from 'react-icons/tfi';
import * as TiIcons from 'react-icons/ti';
import * as VscIcons from 'react-icons/vsc';
import * as WiIcons from 'react-icons/wi';
import { IconBaseProps, IconType } from 'react-icons';

// Mapping of prefixes to libraries
const iconLibraries = {
    Fa: FaIcons,
    Fa6: Fa6Icons,
    Md: MdIcons,
    Mdc: MdcIcons,
    Ai: AiIcons,
    Bi: BiIcons,
    Bs: BsIcons,
    Cg: CgIcons,
    Di: DiIcons,
    Fi: FiIcons,
    Fc: FcIcons,
    Gi: GiIcons,
    Go: GoIcons,
    Gr: GrIcons,
    Hi: HiIcons,
    Hi2: Hi2Icons,
    Im: ImIcons,
    Io: IoIcons,
    Io4: Io4Icons,
    Lia: LiaIcons,
    Lu: LuIcons,
    Pi: PiIcons,
    Ri: RiIcons,
    Rx: RxIcons,
    Si: SiIcons,
    Sl: SlIcons,
    Tb: TbIcons,
    Tfi: TfiIcons,
    Ti: TiIcons,
    Vsc: VscIcons,
    Wi: WiIcons,
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
    // Extract the icon name prefix (e.g.: "Fa" from "FaBeer", "Hi2" from "Hi2Home")
    const iconStr = iconName as string;
    
    // Try to match 3-character prefix first (e.g., "Hi2", "Fa6", "Io4", "Mdc", "Lia", "Tfi")
    let prefix = iconStr.match(/^[A-Z][a-z]\d/)?.[0] as keyof IconLibraries | undefined;
    
    // If no 3-char prefix, try 3-letter prefix (e.g., "Mdc", "Lia", "Tfi")
    if (!prefix) {
        prefix = iconStr.match(/^[A-Z][a-z]{2}/)?.[0] as keyof IconLibraries | undefined;
    }
    
    // If still no match, try 2-character prefix (e.g., "Fa", "Md", "Ai")
    if (!prefix) {
        prefix = iconStr.match(/^[A-Z][a-z]/)?.[0] as keyof IconLibraries | undefined;
    }
    
    if (!prefix) {
        console.warn(`Invalid icon: ${iconName}. The name must follow the prefix pattern (e.g.: FaBeer, MdHome, Hi2Home)`);
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