// #region Environment variable file parsing
// Environment file parsing and updating
import * as DotEnv from 'dotenv'
import { expand } from 'dotenv-expand'
import path from 'node:path'
import fs from 'node:fs'
import figures from 'figures'
import chalk from 'chalk'

// Process environment files, to ensure the enviornment configuration is applied
const envFiles : string[] = [".env", ".env.local"]
if (process.env.NODE_ENV) {
    envFiles.push(`.env.${ process.env.NODE_ENV }`)
    envFiles.push(`.env.${ process.env.NODE_ENV }.local`)
}
envFiles.map(s => path.join(process.cwd(), s)).filter(s => fs.existsSync(s)).reverse().forEach(fileName => {
    let result = DotEnv.config({ path: fileName, override: false })
    expand(result)
    console.log(`${ chalk.greenBright(figures.tick) } Processed ${fileName}`)
})
// #endregion

// Actual code generation setup
import type { CodegenConfig  } from '@graphql-codegen/cli'
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'
import OptimizelyGraphPreset, {type PresetOptions as OptimizelyGraphPresetOptions}  from '@remkoj/optimizely-graph-functions/preset'

// Create the configuration itself
const config: CodegenConfig = {
    schema: getSchemaInfo(),

    // Allow & parse GraphQL Queries from anywhere within the codebase
    documents: [
        // Add local GraphQL files
        'src/**/*.graphql',

        // Add Definitions from components
        'src/**/!(*.d).{ts,tsx}'
    ],
    generates: {
        './src/gql/': {
            preset: OptimizelyGraphPreset,
            presetConfig: {
                // By default the preset will generate recursive queries
                // untill multiple recursions are supported, this needs to
                // be disabled when there's more then one component that
                // will use recursion
                recursion: false,

                // The GQL tag to be used to identify inline GraphQL queries
                gqlTagName: 'gql',

                // Configure the fragments that will be spread into the utility
                // partial fragments. You can use any fragment here, however the
                // system is designed for the following receiving fragments:
                // - PageData => For all page-level components
                // - BlockData => For everyting that can be rendered as individual component
                // - ElementData => For all element types that are useable within Visual Builder
                injections: [
                    {
                        // Add from all Pages, within code
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/page\/.*\.[tj]s(x){0,1}$"
                    },
                    {
                        // Add from all Experiences, within code
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/experience\/.*\.[tj]s(x){0,1}$"
                    },
                    {
                        // Add from all Blocks, within code
                        into: "BlockData",
                        pathRegex: "src\/components\/cms\/component\/.*\.[tj]s(x){0,1}$"
                    },
                    {
                        // Add from all Elements, within code
                        into: "ElementData",
                        pathRegex: "src\/components\/cms\/element\/.*\.[tj]s(x){0,1}$"
                    },
                    {
                        // Add from all Pages, as .page.graphql file
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/.*\.page\.graphql$"
                    },
                    {
                        // Add from all Experiences, as .experience.graphql file
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/.*\.experience\.graphql$"
                    },
                    {
                        // Add from all Blocks, as .component.graphql file
                        into: "BlockData",
                        pathRegex: "src\/components\/cms\/.*\.component\.graphql$"
                    },
                    {
                        // Add from all Elements, as .element.graphql file
                        into: "ElementData",
                        pathRegex: "src\/components\/cms\/.*\.element\.graphql$"
                    }
                ],
            } as OptimizelyGraphPresetOptions
        }
    },
    ignoreNoDocuments: false
}

export default config