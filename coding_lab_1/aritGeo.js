let aritGeo = (arr) => {
    let i, j;

    let diff = arr[1] - arr[0];
    let isArithmetic = true;
    for (i = 1, j = 2; isArithmetic && j < arr.length; i++, j++) {
      if (isArithmetic && arr[j] - arr[i] != diff) {
        isArithmetic = false;
        }
    }

    let ratio = arr[1] / arr[0];
    let isGeometric = isFinite(ratio) && ratio !== 0;
    for (let i = 1, j = 2; isGeometric && j < arr.length; i++, j++) {
      if (isGeometric && arr[j] / arr[i] != ratio) {
        isGeometric = false;
      }
    }
    
  if(!(isArithmetic) && !(isGeometric))
  {
    return -1;
  }
  else if(isArithmetic)
  {
    return 'Arithmetic'
  }
  else if(isGeometric)
  {
    return 'Geometric'
  }
  else
  {
    return 0;
  }

   
}