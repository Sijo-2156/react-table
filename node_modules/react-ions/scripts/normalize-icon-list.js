/**
 * Get the master list and return an array of fully qualified icon paths
 *
 * @param {Array} List
 * @return {Array}
 */
function normalizeIconList(list) {
  var normalizedList = []

  for (set in list) {
    var categories = Object.getOwnPropertyNames(list[set])
    var set = list[set]

    categories.forEach(function (category) {
      var catSet = set[category]

      return catSet.forEach(function (set) {
        normalizedList.push(set)
      })
    })
  }

  return normalizedList
}

module.exports = normalizeIconList
