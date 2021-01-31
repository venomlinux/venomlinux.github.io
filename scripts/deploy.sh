#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Building. this may take a minute...
yarn run lint
yarn run build

# navigate into the build output directory
cd dist
# create a copy of index.html
cp index.html 404.html
find . -name ".DS_Store" -delete

# if you are deploying to a custom domain
echo 'venomlinux.org' > CNAME

# remove git and reinitialise
rm -rf .git
echo Deploying..
git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# deploy
git remote add origin git@github.com:venomlinux/venomlinux.github.io.git
git push origin gh-pages --force

cd ..
rm -rf dist
git add *
git commit -m "new release"
git push origin master

