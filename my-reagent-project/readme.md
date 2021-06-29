# Installations

this project is working with npm
- check you have a npm version on your computer.
`npm -version`

follow the steps within the shadow-clj docs - https://shadow-cljs.github.io/docs/UsersGuide.html#_build_tool_integration)

1) install standalone vip `npm`
`$ npm install --save-dev shadow-cljs`
`$ cat package-lock.json`
you should get a json file

2) installing react-dom
`$ npm install --save react-dom`
`$ cat package.json`
 you should see now that you have a new depende
` "dependencies": {"react-dom": "^17.0.2}`

# Build
`$ npx shadow-cljs watch app`
