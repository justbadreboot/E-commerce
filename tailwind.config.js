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
      margin:{
        'l-35':'2.188rem auto 0'
      },
      borderRadius:{
        'l-50':'0 0 3.125rem 3.125rem',
        'l-50%':'50%'
      },
      backgroundSize:{
        'l-2280':'1.375rem 5rem'
      },
      backgroundPosition: {
        'l-080':'0 5rem',
        'l-00': '0 0'
      },
      boxShadow:{
        'l-00':'0 0 rgb(48,195,228) inset',
      },
      backgroundImage:{
        'l-lg':'linear-gradient(rgb(48,195,228) 6.25rem, transparent 0)',
      },
      keyframes:{
        loading:{
          '0%':{backgroundPosition: '0 5rem'},
          '100%':{backgroundPosition: '0 0'}
        },
        loading2:{
          '0%': { boxShadow: '4px -10px rgba(0, 0, 0, 0), 6px 0px rgba(0, 0, 0, 0), 8px -15px rgba(0, 0, 0, 0), 12px 0px rgba(0, 0, 0, 0)'},
          '20%':{ boxShadow: '4px -20px rgba(0, 0, 0, 0), 8px -10px rgba(0, 0, 0, 0), 10px -30px rgba(0, 0, 0, 0.5), 15px -5px rgba(0, 0, 0, 0)'},
          '40%':{ boxShadow: '2px -40px rgba(0, 0, 0, 0.5), 8px -30px rgba(0, 0, 0, 0.4), 8px -60px rgba(0, 0, 0, 0.5), 12px -15px rgba(0, 0, 0, 0.5)'},
          '60%':{ boxShadow: '4px -60px rgba(0, 0, 0, 0.5), 6px -50px rgba(0, 0, 0, 0.4), 10px -90px rgba(0, 0, 0, 0.5), 15px -25px rgba(0, 0, 0, 0.5)'},
          '80%':{ boxShadow: '2px -80px rgba(0, 0, 0, 0.5), 4px -70px rgba(0, 0, 0, 0.4), 8px -120px rgba(0, 0, 0, 0), 12px -35px rgba(0, 0, 0, 0.5)'},
          '100%':{ boxShadow: '4px -100px rgba(0, 0, 0, 0), 8px -90px rgba(0, 0, 0, 0), 10px -120px rgba(0, 0, 0, 0), 15px -45px rgba(0, 0, 0, 0)'},
        }
      },
      animation:{
        loading:'loading 6s linear infinite',
        loading2: 'loading2 6s linear infinite'
      }
    },
  },
}