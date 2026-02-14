import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig(({ command, mode }) => {
    const isProd = mode === 'production';

    return {
        base: './',

        resolve: {
            alias: {
                '@argon': path.resolve(__dirname, 'src/scss/argon')
            },
        },

        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                },
            }
        },

        build: {
            outDir: 'resources',
            emptyOutDir: false,
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
                    entryFileNames: `js/[name].js`,
                    chunkFileNames: `js/[name].js`,
                    assetFileNames: '[ext]/[name].[ext]'
                }
            }
        }
    };
});
