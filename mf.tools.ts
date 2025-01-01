import { SharedConfig } from '@rspack/core';

import * as packageJson from './package.json';
import * as tsconfigBase from './tsconfig.base.json';

import path from 'path';

export const SKIP_LIST = [
    'zone.js'
];

export function shareDeps(config: SharedConfig) {
    const deps = Object
        .keys(packageJson.dependencies)
        .filter(d => !SKIP_LIST.includes(d));

    return deps.reduce((acc, cur) => ({
        ...acc,
        [cur]: {
            requiredVersion: packageJson.dependencies[cur],
            ...config,
        } as SharedConfig
    }), {});
}

export function shareLibs(config: SharedConfig) {
    const libs = Object
        .keys(tsconfigBase.compilerOptions.paths)

    return libs.reduce((acc, cur) => ({
        ...acc,
        [cur]: {
            requiredVersion: '0.0.0',
            version: '0.0.0',
            import: path.join('..', tsconfigBase.compilerOptions.paths[cur][0]),
            ...config,
        } as SharedConfig
    }), {});
}

export function shareAll(config: SharedConfig) {
    return {
        ...shareDeps(config),
        ...shareLibs(config)
    }
};
