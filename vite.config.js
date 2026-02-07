import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig(({ command, mode }) => {
    const isProd = mode === 'production';

    return {
        base: './',
        
        build: {
            outDir: 'dist',
            emptyOutDir: true,
            sourcemap: 'inline',
            minify: isProd,
            esbuild: {
                legalComments: 'inline',
            },
            rollupOptions: {
                input: {
                    'theme': path.resolve(__dirname, 'src/scss/main.scss'),
                    'fonts': path.resolve(__dirname, 'src/scss/fonts.scss'),
                    'imports': path.resolve(__dirname, 'src/css/imports.css'),
                },
                output: {
                    entryFileNames: `resources/js/[name].js`,
                    chunkFileNames: `resources/js/[name].js`,
                    assetFileNames: 'resources/[ext]/[name].[ext]'
                }
            }
        },

        plugins: [
            isProd && viteStaticCopy({
                targets: [
                    { src: '*.php', dest: '.' },
                    { src: 'resources', dest: '.', overwrite: false },
                    { src: "README.md", dest: '.' },
                    { src: "LICENSE.md", dest: '.' }
                ]
            })
        ]
    };
});
