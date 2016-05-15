## Install

```javascript
npm install hash-assets --save
```

## Usage
```
//use murmurhash
var hashAssets = require('hash-assets');

hashAssets({
    url:'https://g.alicdn.com/mui/swiper/4.0.0/??swiper.js',
    callback: function(hash){
        console.log(hash);
    }
});

//use other hash
var hashAssets = require('hash-assets'),
    hash = require('hash');

hashAssets({
    url: 'https://g.alicdn.com/mui/swiper/4.0.0/??swiper.js',
    hash: hash,
    callback: function(hash){
        console.log(hash);
    }
});
```

## LICENSE
MIT [http://www.opensource.org/licenses/mit-license.php]