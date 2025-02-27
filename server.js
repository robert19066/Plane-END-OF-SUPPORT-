import express from 'express';
import { build } from 'esbuild';
import chalk from 'chalk';
import { watch } from 'chokidar';
import { generatedHtmlString } from './public/js/Code.js'; // Import the named export

const print = console.log;
const app = express();

app.use(express.static('public'));

console.log(chalk.yellow("Plane launcher initiated! - Powered by Zap.js"));

app.listen(3000, () => {
    print(chalk.green('Server is running on http://localhost:3000'));
});

// Serve an HTML page with the injected HTML string
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="./public/css/styles.css">
            <link rel="icon" href="./public/assets/Plane logo-fotor-bg-remover-20250220172939.ico" type="image/x-icon">
            <title>Plane.jsL</title>
        </head>
        <body>
            <div id="target-div">${generatedHtmlString}</div>
        </body>
        </html>
    `);
});

// Build the project with esbuild
const buildOptions = {
    entryPoints: ['src/lib/compile.js'],
    outdir: 'public',
    bundle: true,
    sourcemap: true,
};

build(buildOptions).then(() => {
    print(chalk.gray('Initial build completed'));
}).catch(() => process.exit(1));

// Watch for changes in multiple directories, excluding system files and directories
const watcher = watch(['public/js', '**/*.html', 'src/**/*.css'], {
    ignored: [/.*(\\|\/)(hiberfil\.sys|DumpStack\.log\.tmp|pagefile\.sys|swapfile\.sys)$/, 'node_modules/**', '.git/**'],
    persistent: true
});

watcher.on('change', (path) => {
    print(`${chalk.blueBright("[Zap Watcher]")} ${chalk.gray("Modifications observed in")} ${path}`);
    build(buildOptions).then(() => {
        print(chalk.greenBright("Code rebuild successfully!"));
    }).catch(() => {
        print(chalk.redBright("Uh oh, something went wrong!"));
        process.exit(1);
    });
});
