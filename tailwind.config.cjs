/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1f56c4",
        
"secondary": "#90ea81",
        
"accent": "#d1ff70",
        
"neutral": "#25293C",
        
"base-100": "#FFFFFF",
        
"info": "#41BFD8",
        
"success": "#208854",
        
"warning": "#E6B00F",
        
"error": "#E84A6C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
