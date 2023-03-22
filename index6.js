let list = ["一", "二", "三", "shi"];

function findTwins(list) {
    return list.length !== new Set(list).size;
}

console.log(findTwins(list))