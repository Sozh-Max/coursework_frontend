const getHeadersForCrossword = matrix => {
  const headers = [];
  matrix.forEach((row, i) => {
    let count = 0;
    headers[i] = [];
    row.forEach((column, j) => {
      if (column === '1') {
        if (row.length === j + 1) {
          headers[i].push(++count);
          count = 0;
        } else {
          count++;
        }
      } else if (count > 0) {
        headers[i].push(count);
        count = 0;
      }
    })
  });
  return headers;
}

export const reformatPicture = data => data.map((row, i) => row.split('')
  .map((column, j) => {
  return {
    rowId: i,
    colId: j,
    check: false,
    value: column === '1',
  }
}));

export const reformatHeaders = data => {
  const matrix = data.map(string => string.split(''));
  const newMatrix = [];
  for (let j = 0; j < matrix[0].length; j++) {
    newMatrix[j] = [];
    for (let i = 0; i < matrix.length; i++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }

  let topSide = getHeadersForCrossword(newMatrix);
  let leftSide = getHeadersForCrossword(matrix);

  const topSideLength = Math.max(...topSide.map(column => column.length));
  const leftSideLength = Math.max(...leftSide.map(row => row.length));

  const newTopSide = [];
  topSide = topSide.map(column => {
    column.reverse();
    column.length = topSideLength;
    return column.reverse();
  });
  for (let j = 0; j < topSide[0].length; j++) {
    newTopSide[j] = [];
    for (let i = 0; i < topSide.length; i++) {
      newTopSide[j][i] = topSide[i][j];
    }
  }

  const newLeftSide = [];
  leftSide = leftSide.map(row => {
    row.reverse();
    row.length = topSideLength;
    return row.reverse();
  })
  for (let i = 0; i < leftSide.length; i++) {
    newLeftSide[i] = [];
    for (let j = 0; j < leftSide[i].length; j++) {
      newLeftSide[i][j] = leftSide[i][j];
    }
  }

  return {
    topSide: newTopSide,
    topSideLength,
    leftSide: newLeftSide,
    leftSideLength,
  }
}

export const getTdClassName = (data, isShow) => {
  if (isShow) {
    if (data.check && data.value) {
      return 'guessed';
    }
    if (data.check) {
      return 'selected';
    }
    if (data.value) {
      return 'check';
    }
  }
  if (data.check) {
    return 'selected';
  }

}

export const checkResult = data => {
  let result = true;
  data.forEach(elem => {
    elem.forEach(item => {
      if (item.check !== item.value) result = false;
    })
  })
  return result;
}
