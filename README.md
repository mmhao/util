# util
辅助函数，主要是封装一些常用的函数  

## 使用
安装：  
npm install @mhao/util --save-dev

引入该插件：  
var myUtil = require('@mhao/util');  

### getDirs函数  
getDirs(entry, options)  
简介：  
  搜索entry路径下的目录  
参数：  
  entry: String  
    基于此目录去搜索对应的目录，比如值为path.resolve(__dirname, "./src")  
  options: Object
    options.reg: RegExp  
    必须传入实例化后的RegExp,可以为空，为空返回所有目录，可以传入如new RegExp('sprite$')，筛选所有以sprite$结尾的目录  
    
#### 提示  
  如果需要获取目录下所有的文件，使用nodejs自带的glob库就可以了  
