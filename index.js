/**
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).
If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

*/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    word = word.split('')
    let nWord = word.slice(0,  word.indexOf(ch)+1)
    let r = nWord.length - 1;
    let l = 0;
    while(l < r){
        [nWord[l], nWord[r]] = [nWord[r], nWord[l]];
        l++;
        r--;
    }

    return nWord.join('') + word.slice(word.indexOf(ch) + 1).join('');
};
