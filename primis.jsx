function isPrime(a,n){
    if (a ===2 || a === 3) {
      console.log( `It's a PRIME`);
    } else if( a===1){
      console.log(`Is 1 a prime number?
      Why some people say it's prime: Its positive divisors are 1 and itself.
      Why some people say it's not prime: It doesn't have exactly two positive divisors.
      Proof: The definition of a prime number is a positive integer that has exactly two positive divisors. 
      However, 1 only has one positive divisor (1 itself), 
      so it is not prime.`)
    } else if( a % 2 === 0 || a % 3 === 0) {
      console.log(`It's NOT a prime`);
    }else {
      console.log(`It's a PRIME`)
    }

  if (n) {
    nextPrime:
      for (let i = 2; i <= n; i++) {
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }
      console.log( i );
    }       
      }
}

isPrime(2,5);
isPrime(9,25);
isPrime(14);
isPrime(1,40);
isPrime(3,78);