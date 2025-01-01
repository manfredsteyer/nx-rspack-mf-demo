import { init } from '@module-federation/enhanced/runtime';

init({
  name: 'shell',
  remotes: [
    {
      name: "mfe1",
      entry: "http://localhost:4201/remoteEntry.js",
    }
  ],
});

import('./bootstrap');