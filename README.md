# TypeScript and Webpack Boilerplate
> Setting up the configuration for Webpack and Typescript is an unnecessary and time-consuming process. This repository aims to alleviate that process for you, giving you the perfect starting point to develop your next TypeScript project.
>
> This repository provides you with a general-purpose configuration that supports the latest ECMA standards and Jest unit testing.

## Getting started
Clone this repository into your project folder.
```bash
git clone https://github.com/isakhauge/ts-webpack-boilerplate.git <your-project-path>
```
Delete the included git folder.
```bash
rm -rf <your-project-path>/.git
```
Initialize your own git.
```bash
cd <your-project-path> && git init
```
Install dependencies.
```bash
# Yarn
yarn install

# NPM
npm install
```

## Included scripts
| Alias | What it does |
| --- | --- |
| build | Builds the project in `production` mode. |
| dev | Builds the project in `development` mode. |
| dev:analyze | Just like `dev` but runs an instance of WebpackBundleAnalyzer at `http://localhost:8888`
| serve | Runs Webpack Development server with hot reloading at `http://localhost:9000` |
| test | Runs Jest testing of your defined TypeScript tests, located in `<project-root>/test/` |
