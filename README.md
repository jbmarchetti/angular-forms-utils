# angular forms utils
[![Build Status](https://travis-ci.org/jbmarchetti/angular-forms-utils.svg?branch=master)](https://travis-ci.org/jbmarchetti/angular-forms-utils)
[![codecov](https://codecov.io/gh/jbmarchetti/angular-forms-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/jbmarchetti/angular-forms-utils)
[![npm version](https://badge.fury.io/js/angular-forms-utils.svg)](http://badge.fury.io/js/angular-forms-utils)
[![devDependency Status](https://david-dm.org/jbmarchetti/angular-forms-utils/dev-status.svg)](https://david-dm.org/jbmarchetti/angular-forms-utils?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/jbmarchetti/angular-forms-utils.svg)](https://github.com/jbmarchetti/angular-forms-utils/issues)
[![GitHub stars](https://img.shields.io/github/stars/jbmarchetti/angular-forms-utils.svg)](https://github.com/jbmarchetti/angular-forms-utils/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/jbmarchetti/angular-forms-utils/master/LICENSE)

## Demo
https://jbmarchetti.github.io/angular-forms-utils/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular2 Reactive forms utils

## Installation

Install through npm:
```
npm install --save angular-forms-utils
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { AngularFormsUtilsModule } from 'angular-forms-utils';

@NgModule({
  imports: [
    AngularFormsUtilsModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/jbmarchetti/angular-forms-utils/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/angular-forms-utils/bundles/angular-forms-utils.umd.js"></script>
<script>
    // everything is exported angularFormsUtils namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://jbmarchetti.github.io/angular-forms-utils/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
