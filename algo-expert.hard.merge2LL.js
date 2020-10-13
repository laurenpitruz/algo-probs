function mergeLinkedLists(headOne, headTwo) {
  let rtn = headOne.value < headTwo.value ? headOne : headTwo
	if (headOne.value < headTwo.value) {
		merge(headOne, headTwo)
	} else {
		merge(headTwo, headOne)
	}
	return rtn
}

function merge (headOne, headTwo) {
	if (!headTwo) return
	if (!headOne.next) {
		headOne.next = headTwo
		return
	} else if (headOne.next.value < headTwo.value) {
		return merge(headOne.next, headTwo)
	} else {
		let nextHeadTwo = headOne.next
		headOne.next = headTwo
		return merge(headTwo, nextHeadTwo)
	}
}
