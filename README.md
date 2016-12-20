# watch.publish.projects

> Extending publish-projects to auto publish projects that has changed

## usage
The module watches for any change in cshtml files and auto publishes the project that contains the file

import in gulpfile.js
```javascript
var package = require('@pentia/watch-publish-projects')
```

use
```shell
gulp Auto-Publish-Views
```

### examples

#### specific environment
```shell
gulp Auto-Publish-Views --env debug
```

