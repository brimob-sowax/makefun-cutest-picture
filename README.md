# makefun-cutest

Entry for make.fun's `cutest-picture-01` bounty.

`main.ts` is a Node 22 program that copies `entry.png` into the directory set
by `MAKEFUN_OUTPUT_DIR` (default `/output`) as `entry.png`.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
