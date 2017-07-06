class AssertionError extends Error {
  constructor (...props) {
    super(...props)
    this.name = 'AssertionError'
  }
}

module.exports.assert = (exp) => {
  if (!exp) {
    throw new AssertionError
  }
}

// for Array
module.exports.assertArrayEqual = (arr1, arr2) => {
  if (JSON.stringify(arr1) !== JSON.stringify(arr2)) {
    throw new AssertionError 
  }
}
