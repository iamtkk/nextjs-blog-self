import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2.5xl": "2.5rem",
      },
      lineHeight: {
        "12": "1.2",
        "13": "1.3",
        "14": "1.4",
        "15": "1.5",
      },
    },
  },
  plugins: [],
};
export default config;
