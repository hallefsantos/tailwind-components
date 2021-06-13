const { resolve } = require('path')

module.exports = {
   root: 'src',
   build: {
      outDir: '../dist',
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            blogPost: resolve(__dirname, 'src/components/blog-post.html'),
            newsletterSignUp: resolve(__dirname, 'src/components/newsletter-sign-up.html'),
            popup: resolve(__dirname, 'src/components/popup.html'),
            select: resolve(__dirname, 'src/components/select.html'),
            passwordVisilibity: resolve(__dirname, 'src/components/password-visibility.html'),
            navigation: resolve(__dirname, 'src/components/navigation.html'),
         },
      }
   }
}