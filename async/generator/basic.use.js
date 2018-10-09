function * gen (x) {
    const y = yield x + 2;
    // console.log(y, 'here')
}

const g = gen(1);
console.log('first', g.next());
console.log('second', g.next());

