const fs = require('fs');

const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;

class DataBase {
    read(){
        return readJSON()
    }

    add(data){
        let db = [].concat(readJSON());
        data.id = db.length;
        db.push(data);
        writeJSON(db)
    }

    remove(id){
        let db = [].concat(readJSON());
        if(id < 0 || id >= db.length){throw new Error("ID doesnt fall within array bounds!")}
        db.splice(id, 1)
        writeJSON(db)
        updateIdsFrom(id);
    }
}

function readJSON(){
    let data = readFile('db/db.json', 'utf8')
    if (data == "") {return JSON.parse("[]")}
    return JSON.parse(data)
}

function writeJSON(data){
    writeFile('db/db.json', JSON.stringify(data));
}

function updateIdsFrom(start){
    let db = [].concat(readJSON());
    for(let i = start; i < db.length; i++){
        //parse int because for some reason when i is 0 it returns i as a string rather than int
        db[i].id = parseInt(i);
    }
    writeJSON(db)
}

module.exports = new DataBase;