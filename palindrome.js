/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {
  let newStr = '';

  for (let i=0;i<str.length;i++){
    if (/[0a-zA-Z1-9]/.test(str[i]))
      newStr += str[i]
  }

  newStr = newStr.toLowerCase();

  if (isPalindrome(newStr))
    return true;

  return false;
 
  function isPalindrome(word) {
    if ([...word].reverse().join('') === word)
      return true

    return false;
  }
}

palindrome("_eye");
