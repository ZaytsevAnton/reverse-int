module.exports = function reverse (n) {
  let b = Math.abs(n).toString().split('');
   return Number(b.reverse().join(''));
} 

