const colors = require("tailwindcss/colors");
const alpha = { 100: 'FF', 90: 'E6', 80: 'CC', 70: 'B3', 60: '99', 50: '80', 40: '66', 30: '4D', 20: '33', 10: '1A' };

module.exports = {
   mode: 'jit',
   purge: {
      enabled: true,
      content: [
         './src/assets/scss/*.scss',
         './src/**/*.vue',
         './src/**/*.jsx',
         './src/**/*.js'
      ],
      options: {
         // Generic whitelist safelist for usual CMS class generation
         safelist: [/^bg-/, /^text-/, /^border-/, /^grid-cols-/, /^w-/, /^h-/, /^max-w-/]
      }
   },
   presets: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
        colors: {
          primary: colors.indigo,
          secondary: colors.teal,
          gray: colors.gray,
          blueGray: colors.blueGray,
          coolGray: colors.coolGray,
          warmGray: colors.warmGray,
          red: colors.red,
          orange: colors.orange,
          amber: colors.amber,
          yellow: colors.yellow,
          lime: colors.lime,
          green: colors.green,
          emerald: colors.emerald,
          teal: colors.teal,
          cyan: colors.cyan,
          lightBlue: colors.sky,
          blue: colors.blue,
          indigo: colors.indigo,
          violet: colors.violet,
          purple: colors.purple,
          fuchsia: colors.fuchsia,
          pink: colors.pink,
          rose: colors.rose,
          grayLightest: '#fafbfc',
          grayLight: '#f4f5f7',
          grayMedium: '#e1e4e9',
          mythPaleBlue: '#d8e8ed',
          mythDarkBlue: '#121530'
        },
        fontSize: theme => ({
          'xs':   ['0.75rem', theme('lineHeight.normal')],  // 12
          'sm':   ['0.875rem', theme('lineHeight.normal')], // 14
          'base': ['1rem', theme('lineHeight.normal')],     // 16
          'md':   ['1.125rem', theme('lineHeight.normal')], // 18
          'lg':   ['1.25rem', theme('lineHeight.normal')],  // 20
          'xl':   ['1.5rem', theme('lineHeight.normal')],   // 24
          '2xl':  ['1.875rem', theme('lineHeight.normal')], // 30
          '3xl':  ['2.25rem', theme('lineHeight.normal')],  // 36
          '4xl':  ['3rem', theme('lineHeight.normal')],     // 48
          '5xl':  ['4rem', theme('lineHeight.normal')],     // 64
          '6xl':  ['4.5rem', theme('lineHeight.normal')]    // 72
        }),
        fontFamily: {
         'sans-primary': [
            'Lato'
         ],
         'sans-secondary': [
            'Lato'
         ],
         'serif-primary': [
            'Georgia'
         ],
         },
        boxShadow: theme => ({
          'outline': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20],
          'focus': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20]
        }),
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem'
          }
        },
        height: {
          'screen-fix': 'calc(var(--vh, 1vh) * 100);'
        },
        inset: {
          '0': 0,
          '1/2': '50%'
        },
        transitionDuration: {
          DEFAULT: '500ms'
        },
        transitionTimingFunction: {
          DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        // Plugins
        typography: theme => ({
          default: {
            css: {
              'h2, h3, h4, h5, h6': { 
                fontFamily: theme('fontFamily.sans-primary').join(', '),
                fontWeight: theme('fontWeight.semibold'),
                color: theme('colors.gray.800')
              },
              'h2': {
                fontSize: theme('fontSize.3xl[0]')
              },
              'h3': {
                fontSize: theme('fontSize.2xl[0]')
              },
              'h4': {
                fontSize: theme('fontSize.xl[0]')
              },
              'h5': {
                fontSize: theme('fontSize.lg[0]')
              },
              'h6': {
                fontSize: theme('fontSize.md[0]')
              },
              a: {
                color: theme('colors.primary.500'),
                '&:hover': {
                  color: theme('colors.primary.600'),
                }
              }
            }
          }
        }),
        aspectRatio: {
          '1/1': [1, 1],
          '16/9': [16, 9],
          '4/3': [4, 3]
        },
        columnCount: [ 1, 2, 3 ],
        columnGap: {
          sm: '1rem',
          md: '1.5rem',
          lg: '2rem',
        },
        columnWidth: {
          // sm: '120px',
          // md: '240px',
          // lg: '360px',
        },
        columnRuleColor: false, // will fallback to `borderColor` values
        columnRuleWidth: false, // will fallback to `borderWidth` values
        columnRuleStyle: [
          'none', 'hidden', 'dotted', 'dashed', 'solid',
          'double', 'groove', 'ridge', 'inset', 'outset',
        ],
        columnFill: [ 'auto', 'balance', 'balance-all' ],
        columnSpan: [ 'none', 'all' ],
      },
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         llg: "1280px",
         xl: "1440px",
         xxl: "1681px",
      }
    },
    variants: {
      columnCount: ['responsive'],
      columnGap: ['responsive'],
      columnWidth: ['responsive'],
      columnRuleColor: ['responsive'],
      columnRuleWidth: ['responsive'],
      columnRuleStyle: ['responsive'],
      columnFill: ['responsive'],
      columnSpan: ['responsive'],
      extend: {
        translate: ['group-hover'],
        scale: ['group-hover']
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('tailwindcss-aspect-ratio')(),
      require('tailwindcss-multi-column')(),
      require('tailwindcss-typography')({ componentPrefix: '' })
    ],
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    }
};
