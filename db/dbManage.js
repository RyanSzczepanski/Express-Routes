const fs = require('fs');

const read = fs.readFileSync;
const write = fs.writeFileSync;

class DataBase {
    add(data){
        let db = [].concat(JSON.parse(read('db/db.json', 'utf8')));
        db[db.length] = data;
        write('db/db.json', JSON.stringify(db));
    }
}


module.exports = new DataBase;