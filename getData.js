const fs = require('fs');

const getdata = () => {
  let data = fs.readFileSync('./data.json')
  let dataBase = JSON.parse(data);
  let arr = [];
  for (var i = 0; i <= dataBase.length-1; i++) {
    arr.push(dataBase[i])
  }
  return arr
}

module.exports = getdata;