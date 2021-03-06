import colors from 'vuetify/es5/util/colors';

export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [ '~/assets/transition.css' ],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [ '@nuxtjs/vuetify' ],
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		'@nuxtjs/apollo'
	],

	// Apollo module options
	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: 'http://localhost:8000/graphql/'
			}
		}
	},
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {},
	/*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
	vuetify: {
		customVariables: [ '~/assets/variables.scss' ],
		theme: {
			dark: true,
			// light: true,
			themes: {
				dark: {
					primary: colors.purple.lighten1,
					accent: colors.teal.darken1,
					secondary: colors.teal.lighten3,
					info: colors.blue.accent3,
					warning: colors.amber.base,
					error: colors.red.accent4,
					success: colors.green.darken4
				},
				light: {
					primary: colors.indigo.darken1,
					accent: colors.teal.darken1,
					secondary: colors.teal.lighten3,
					info: colors.blue.accent3,
					warning: colors.amber.base,
					error: colors.red.accent4,
					success: colors.green.darken4
				}
			}
		}
	},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
