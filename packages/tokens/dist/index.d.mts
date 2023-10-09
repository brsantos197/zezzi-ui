declare const space: {
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 40: "10rem";
    readonly 64: "16rem";
    readonly 80: "20rem";
};

declare const radii: {
    readonly px: "1px";
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "8px";
    readonly lg: "16px";
    readonly full: "99999px";
};

declare const colors: {
    readonly black: "#000000";
    readonly white: "#ffffff";
    readonly slate50: "#f8fafc";
    readonly slate100: "#f1f5f9";
    readonly slate200: "#e2e8f0";
    readonly slate300: "#cbd5e1";
    readonly slate400: "#94a3b8";
    readonly slate500: "#64748b";
    readonly slate600: "#475569";
    readonly slate700: "#334155";
    readonly slate800: "#1e293b";
    readonly slate900: "#0f172a";
    readonly slate950: "#020617";
    readonly gray50: "#f9fafb";
    readonly gray100: "#f3f4f6";
    readonly gray200: "#e5e7eb";
    readonly gray300: "#d1d5db";
    readonly gray400: "#9ca3af";
    readonly gray500: "#6b7280";
    readonly gray600: "#4b5563";
    readonly gray700: "#374151";
    readonly gray800: "#1f2937";
    readonly gray900: "#111827";
    readonly gray950: "#030712";
    readonly zinc50: "#fafafa";
    readonly zinc100: "#f4f4f5";
    readonly zinc200: "#e4e4e7";
    readonly zinc300: "#d4d4d8";
    readonly zinc400: "#a1a1aa";
    readonly zinc500: "#71717a";
    readonly zinc600: "#52525b";
    readonly zinc700: "#3f3f46";
    readonly zinc800: "#27272a";
    readonly zinc900: "#18181b";
    readonly zinc950: "#09090b";
    readonly neutral50: "#fafafa";
    readonly neutral100: "#f5f5f5";
    readonly neutral200: "#e5e5e5";
    readonly neutral300: "#d4d4d4";
    readonly neutral400: "#a3a3a3";
    readonly neutral500: "#737373";
    readonly neutral600: "#525252";
    readonly neutral700: "#404040";
    readonly neutral800: "#262626";
    readonly neutral900: "#171717";
    readonly neutral950: "#0a0a0a";
    readonly stone50: "#fafaf9";
    readonly stone100: "#f5f5f4";
    readonly stone200: "#e7e5e4";
    readonly stone300: "#d6d3d1";
    readonly stone400: "#a8a29e";
    readonly stone500: "#78716c";
    readonly stone600: "#57534e";
    readonly stone700: "#44403c";
    readonly stone800: "#292524";
    readonly stone900: "#1c1917";
    readonly stone950: "#0c0a09";
    readonly red50: "#fef2f2";
    readonly red100: "#fee2e2";
    readonly red200: "#fecaca";
    readonly red300: "#fca5a5";
    readonly red400: "#f87171";
    readonly red500: "#ef4444";
    readonly red600: "#dc2626";
    readonly red700: "#b91c1c";
    readonly red800: "#991b1b";
    readonly red900: "#7f1d1d";
    readonly red950: "#450a0a";
    readonly orange50: "#fff7ed";
    readonly orange100: "#ffedd5";
    readonly orange200: "#fed7aa";
    readonly orange300: "#fdba74";
    readonly orange400: "#fb923c";
    readonly orange500: "#f97316";
    readonly orange600: "#ea580c";
    readonly orange700: "#c2410c";
    readonly orange800: "#9a3412";
    readonly orange900: "#7c2d12";
    readonly orange950: "#431407";
    readonly amber50: "#fffbeb";
    readonly amber100: "#fef3c7";
    readonly amber200: "#fde68a";
    readonly amber300: "#fcd34d";
    readonly amber400: "#fbbf24";
    readonly amber500: "#f59e0b";
    readonly amber600: "#d97706";
    readonly amber700: "#b45309";
    readonly amber800: "#92400e";
    readonly amber900: "#78350f";
    readonly amber950: "#451a03";
    readonly yellow50: "#fefce8";
    readonly yellow100: "#fef9c3";
    readonly yellow200: "#fef08a";
    readonly yellow300: "#fde047";
    readonly yellow400: "#facc15";
    readonly yellow500: "#eab308";
    readonly yellow600: "#ca8a04";
    readonly yellow700: "#a16207";
    readonly yellow800: "#854d0e";
    readonly yellow900: "#713f12";
    readonly yellow950: "#422006";
    readonly lime50: "#f7fee7";
    readonly lime100: "#ecfccb";
    readonly lime200: "#d9f99d";
    readonly lime300: "#bef264";
    readonly lime400: "#a3e635";
    readonly lime500: "#84cc16";
    readonly lime600: "#65a30d";
    readonly lime700: "#4d7c0f";
    readonly lime800: "#3f6212";
    readonly lime900: "#365314";
    readonly lime950: "#1a2e05";
    readonly green50: "#f0fdf4";
    readonly green100: "#dcfce7";
    readonly green200: "#bbf7d0";
    readonly green300: "#86efac";
    readonly green400: "#4ade80";
    readonly green500: "#22c55e";
    readonly green600: "#16a34a";
    readonly green700: "#15803d";
    readonly green800: "#166534";
    readonly green900: "#14532d";
    readonly green950: "#052e16";
    readonly emerald50: "#ecfdf5";
    readonly emerald100: "#d1fae5";
    readonly emerald200: "#a7f3d0";
    readonly emerald300: "#6ee7b7";
    readonly emerald400: "#34d399";
    readonly emerald500: "#10b981";
    readonly emerald600: "#059669";
    readonly emerald700: "#047857";
    readonly emerald800: "#065f46";
    readonly emerald900: "#064e3b";
    readonly emerald950: "#022c22";
    readonly teal50: "#f0fdfa";
    readonly teal100: "#ccfbf1";
    readonly teal200: "#99f6e4";
    readonly teal300: "#5eead4";
    readonly teal400: "#2dd4bf";
    readonly teal500: "#14b8a6";
    readonly teal600: "#0d9488";
    readonly teal700: "#0f766e";
    readonly teal800: "#115e59";
    readonly teal900: "#134e4a";
    readonly teal950: "#042f2e";
    readonly cyan50: "#ecfeff";
    readonly cyan100: "#cffafe";
    readonly cyan200: "#a5f3fc";
    readonly cyan300: "#67e8f9";
    readonly cyan400: "#22d3ee";
    readonly cyan500: "#06b6d4";
    readonly cyan600: "#0891b2";
    readonly cyan700: "#0e7490";
    readonly cyan800: "#155e75";
    readonly cyan900: "#164e63";
    readonly cyan950: "#083344";
    readonly sky50: "#f0f9ff";
    readonly sky100: "#e0f2fe";
    readonly sky200: "#bae6fd";
    readonly sky300: "#7dd3fc";
    readonly sky400: "#38bdf8";
    readonly sky500: "#0ea5e9";
    readonly sky600: "#0284c7";
    readonly sky700: "#0369a1";
    readonly sky800: "#075985";
    readonly sky900: "#0c4a6e";
    readonly sky950: "#082f49";
    readonly blue50: "#eff6ff";
    readonly blue100: "#dbeafe";
    readonly blue200: "#bfdbfe";
    readonly blue300: "#93c5fd";
    readonly blue400: "#60a5fa";
    readonly blue500: "#3b82f6";
    readonly blue600: "#2563eb";
    readonly blue700: "#1d4ed8";
    readonly blue800: "#1e40af";
    readonly blue900: "#1e3a8a";
    readonly blue950: "#172554";
    readonly indigo50: "#eef2ff";
    readonly indigo100: "#e0e7ff";
    readonly indigo200: "#c7d2fe";
    readonly indigo300: "#a5b4fc";
    readonly indigo400: "#818cf8";
    readonly indigo500: "#6366f1";
    readonly indigo600: "#4f46e5";
    readonly indigo700: "#4338ca";
    readonly indigo800: "#3730a3";
    readonly indigo900: "#312e81";
    readonly indigo950: "#1e1b4b";
    readonly violet50: "#f5f3ff";
    readonly violet100: "#ede9fe";
    readonly violet200: "#ddd6fe";
    readonly violet300: "#c4b5fd";
    readonly violet400: "#a78bfa";
    readonly violet500: "#8b5cf6";
    readonly violet600: "#7c3aed";
    readonly violet700: "#6d28d9";
    readonly violet800: "#5b21b6";
    readonly violet900: "#4c1d95";
    readonly violet950: "#2e1065";
    readonly purple50: "#faf5ff";
    readonly purple100: "#f3e8ff";
    readonly purple200: "#e9d5ff";
    readonly purple300: "#d8b4fe";
    readonly purple400: "#c084fc";
    readonly purple500: "#a855f7";
    readonly purple600: "#9333ea";
    readonly purple700: "#7e22ce";
    readonly purple800: "#6b21a8";
    readonly purple900: "#581c87";
    readonly purple950: "#3b0764";
    readonly fuchsia50: "#fdf4ff";
    readonly fuchsia100: "#fae8ff";
    readonly fuchsia200: "#f5d0fe";
    readonly fuchsia300: "#f0abfc";
    readonly fuchsia400: "#e879f9";
    readonly fuchsia500: "#d946ef";
    readonly fuchsia600: "#c026d3";
    readonly fuchsia700: "#a21caf";
    readonly fuchsia800: "#86198f";
    readonly fuchsia900: "#701a75";
    readonly fuchsia950: "#4a044e";
    readonly pink50: "#fdf2f8";
    readonly pink100: "#fce7f3";
    readonly pink200: "#fbcfe8";
    readonly pink300: "#f9a8d4";
    readonly pink400: "#f472b6";
    readonly pink500: "#ec4899";
    readonly pink600: "#db2777";
    readonly pink700: "#be185d";
    readonly pink800: "#9d174d";
    readonly pink900: "#831843";
    readonly pink950: "#500724";
    readonly rose50: "#fff1f2";
    readonly rose100: "#ffe4e6";
    readonly rose200: "#fecdd3";
    readonly rose300: "#fda4af";
    readonly rose400: "#fb7185";
    readonly rose500: "#f43f5e";
    readonly rose600: "#e11d48";
    readonly rose700: "#be123c";
    readonly rose800: "#9f1239";
    readonly rose900: "#881337";
    readonly rose950: "#4c0519";
};

declare const fonts: {
    readonly default: "Roboto, sans-serif";
    readonly code: "monospace";
};

declare const fontSizes: {
    readonly xxs: "0.625rem";
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '4xl': "2rem";
    readonly '5xl': "2.25rem";
    readonly '6xl': "3rem";
    readonly '7xl': "4rem";
    readonly '8xl': "4.5rem";
    readonly '9xl': "6rem";
};

declare const fontWeights: {
    readonly regular: "400";
    readonly medium: "500";
    readonly bold: "700";
};

declare const lineHeights: {
    readonly shorter: "125%";
    readonly short: "140%";
    readonly base: "160%";
    readonly tall: "180%";
};

export { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space };
