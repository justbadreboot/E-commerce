/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui"), require('@tailwindcss/forms'),],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':{
          100:'#2B97A4',
          80:'#3DB0BD',
          60:'#348D9F',
          40:'#99C6CF',
          20:'#CCE3E7',
        },
        'secondary':{
          100:'#FF8B8B',
          80:'#FF9E9E',
          60:'#F9CBCC',
          40:'#FBDDDD',
          20:'#FDEEEE',
        },
        'ternary':{
          100:'#001F5C',
          80:'#334C7D',
          60:'#66799D',
          40:'#99A5BE',
          20:'#CCD2DE',
          0:'#E6E9EF',
        },
        'base':{
          100:'#2C3131',
          80:'#626262',
          60:'#A9A9A9',
          40:'#CACACA',
          20:'#E9E9E9',
          0:'#FFFFFF',
        },
        'success':{
          100:'#5CC560',
          80:'#75DB79',
          60:'#98E49B',
          40:'#BAEDBC',
          20:'#DDF6DE',
        },
        'warning':{
          100:'#FFAB49',
          80:'#FFBE72',
          60:'#FFC887',
          40:'#FFD7A7',
          20:'#FFE7CA',
        },
        'error':{
          100:'#EB4A4A',
          80:'#FF7474',
          60:'#EE9D9D',
          40:'#F3BEBE',
          20:'#F9DEDE',
        },
        'info':{
          100:'#2685CA',
          80:'#519DD5',
          60:'#7DB6DF',
          40:'#A8CEEA',
          20:'#D4E7F4',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      maxHeight: {
        '560': '35rem',
      },
    },
  },
}