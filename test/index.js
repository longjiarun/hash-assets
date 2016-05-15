var hashAssets = require('../index')

hashAssets({
    url:'https://g.alicdn.com/mui/swiper/4.0.0/??swiper.js',
    callback: function(hash){
        console.log(hash)
    }
})