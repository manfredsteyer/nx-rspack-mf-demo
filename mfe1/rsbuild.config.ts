import { createConfig } from '@ng-rsbuild/plugin-angular';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { shareAll, shareLibs } from '../mf.tools';

export default createConfig({
  browser: './src/main.ts',
}, {
  server: {
    port: 4201
  },
  moduleFederation: {
    options: {
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/app/app.component.ts'
      },
      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
        }),
      }
    }
  }
});
