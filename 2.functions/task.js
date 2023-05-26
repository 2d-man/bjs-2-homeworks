function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    (arr[i] > max) ? max = arr[i] : max = max;
    (arr[i] < min) ? min = arr[i] : min = min;
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
    } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length < 1) {
    return 0;
    } else { 
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
       (arr[i] > max) ? max = arr[i] : max = max;
       (arr[i] < min) ? min = arr[i] : min = min;
  }
    return (max - min);
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      (arr[i] % 2 === 0) ? sumEvenElement += arr[i] : sumOddElement += arr[i];
    }
    return (sumEvenElement - sumOddElement);
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
    } else { 
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    return (sumEvenElement / countEvenElement);
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let a;
  for (let i = 0; i < arrOfArr.length; i++) {
    a = func(...arrOfArr[i]);
    if (a > maxWorkerResult) {
      maxWorkerResult = a;
    }
  }
  return maxWorkerResult;
}
