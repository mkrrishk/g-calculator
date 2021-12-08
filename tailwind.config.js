const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
  // mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "gc-default": "#202124",
        "gc-light": "#70757a",
        "gc-btn-gray": "#dadce0",
        "gc-border-gray": "#a5a8ad",
        "gc-btn-light": "#f1f3f4",
        "gc-blue": "#4285f4",
        "gc-border-blue": "#1558d6",
      },
      fontSize: {
        "gc-13": "13px",
        "gc-14": "14px",
        "gc-18": "18px",
      },
      spacing: {
        "gc-22": "22px",
        "gc-28": "28px",
        "gc-72": "72px",
        "gc-182": "182px",
        "gc-300": "300px",
        "gc-652": "652px",
      },
      boxShadow: {
        "gc-btn": "0 1px 6px rgb(32 33 36 / 28%)",
        "gc-btn-result":
          "0 1px 2px 0 rgb(66 133 244 / 45%), 0 3px 6px 2px rgb(66 133 244 / 30%)",
        "gc-input": "inset 0 1px 2px rgba(0 0 0 / 30%)",
      },
      transitionProperty: {
        "gc-text": "height, color, font-size",
        "gc-lh": "line-height",
      },
      transitionDelay: {
        0: "0ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({ addUtilities, e, theme, variants }) => {
      let colors = flattenColorPalette(theme("borderColor"));
      delete colors["default"];

      // Replace or Add custom colors
      if (this.theme?.extend?.colors !== undefined) {
        colors = Object.assign(colors, this.theme.extend.colors);
      }

      const colorMap = Object.keys(colors).map((color) => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
        [`.border-x-${color}`]: {
          borderLeftColor: colors[color],
          borderRightColor: colors[color],
        },
        [`.border-y-${color}`]: {
          borderTopColor: colors[color],
          borderBottomColor: colors[color],
        },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants("borderColor"));
    },
  ],
};
