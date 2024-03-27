import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

import glsl from 'vite-plugin-glsl'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        
        react(),

        // {
        //     name: 'load+transform-js-files-as-jsx',
        //     async transform(code, id)
        //     {
        //         if (!id.match(/src\/.*\.js$/))
        //             return null

        //         return transformWithEsbuild(code, id, {
        //             loader: 'jsx',
        //             jsx: 'automatic',
        //         });
        //     },
        // },
    ],
    // server:
    // {
    //     host: true, // Open to local network and display URL
    //     open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    // },
    // build:
    // {
    //     outDir: '../dist', // Output in the dist/ folder
    //     emptyOutDir: true, // Empty the folder first
    //     sourcemap: true // Add sourcemap
    // },
});
