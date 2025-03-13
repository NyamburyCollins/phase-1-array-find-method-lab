// code your solution here
function superbowlWin(record) {
    const won = record.find(r => r.result === "W"); 
    return won ? won.year : undefined;

}