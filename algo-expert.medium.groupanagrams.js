function groupAnagrams(words) {
  /*
		hashmap
			oy: [oy, yo]
			act: [act, tac, cat]
			flop: [flop, olfp]

		let wordsMap = {}
		let outputArray = []
		for (let i = 0; i < words.length; i++) {
			let sortedWord = words[i].split('').sort().join('')
			if (hashmap(sortedWord)) {
				hashmap[sortedWord].push(words[i])
			} else {
				hashmap[sortedWord] = [words[i]]
			}
		}

		for (let key in wordsMap) {
			outputArray.push(wordsMap[key])
		}
		return outputArray
	*/

	let wordsMap = {}
	let outputArray = []

	for (let i = 0; i < words.length; i++) {
		let sortedWord = words[i].split('').sort().join('')
		if (wordsMap[sortedWord]) {
			wordsMap[sortedWord].push(words[i])
		} else {
			wordsMap[sortedWord] = [words[i]]
		}
	}

	for (let key in wordsMap) {
		outputArray.push(wordsMap[key])
	}

	return outputArray
}
