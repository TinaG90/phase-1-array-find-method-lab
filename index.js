// code your solution here

function superbowlWin(record){
    const results = record.find(record => record.result === "W")
    if (results){
        return results.year;
    }
}