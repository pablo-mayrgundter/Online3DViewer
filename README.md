# Online 3D Viewer - Bldrs

This is a fork of [Online3DViewer](https://github.com/kovacsv/Online3DViewer)
for use in terminal/headless environments.

## Build

```
npm i
yarn run build_engine_bldrs
```

The bundle is saved to `build/engine/o3dv.cjs`.

From within headless-three, and assuming this repo is a peer directory, run:
```
rm -rf lib/ov/* && /bin/cp -rf ../Online3DViewer/build/engine/{o3dv.cjs,web-ifc-node.wasm} lib/ov
```

## Changelog:

### 0.9.0-bldrs
  - Forked from https://github.com/kovacsv/Online3DViewer @ 0.9.0
  - Builds a bundle at ./build/engine/o3dv.cjs with tools/esbuild.js, targeting Node and CJS
  - Tested with [headless-three](https://github.com/bldrs-ai/headless-three)
    - Supports: ifc, obj, stl, fbx, 3ds, ply, bim
  - web-ifc 0.0.39 -> 0.0.42
  - Some experimenting with rollup CJS build
  - Disable hasHighpDriverIssue/mobile testing (requires a canvas)
  - Avoid FileReader with node fs-based reading

## TODO

### Known Issues
  - Not clear how OV is doing camera setup, but camera coordinates seem to work

### Feature Requests
  - Add format support, by priority: glb, gltf, 3dm, 3mf, fcstd, amf, dae, mtl, off, wrl
  - Better rendering:
    - Antialiasing
    - A few nice environment maps?
