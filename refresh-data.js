var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/tcweibo_dev";
const { exec } = require('child_process');

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log("数据库不存在");
    } else {
        db.db('tcweibo_dev').dropDatabase();
        console.log("数据库已删除!");
        db.close();
    }
    exec('node ./seeder/index.js')
    console.log("数据库已初始化!");
});