// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nord: {
          bg: "#2E3440",
          bgLighter: "#3B4252",
          selection: "#434C5E", 
          fg: "#ECEFF4",        
          comment: "#9CA3AF",  
          blue: "#88C0D0",      
          blueDark: "#81A1C1",  
          frost: "#5E81AC",
          aurora: {
            red: "#BF616A",
            orange: "#D08770",
            yellow: "#EBCB8B",
            green: "#A3BE8C",
            purple: "#B48EAD",
          }
        },
      },
    },
  },
  plugins: [],
};
export default config;