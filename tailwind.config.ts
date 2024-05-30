import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FF8A34",
        darkBg: "#2A2A42"
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90deg, rgba(1, 1, 1, 0.5) 0%, rgba(1, 1, 144, 0.5) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
