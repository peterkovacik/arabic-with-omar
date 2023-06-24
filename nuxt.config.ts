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
            charset: 'utf-8',
            script: [
                { src: '/js/bootstrap.min.js' }
            ],
            meta: [
                { name: 'keywords', content: 'Classical Arabic, grammar, Quran, nahw, sarf' },
                { name: 'description', content: 'Learn Classical Arabic with Peter Omar Kovacik' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            ],
            
                
            
        }
    }
})
