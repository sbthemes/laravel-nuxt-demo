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
    ],

    components: true,

    buildModules: [
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    axios: {
        baseURL: 'http://laravel.devv/web',
        credentials: true,
        headers: {
            'X-Requested-With' : 'XMLHttpRequest',
        },
    },

    auth: {
        localStorage: false,
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

    build: {
    }
}
