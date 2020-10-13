function longestPalindromicSubstring(string) {
  let longestString = string[0]
	for (let i = 0; i < string.length - 1; i++) {
		if (string[i] === string[i + 1]) {
			let nextStringDouble = expandFromCenter(string, i, i + 1)
			if (nextStringDouble.length > longestString.length) longestString = nextStringDouble
		}
		if (string[i - 1] === string[i + 1]) {
			let nextStringSingle = expandFromCenter(string, i - 1, i + 1)
			if (nextStringSingle.length > longestString.length) longestString = nextStringSingle
		}
	}
	return longestString
}

function expandFromCenter(string, L, R) {
	while(string[L] === string[R] && L >= 0 && R < string.length) {
		L--
		R++
	}
	return string.slice(L + 1, R)
}
// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
