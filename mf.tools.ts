import { SharedConfig } from '@rspack/core';

// eslint-disable-next-line @nx/enforce-module-boundaries
import * as packageJson from './package.json';

export const SKIP_LIST = [
    'zone.js'
];

export function shareAll(config: SharedConfig) {
    const deps = Object
        .keys(packageJson.dependencies)
        .filter(d => !SKIP_LIST.includes(d));

    return deps.reduce((acc, cur) => ({
        ...acc,
        [cur]: {
            ...config,
            requiredVersion: packageJson.dependencies[cur]
        } as SharedConfig
    }), {});
}
