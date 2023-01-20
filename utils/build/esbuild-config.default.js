var jsonPackage = require('../../package.json');

module.exports = {
  moduleName: jsonPackage.name,
  modulePath: './build/',
  config: {
    banner: {
      js: `/**\n * @license\n * Copyright 2020-2022 Pagongamedev Authors\n * SPDX-License-Identifier: MIT\n */`,
    },
    entryPoints: ['./src/index.ts'],
    external: [
      'zustand/shallow',
      'dayjs',
      'react',
      'firebase',
      'i18next',
      'react-i18next',
    ],
    loader: { '.ts': 'ts' },
  },
};
