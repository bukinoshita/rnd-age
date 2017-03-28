# rnd-age
> Generate a random age

[![Codeship Status for bukinoshita/rnd-age](https://app.codeship.com/projects/1e444310-df44-0134-4201-2626b392372a/status?branch=master)](https://app.codeship.com/projects/204873)
[![Build Status](https://travis-ci.org/bukinoshita/rnd-age.svg?branch=master)](https://travis-ci.org/bukinoshita/rnd-age)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/rnd-age.svg)](https://www.npmjs.com/package/rnd-age)
[![license](https://img.shields.io/github/license/bukinoshita/rnd-age.svg)](https://raw.githubusercontent.com/bukinoshita/rnd-age/master/LICENSE)

## Install
```bash
$ npm install --save rnd-age
```

## Usage
```js
import rndAge from 'rnd-age'

rndAge(1990, 1994).then(randomAge => console.log(`John has ${randomAge} years`))
// => John has 22 years
```

## API
### rnd-age(from, to)

#### from
Type: `Number`<br/>
Required

#### to
Type: `Number`<br/>
Required

## Related
- [rnd-date](https://github.com/bukinoshita/rnd-date) — :date: Get a random date

## License
[MIT](https://github.com/bukinoshita/rnd-age/blob/master/LICENSE) &copy; Bu Kinoshita
