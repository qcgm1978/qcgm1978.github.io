module.exports = {
    entry: { home: "./module/yargs.d.ts" },
    output: {
        filename: "./built/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {


        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader", include: __dirname, options: { onlyCompileBundledFiles: true } },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
        ]
    },

    // Other options...
};