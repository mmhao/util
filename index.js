var path = require("path");
var fs = require("fs");
const util = {};

//获取当前路径下所有文件夹和目录，bool为真就是获取所有文件
function getAllDir(dirPath, bool) {
    var dirPath = dirPath || path.resolve(__dirname, "./"); 
    var results = []; //存放得到的目录或文件

    var pa = fs.readdirSync(dirPath);
    pa.forEach(function(ele,index){
        var info = fs.statSync(dirPath+"/"+ele);
        if (bool) {
            if(!info.isDirectory()){
                results.push(dirPath+"/"+ele);
            }
            else {
                results = results.concat(getAllDir(dirPath+"/"+ele, true));
            }
        }
        else {
            if(info.isDirectory()){
                results.push(dirPath+"/"+ele);
                results = results.concat(getAllDir(dirPath+"/"+ele));
            }
        }
        
    });
    return results;
}
util.getAllDir = getAllDir;

//获取当前目录下所有带某个名称的目录
function searchDirPath(dir, options) {
    var options_def = {
        dirName: "sprites",
    };
    var opts = Object.assign({}, options_def, options || {});
    var results = [];
    var list = fs.readdirSync(dir);
    var regTest = new RegExp(opts.dirName + "$");
    //console.log(list)
    list.forEach(function(file) {
        file = dir + path.sep + file;

        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) {
            if (regTest.test(file)) {
                results.push(file);
            }
            else {
                results = results.concat(searchDirPath(file, opts));
            }
        }
    });
    return results
}
util.searchDirPath = searchDirPath;
module.exports = util;


