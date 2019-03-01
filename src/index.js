module.exports = function getZerosCount(number, base) {

  let coincideCount=1; 
  let zeroes=0; 
  let arrZero = [];

  function primes(base){
  let arrPrime = [];
  nextPrime:
    for (let i = 2; i <= base; i++) {	   
      for (let j = 2; j < i; j++) {
        if (i % j == 0) 
        continue nextPrime;
      } arrPrime.push(i);	
  } return arrPrime;
  }
    
  function restPrimes (base){
  let dive, primesArr = [], arrTrailingPrimes=[];
  primesArr = primes(base);
    for (let i=0; i<=primesArr.length; i++){
      while (base%primesArr[i]==0) {
        dive=base/primesArr[i];
        base=dive;
        arrTrailingPrimes.push(primesArr[i]);
      } 
    } return arrTrailingPrimes;
  }
  
  function maxCount(number, x){
  let n=0; result=0;
  let rez=number/x;
    while (rez>1){
      rez=rez/x
      n++;
    }
    for (let i=1; i<=n; i++){
      result += Math.floor(number/Math.pow(x,i));
    } return result;
  }
  
  let rPrimes = restPrimes(base);
 
  for (let i=0; i<rPrimes.length; i++){
    if (rPrimes[i]==rPrimes[i+1]){		
      coincideCount++;		
    } else {		
      zeroes=(maxCount(number, rPrimes[i]))/coincideCount;
      arrZero.push(Math.floor(zeroes));
      coincideCount=1;
    }	
  }
  
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  arrZero.sort (compareNumeric);
  
  return (arrZero[0]);
}