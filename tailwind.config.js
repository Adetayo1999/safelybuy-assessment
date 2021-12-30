module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        ig: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
      }),
      colors: {
        purple: {
          750: "#8069f6",
          450: "#baadf9",
        },
        green: {
          650: "#6cbc7d",
        },
        red: {
          150: "#e8d8e2",
        },
        blue: {
          150: "#d9dce5",
        },
        gray: {
          150: "#f2f2f2",
        },
      },
    },
  },
  plugins: [],
};
