const deleteNullElementFromObject = (object: Object) => {
  for (var element in object) {
    if (!object[element]) {
      delete object[element];
    }
    if (typeof object[element] === 'object' && object[element].length === 0) {
      delete object[element];
    }
  }
};

export { deleteNullElementFromObject };
