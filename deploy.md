https://velog.io/@ricale/next.js-%EB%A1%9C-GitHub-Pages-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0

# Build NextJS project (In container)

under web directory run belows
add the deploy command to 'scripts' to package.json

```json
    ...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "deploy": "rm -rf node_modules/.cache && next build && next export && touch out/.nojekyll"
  },
   ...
```

# add subtree

```
# git checkout -b tmp-deploy
# git add -f web/out
# git commit -m "deploy YYYYMMDD"
# git subtree split -prefix web/out -b deploy
# git push -f origin deploy
```

# clean deploy files

```
# git checkout main
# git branch -D tmp-deploy
# git branch -D deploy
# rm -rf web/out
```
