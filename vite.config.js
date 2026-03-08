import { defineConfig } from "vite";
import path, {resolve} from "node:path";
import * as glob from "glob";

import HtmlCssPurgePlugin from "vite-plugin-purgecss";


function obtenerHtmlFiles(){
    return Object.fromEntries(
        glob.sync(
            './**/*.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
        ).map( (file) => {
            return [
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ];
        })
    );
}

export default defineConfig(
    {
        base: "/viteportafolio/",
        appType: 'mpa',
        build: {
            rollupOptions: {
                input: obtenerHtmlFiles(),
            }
        },
        plugins: [
            HtmlCssPurgePlugin()
        ]
    }
);


