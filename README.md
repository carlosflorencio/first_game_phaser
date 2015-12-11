# Description

Making a simple game to learn typescript and phaser.

# Tutorial

I am following these tutorials:

- http://www.gamefromscratch.com/page/Adventures-in-Phaser-with-TypeScript-tutorial-series.aspx

# Requirements

- Nodejs

# Instructions

- `npm install -g webpack`
- `npm install`
- `webpack` to compile
- `webpack-dev-server --content-base public/` to start a new server
- `webpack --watch` to watch files and compile

# Workflow

Typescript is used instead of plain javascript, to compile to javascript
webpack has a module to do this and is already configured.
Just start the webpack web server and it will watch for file modifications and update the 
browser.