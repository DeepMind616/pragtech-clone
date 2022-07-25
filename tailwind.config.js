module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1560px",
      },
      colors: {
        primary: {
          50: "#f6faf7",
          100: "#edf5ef",
          200: "#d1e7d7",
          300: "#b5d9bf",
          400: "#7ebc8e",
          500: "#479f5e",
          600: "#408f55",
          700: "#357747",
          800: "#2b5f38",
          900: "#234e2e",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6 ",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
