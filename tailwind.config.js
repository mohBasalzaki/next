/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './public/**/*.html',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    colors: {
      primary: {
        100: "#0003fa",
        500: "#741b1b",
        900: "#5a0e0e",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};