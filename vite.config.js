import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    css: {
        postcss: false,
    },
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/js/site.js',
                'resources/css/main.scss',
                'resources/css/stars.scss',
                'resources/css/article.scss',
                'resources/css/banner.scss',
                'resources/css/cardgrid.scss',
                'resources/css/hero.scss',
                'resources/css/input.scss',
                'resources/css/modifier.scss',
                'resources/css/nav.scss',
                'resources/css/pillgrid.scss',
                'resources/css/slides.scss',
                'resources/css/thumbnailgrid.scss',
                'resources/css/typography.scss',
                'resources/js/main.js',

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            css: {
                postcss: false,
            },
            refresh: true,
        }),
        // vue2(),
    ],
});
