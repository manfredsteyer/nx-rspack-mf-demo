import { createConfig } from '@ng-rsbuild/plugin-angular';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { shareAll } from '../mf.tools';

export default createConfig(
  {
    browser: './src/main.ts',
  },
  {
    moduleFederation: {
      options: {
        name: 'shell',
        shared: {
          ...shareAll({
            singleton: true,
            strictVersion: true,
          }),
        },
      },
    },
  }
);
