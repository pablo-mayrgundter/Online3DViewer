import esbuild from 'esbuild';


const build = {
  entryPoints: ['source/engine/main.js'],
  bundle: true,
  outfile: './build/engine/o3dv.cjs',
  format: 'cjs',
  platform: 'node',
  target: ['node16'],
  sourcemap: false, // 'inline': 20MB, false: 3MB
  minify: true,
  keepNames: false, // false can be flaky, https://esbuild.github.io/api/#keep-names
  splitting: false,
  logLevel: 'info',
};


esbuild
  .build(build)
  .then((result) => {
    console.log('Build succeeded.');
  })
  .catch(() => process.exit(1));
