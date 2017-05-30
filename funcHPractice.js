/**
 * 1.Write an avg function that accepts an array of numbers and returns the average.
 
 */
let total=0;
    let avge=0;
let nums= [8, 10, 14, 9, 20, 15, 12, 4];

function getAvg(nums) {
  return nums.reduce(function (total, num ) {
    return total + num;
  }) / nums.length;
}

console.log(getAvg(nums));

/**
 * 2:Write an containsVowels function that accepts a string and returns true if any of them are vowels and false otherwise.
 */
let words= ['apple', 'bird', 'banana', 'eccc'] ;
  function vowel(word){
      if(word[0]=== 'a' || word[0]==='e' || word[0]==='i' || word[0]=== 'o' || word[0]=== 'u'){
          return true;
      }else{
          return false;
      }

  }
  console.log(words.filter(vowel));

  /**
   * 3.Write a piglatin function that accepts a string and returns the piglatin version of that string. 
   * "This is an example of piglatin" becomes "hisTay siay naay xampleeay foay iglatinpay".
   */

 //let string="This is an example of piglatin";
  function piglatin(string){
      let wrds =string.split('');
   for(let i=0; i<wrds.length; i++){
       let letters=wrds[i].split('');
       let fLetter=letters.shift();
       console.log(fLetter);
       letters.push(fLetter);
       letters.push('ay');
       wrds[i]=letters.join('');

   }
   return wrds.join('');

  }
  console.log(piglatin('good day'));

  /**
   * 4. Write a longestWord function that accepts a string and returns the longest word from the string.
   */


let names = ['Johnmark', 'DevidM', 'LuwisL', 'Megan'];

 function largeWord(name) {
    if (name.length === 6) {
        return true;
    } else {
        return false;
    }
}
 
 console.log(names.filter(largeWord));

 /**
  * 5.Write a multiples function that accepts two numbers and returns 
  an array of numbers from 1 - 100 that are evenly divisible by both.
  */
    let no=[];
    function multiple(min,max){

        for(let i=1; i<= 100; i++){
            
            if(i%min==0 && i%max==0)
            {
                no.push(i);

            }
             
        }
        return no;
    }

console.log(multiple(3,9));

  /**
   * 6. Write a find function that accepts an array of numbers and an individual number. 
   * Return true if the number exists anywhere inß the array or false if not.
  */
       let numbers=[ 5, 8, 10, 15, 17, 9, 21, 57, 2, 12]
        function individual(number) {
             if(number === 57){
                 return true;
             }else{
                 return false;
             }
        }
        console.log(numbers.filter(individual)) ;                                                                                                                                                                                                                                                                                                                                                                                 