function reverseLinkedList(head) {
	if (!head) return null
	if (!head.next) return head
  let prev = null
	let curr = head
	while(curr !== null) {
		let tmp = curr.next
		curr.next = prev
		prev = curr
		curr = tmp
	}
	return prev
}
