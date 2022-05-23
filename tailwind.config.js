module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_50: "#f1f1f1",
        gray_900_66: "#15143866",
        blue_A700: "#0061fa",
        gray_900: "#151438",
        gray_200: "#eaeaed",
        black_900_2d: "#0000002d",
        blue_50: "#e2ecff",
        gray_50: "#f8f8f8",
        teal_A400: "#25dac4",
        black_900_d8: "#050505d8",
        blue_51: "#d8e8ff",
        black_900: "#000000",
        indigo_900: "#1e0d62",
        white_A700: "#ffffff",
        pink_400: "#e8397d",
        black_900_26: "#00000026",
      },
      fontFamily: { dmsans: "DM Sans", poppins: "Poppins" },
      fontSize: {
        fs11: "11px",
        fs12: "12px",
        fs13: "13px",
        fs14: "14px",
        fs15: "15px",
        fs16: "16px",
        fs17: "17px",
        fs18: "18px",
        fs19: "19px",
        fs20: "20px",
        fs21: "21px",
        fs22: "22px",
        fs24: "24px",
        fs25: "25px",
        fs27: "27px",
        fs28: "28px",
        fs29: "29px",
        fs31: "31px",
        fs32: "32px",
        fs33: "33px",
        fs34: "34px",
        fs36: "36px",
        fs37: "37px",
        fs38: "38px",
        fs40: "40px",
        fs41: "41px",
        fs42: "42px",
        fs43: "43px",
        fs44: "44px",
        fs46: "46px",
        fs49: "49px",
        fs51: "51px",
        fs53: "53px",
        fs58: "58px",
        fs59: "59px",
        fs71: "71px",
      },
      letterSpacing: { ls1: "-1px", ls11: "1px", ls2: "-2px", ls21: "2px" },
      borderRadius: { radius3: "3px", radius10: "10px", radius100: "100px" },
      lineHeight: {
        lh: "normal",
        lh20: "20px",
        lh22: "22px",
        lh23: "23px",
        lh25: "25px",
        lh26: "26px",
        lh28: "28px",
        lh29: "29px",
        lh32: "32px",
        lh34: "34px",
        lh39: "39px",
        lh41: "41px",
        lh47: "47px",
        lh53: "53px",
        lh56: "56px",
        lh64: "64px",
        lh72: "72px",
        lh86: "86px",
        lh2600: "26.00px",
        lh2800: "28.00px",
        lh3200: "32.00px",
        lh5200: "52.00px",
        lh7000: "70.00px",
      },
      opacity: { op2: 0.2, op3: 0.3, op5: 0.5, op7: 0.7, op8: 0.8, op12: 0.12 },
      boxShadow: {
        bs: "0px 1px  24px 0px #0000002d",
        bs1: "0px 4px  24px 0px #00000026",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
