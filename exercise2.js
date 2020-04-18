 
const testNum = num => {
  return new Promise((resolve, reject) => {
    if (num > 50) {
      resolve(num + ' is greater than 50');
    } else {
      reject(num + ' is less than 50');
    
        }
  });
};

testNum(49)
  .then(result => console.log(result))
  .catch(error => console.log(error));
testNum(55)
  .then(result => console.log(result))
  .catch(error => console.log(error));
