# watch.publish.projects

> Extending publish-projects to auto publish projects that has changed

## Install

Install the module with: `npm i --save-dev @pentia/watch-publish-projects` or place into your package.json and run npm install.

## Usage
The module watches for any change in cshtml files and auto publishes the project that contains the file

import in gulpfile.js
```javascript
var package = require('@pentia/watch-publish-projects')
```
use
```shell
gulp Auto-Publish-Views
```
### Examples

#### specific environment
```shell
gulp Auto-Publish-Views --env debug
```

