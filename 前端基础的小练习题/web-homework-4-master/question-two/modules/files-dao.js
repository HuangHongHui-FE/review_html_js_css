const database = require("./database.js");

async function getAllFileEntriesSorted() {
    const db = await database;

    // TODO: Add the necessary code to Select all entries from the `practical_two_files` table
    let res = db.query(`SELECT * FROM practical_two_files ORDER BY file_title`)
    // console.log(res)
    // TODO: Return the resulting rows in an appropriate form
    return res;
}

async function addNewFileEntry(file, title, description) {
    const db = await database;
    console.log(file)
    console.log(title)
    console.log(description)
    // TODO: Use the details provided in the function parameters to insert a new file entry in the database
    let result = db.query("INSERT INTO practical_two_files value (?, ?, ?)", [file, title, description])
    return result
}

module.exports = {
    getAllFileEntriesSorted,
    addNewFileEntry
};