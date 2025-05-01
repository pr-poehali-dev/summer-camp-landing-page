
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: keyof typeof LucideIcons;
  fallback?: keyof typeof LucideIcons;
  color?: string;
  size?: number;
  className?: string;
  [key: string]: unknown;
};

const Icon: React.FC<IconProps> = ({
  name,
  fallback = "HelpCircle",
  color,
  size = 24,
  className,
  ...props
}) => {
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];
  
  return (
    <LucideIcon
      color={color}
      size={size}
      className={cn(className)}
      {...props}
    />
  );
};

export default Icon;
