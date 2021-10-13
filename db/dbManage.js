const fs = require('fs');

const read = fs.readFileSync;
const write = fs.writeFileSync;

class DataBase {
    read(){
        return JSON.parse(read('db/db.json', 'utf8'))
    }

    add(data){
        let db = [].concat(JSON.parse(read('db/db.json', 'utf8')));
        data.id = db.length;
        db[db.length] = data;
        write('db/db.json', JSON.stringify(db));
    }

    remove(id){
        let db = [].concat(JSON.parse(read('db/db.json', 'utf8')));
        if(id < 0 || id >= db.length){throw new Error("ID doesnt fall within array bounds!")}
        db.splice(id, 1)
        write('db/db.json', JSON.stringify(db));
        updateIdsFrom(id);
    }
}

function updateIdsFrom(start){
    let db = [].concat(JSON.parse(read('db/db.json', 'utf8')));
    for(let i = start; i < db.length; i++){
        //parse int because for some reason when i is 0 it returns i as a string rather than int
        db[i].id = parseInt(i);
    }
    write('db/db.json', JSON.stringify(db))
}

module.exports = new DataBase;