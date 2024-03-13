
# Lessons Learn

## Having the import path to be just the name?
We need to add where the files are on the angular.json folder. We do this through the stylePreprocessorOptions and includePaths string array inside the architect > build. It can be added next to the styles array string.

### Key import
```json
"stylePreprocessorOptions": {
              "includePaths": [
                "src/styles"
              ]
            },
```

### zoom out view
```json
"architect": {
"build": {
"builder": "@angular-devkit/build-angular:browser",
"options": {
"outputPath": "dist/new-angular-project-with-sass",
"index": "src/index.html",
"main": "src/main.ts",
"polyfills": [
"zone.js"
],
"tsConfig": "tsconfig.app.json",
"inlineStyleLanguage": "scss",
"assets": [
"src/favicon.ico",
"src/assets"
],
"styles": [
"src/styles.scss"
],
"stylePreprocessorOptions": {
"includePaths": [
"src/styles"
]
},
"scripts": []
},
...
}
```
