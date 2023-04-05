import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import PackageJson from './package.json';
// import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: 'src/**/*',
      outputDir: 'dist',
    }),
    // topLevelAwait({
    //   // The export name of top-level await promise for each chunk module
    //   promiseExportName: '__tla',
    //   // The function to generate import names of top-level await promise in each chunk module
    //   promiseImportName: (i) => `__tla_${i}`,
    // }),
  ],
  resolve: {
    dedupe: [],
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: PackageJson.name,
    },
    // target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      external: [
        'zustand/shallow',
        'dayjs',
        'react',
        'firebase',
        /^@firebase/,
        'i18next',
        'react-i18next',
      ],
      output: {
        banner: `/**\n * @license\n * Copyright 2020-2023 Pagongamedev Authors\n * SPDX-License-Identifier: MIT\n */`,
        globals: {
          react: 'react',
          i18next: 'i18next',
          dayjs: 'dayjs',
          'react-i18next': 'react-i18next',
          'zustand/shallow': 'zustand/shallow',
        },
      },
      plugins: [
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-treemap.html'),
          template: 'treemap',
        }),
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-sunburst.html'),
          template: 'sunburst',
        }),
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-network.html'),
          template: 'network',
        }),
      ],
    },
  },
});
