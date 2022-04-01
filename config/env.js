export default {
  // 环境常量
  NODE_ENV: process.env.NODE_ENV,
  NODE_ENV_DEVELOPMENT: process.env.NODE_ENV === 'development',
  NODE_ENV_PRODUCTION: process.env.NODE_ENV === 'production',
  //(运营位)
  CMS: {
    development: 'https://cms.iot101.com',
    test: 'https://cms.iot101.com',
    production: 'https://cms.iot101.com'
  }[ process.env.NODE_ENV ],
  // WAP
  H5: {
    development: 'http://39.101.162.232/h5',
    test: 'http://39.101.162.232/h5',
    production: '//39.101.162.232/h5'
  }[ process.env.NODE_ENV ],
  // WAP
  PC: {
    development: 'http://39.101.162.232/pc',
    test: 'http://39.101.162.232/pc',
    production: '//39.101.162.232/pc'
  }[ process.env.NODE_ENV ],
  //静态域
  ASSETS: {
    development: 'http://39.101.162.232/',
    test: 'http://39.101.162.232/',
    production: '//39.101.162.232/'
  }[ process.env.NODE_ENV ],
  SEARCH_BASE: {
    development: 'http://192.168.1.187:18888',
    test: 'http://192.168.1.187:18888',
    production: 'http://192.168.1.187:18888'
  }[ process.env.NODE_ENV ],
  SEARCH: {
    development: 'http://192.168.1.187:18888/search/productList',
    test: 'http://192.168.1.187:18888/search/productList',
    production: 'http://192.168.1.187:18888/search/productList'
  }[ process.env.NODE_ENV ],
  SEARCH_PLAN: {
    development: 'http://192.168.1.187:18888/search/productList',
    test: 'http://192.168.1.187:18888/plan/search/productList',
    production: 'http://192.168.1.187:18888/search/productList'
  }[ process.env.NODE_ENV ],
  API: {
    // development: 'https://test.iot101.com/portal',
    development: 'http://192.168.1.187:18888/',
    test: 'https://test.iot101.com/portal',
    production: 'https://test.iot101.com/portal'
  }[ process.env.NODE_ENV ],
  IMG_SQUARE: 'https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1555719775998.jpg',
  IMG_RECT: 'https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1548324684777.jpg',
}
