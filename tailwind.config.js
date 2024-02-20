
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--bg-primary)',
        btnHighlight: 'var(--btn-highlight)',
        btnPrimary: 'var(--btn-primary)',
        btnSecondary: 'var(--btn-secondary)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textInfo: 'var(--text-info)',
        textHighlight: 'var(--text-highlight)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}