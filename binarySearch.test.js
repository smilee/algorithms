function findMiddleIndex(left, right) {
  return Math.floor((left + right) / 2);
}

function binarySearch(array, item, left, right) {
  if (left > right) {
    return false;
  }

  const middleIndex = findMiddleIndex(left, right);
  const middle = array[middleIndex];

  if (item === middle) {
    return true;
  }
  
  return item < middle
    ? binarySearch(array, item, left, middleIndex - 1)
    : binarySearch(array, item, middleIndex + 1, right)
}

const array = [0, 3, 5, 2, 7, 1];

describe('binarySearch', () => {
  context('when an array and the item to be found is given', () => {
    it('returns whether the item is found', () => {
      expect(binarySearch(array, 7, 0, array.length - 1)).toBe(true);
      expect(binarySearch(array, 4, 0, array.length - 1)).toBe(false);
    });
  });
});

describe('findMiddle', () => {
  context('when the left and right indices are given', () => {
    it('returns the middle index', () => {
      expect(findMiddleIndex(0, 5)).toBe(2)
    })
  })
})
