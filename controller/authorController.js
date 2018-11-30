const authorSrvc = require('../services/author.service');

function getAuthorById(req, res) {
    var value= req.params.value;
    console.log("Authors by id");
    console.log(value);
    authorSrvc.getAuthorById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });   
}

function getAuthors(req, res) {
    console.log("all Authors");
    authorSrvc.getAuthors().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });   
}

function saveAuthor(req, res){
    var name = req.params.name;
    var descr = req.params.descr;
    console.log("Inserting author: " + name + " " + descr);
    authorSrvc.saveAuthor(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

function updateAuthor(req, res) {
    var descr = req.params.descr;
    console.log("Inserting author: " + name + " " + descr);
    authorSrvc.updateAuthor(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

function deleteAuthor(req, res) {
    var author_id = req.params.author_id;
    var descr = req.params.descr;
    console.log("Deleting author: " + author_id);
    authorSrvc.deleteAuthor(author_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

module.exports = {
    getAuthorById: getAuthorById,
    getAuthors: getAuthors,
    saveAuthor: saveAuthor,
    deleteAuthor: deleteAuthor,
    updateAuthor: updateAuthor
}
