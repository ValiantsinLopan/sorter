class Sorter {
  constructor() {
    this.instance = [];
    this.defaultComparator = (left, right) => left - right;
    this.comparator = this.defaultComparator;
  }

  add(element) {
    this.instance.push(element);
  }

  at(index) {
    return this.instance[index];
  }

  get length() {
    return this.instance.length;
  }

  toArray() {
    return this.instance;
  }

  sort(indices) {
    let subArray = [];
    indices.sort(this.defaultComparator);
    for(let i = 0; i < indices.length; i++) {
      subArray.push(this.instance[indices[i]]);
    };

    subArray.sort(this.comparator);

    for(let i = 0; i < indices.length; i++){
      this.instance.splice(indices[i], 1, subArray[i]);
    };
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;