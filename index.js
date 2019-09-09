var path = require("path");
var fs = require("fs");
const util = {};

//获取当前路径下所有文件夹
function getDirs(entry, options) {
    var entryPath = entry || path.resolve(__dirname, "./"); 
    var list = []; //存放得到的目录
    var opts = Object.assign({}, options || {});

    var files = fs.readdirSync(entryPath);
    var reg = opts.reg || /''/g;

    files.forEach(function(item,index){
        var filePath = entryPath + path.sep + item;
        var fileInfo = fs.statSync(filePath);

        if(fileInfo.isDirectory()){
            var str = item.split(path.sep).pop()
            if (reg.test(str)) {
                list.push(filePath);
            }
            list = list.concat(getDirs(filePath, opts));
        }
    });

    return list

}
util.getDirs = getDirs;
module.exports = util;


