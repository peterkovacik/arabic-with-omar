// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image',
      ],
    css: [
        // CSS file in the project
        '@/assets/css/main.css',
        // SCSS file in the project
        //'@/assets/css/main.scss'
    ],
    app: {
        head: {
            title: 'Arabic Instructor',
            script: [
                { src: '/js/bootstrap.min.js' }
            ]
        }
    }
})
