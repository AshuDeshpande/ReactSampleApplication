var path = require("path");

var DIST_DIR=path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config ={
    mode:'development',
    devServer: {
        historyApiFallback: true
    },
    entry: SRC_DIR + "/app/index.js",
    output:{
        path:DIST_DIR + "/app/",
        filename: "bundle.js",
        publicPath:"/app/"
    },
    module:{
        rules:[
            {
                test : /\.js?/,
                include : SRC_DIR,
                exclude : /node_modules/,
                loader : "babel-loader",
                query:{
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
}

module.exports=config;