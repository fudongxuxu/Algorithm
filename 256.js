var findRestaurant = function (list1, list2) {
    let len1 = list1.length, len2 = list2.length;
    let min = len1 + len2;
    let map = new Map();
    for (let i = 0; i < len1; i++) {
        map.set(list1[i], i)
    }
    let resI = []
    for (let j = 0; j < len2; j++) {
        if (map.has(list2[j])) {
            map.set(list2[j], map.get(list2[j]) + j)
        } else {
            map.delete(list2[j])
        }
    }
    console.log(map);
};
findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"])