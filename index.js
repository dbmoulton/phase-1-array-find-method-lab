// function win(results){
//     return (result == "W")
// }

function superbowlWin(array){
    for(let item of array){
        if(item.result === "W"){
        return item.year
        }
    }
 }