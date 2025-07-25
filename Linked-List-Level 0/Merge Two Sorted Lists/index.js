function merge(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let curr = null;
    if (list1.val < list2.val) {
        curr = list1;
        list1 = list1.next;
    } else {
        curr = list2;
        list2 = list2.next;
    }
    let start = curr;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr.next = list1 || list2;
    return start;
};
    