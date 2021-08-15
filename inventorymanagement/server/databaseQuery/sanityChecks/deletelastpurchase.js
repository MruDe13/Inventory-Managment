async function deleteLastPurchase(db){
    let query = `DELETE FROM Purchase_Book WHERE id=(SELECT MAX(id) FROM Purchase_Book);`;
    let response = new Promise((res,rej)=>{
        db.exec(query, (err)=>{
            if(err){
                return rej("Unable to complete the delete operation!")
            }
            res("Successfully Deleted the last entry!")
        })
    });
    return response;
}

module.exports = { deleteLastPurchase }
