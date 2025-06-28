import babel from '@babel/core';
import { use } from 'react';

export default async function ({workspace, log}) {
    return workspace.byGlob(['**/*.js', '**/*qunit.js']).then(resources => {
        return Promise.all(
            resources.map(resource => {
                return resource
                    .getString()
                    .then(value => {
                        log.info(`Transpiling File ${resource.getPath()}`);
                        return babel.transformAsync(value, {
                            sourceMaps: false,
                            presets: ['@babel/preset-env'],
                            plugins: [
                                [
                                    "@babel/plugin-proposal-object-rest-spread",
                                    { loose: true, useBuiltIns: true }
                                ],
                                [
                                    "@babel/plugin-transform-destructuring",
                                    { loose: true, useBuiltIns: true }
                                ],
                                [
                                    "@babel/plugin-transform-spread",
                                    { loose: true }
                                ]
                            ]
                        }).then(result => {
                            resource.setString(result.code)
                            return workspace.write(resource)
                        })
                    })
            })
        )
    })
}

export async function determineRequiredDependecies(){
    return new Set();
}