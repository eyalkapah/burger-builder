export function transformToList(obj) {
  let arr = [];
  let objClone = { ...obj };
  for (let i of Object.keys(obj)) {
    while (objClone[i] > 0) {
      arr = [...arr, i];
      objClone[i]--;
    }
  }

  return arr;
}
