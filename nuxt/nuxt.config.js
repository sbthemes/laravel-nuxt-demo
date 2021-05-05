export default {
    head: {
        title: 'nuxt',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
    ],

    plugins: [
        {
            src: '~/plugins/axios.js',
        },
    ],

    components: true,

    buildModules: [
        '@nuxtjs/tailwindcss'
    ],

    tailwindcss: {
        jit: true
    },

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/toast',
    ],

    axios: {
        baseURL: process.env.API_URL,
        credentials: true,
        headers: {
            'X-Requested-With' : 'XMLHttpRequest',
        },
    },

    auth: {
        localStorage: false,
        cookie: {
            options: {
                maxAge: 31536000, // 1 year
            }
        },
        redirect: {
            login: '/login',
            logout: '/login',
            home: '/',
        },
        strategies: {
            cookie: {
                endpoints: {
                    csrf: { url: '/csrf', method: 'post' },
                    login: { url: '/auth/login', method: 'post' },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/auth/user', method: 'get' },
                },
                user: {
                    property: false
                }
            },
        }
    },

    toast: {
        position: 'top-center',
        duration: 5000,
        singleton: true
    },

    build: {
        extractCSS: true
    }
}
