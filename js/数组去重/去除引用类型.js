let arr = [{
    "name": "ZYTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "AAAAAA.doc"
}, {
    "name": "ZYTA",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "BBBBBB.doc"
}, {
    "name": "ZDTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "CCCCCC.doc"
}, {
    "name": "ZYTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "AAAAAA.doc"
}];
let hash = {};
arr = arr.reduce(function(item, next) {
    hash[next.name] ? '' : hash[next.name] = true && item.push(next);
    return item
}, [])
console.log(arr);