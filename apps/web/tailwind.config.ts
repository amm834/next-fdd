import type { Config } from "tailwindcss";

import baseConfig from "tailwind-config";

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    presets: [baseConfig],
} satisfies Config;
