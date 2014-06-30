/**
 * Created by ling xue on 14-5-29.
 */

var mysqlConnectOptions ={
    user: 'root',
    password: 'Mission94539',
    database:'bw',
    host: 'bw.cf9yrfbrszri.us-west-1.rds.amazonaws.com'
};

var mongodbConnectionOptions = {
    ipAdd : "localhost",
    port : 27017,
    dbName : 'bizwise'
};

function getMysqlOptions (){
    return mysqlConnectOptions;
}

function getMongodbOption(){
    return mongodbConnectionOptions
}
module.exports = {

    getMysqlOptions : getMysqlOptions ,
    getMongodbOption : getMongodbOption
}