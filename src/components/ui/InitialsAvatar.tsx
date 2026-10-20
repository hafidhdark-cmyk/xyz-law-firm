interface InitialsAvatarProps {
  initials: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function InitialsAvatar({
  initials,
  name,
  size = "md",
  className = "",
}: InitialsAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-11 h-11 text-sm",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-2xl font-serif",
  };

  // Generate subtle tone based on initials
  const charCode = (initials.charCodeAt(0) || 65) + (initials.charCodeAt(1) || 66);
  const gradients = [
    "from-navy-900 via-navy-800 to-navy-950 text-gold-300 border-gold-500/40",
    "from-navy-950 via-slate-900 to-navy-850 text-amber-200 border-amber-600/30",
    "from-slate-900 via-navy-900 to-zinc-900 text-gold-400 border-gold-400/40",
  ];
  const selectedGradient = gradients[charCode % gradients.length];

  return (
    <div
      title={name}
      className={`relative inline-flex items-center justify-center font-semibold rounded-sm bg-gradient-to-br border shadow-sm select-none transition-transform group-hover:scale-105 ${selectedGradient} ${sizeClasses[size]} ${className}`}
    >
      <span className="tracking-wider">{initials}</span>
      {/* Subtle micro gold corner notch */}
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gold-400/60 pointer-events-none" />
    </div>
  );
}
