# Baidu Maps POI Search Example
## Notes
- Query is locked in Beijing area in this example; extend `#url` in `src/api.js` to query PoIs other than Beijing
- [Coordination of the results is in BD09 format](http://lbsyun.baidu.com/index.php?title=coordinate)

## Prerequisites
- Nodejs
- An "ak" (access key) from [Baidu](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey)

## Getting Started
1. Clone the repo and change directory to the project's root in terminal
2. Create file `.env`, under project root and add the "ak" to it (See `.env.example`; replace the "key" part)
3. `$ npm install`
4. `$ node`
6. Generate query results in json files in `data/` from Node console
```javascript
> const { getPOI } = require('./src/api');

// Example
> getPOI('the great wall');
```

## References
- [Baidu Maps - Web服务API-地点检索-服务文档](http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi)
