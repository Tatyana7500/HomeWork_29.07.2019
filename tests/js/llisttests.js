describe('HomeWork 29.07.2019', () => {
    describe('toString', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: '',
            },
            {
                llist: new LList(),
                mass: [1],
                expected: '1',
            },
            {
                llist: new LList(),
                mass: [1, 6],
                expected: '1, 6',
            },
            {
                llist: new LList(),
                mass: [7, 5, 9, 6, 4],
                expected: '7, 5, 9, 6, 4',
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.toString();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('push', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                element: 3,
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [1],
                element: 2,
                expected: 2,
            },
            {
                llist: new LList(),
                mass: [1, 6],
                element: 8,
                expected: 3,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                element: 8,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, element, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.push(element);

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}], element = ${element}`, () => {
                assert.strictEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('pop', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [3, 6],
                expected: 6,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                expected: 7,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.pop();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('shift', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                element: 3,
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [1],
                element: 2,
                expected: 2,
            },
            {
                llist: new LList(),
                mass: [1, 6],
                element: 8,
                expected: 3,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                element: 8,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, element, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.shift(element);

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}], element = ${element}`, () => {
                assert.strictEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('unshift', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [3, 6],
                expected: 3,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                expected: 2,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.unshift();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.strictEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('sort', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                expected: '1',
            },
            {
                llist: new LList(),
                mass: [6, 3],
                expected: '3, 6',
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                expected: '2, 6, 6, 7, 9',
            },
        ];

        testData.forEach(data => {
            const {llist, mass, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.sort();

            it(`should return '${expected}' and list '${llist.toString()}' when init list = [${mass}]`, () => {
                assert.deepEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('set', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [1],
                index: 0,
                element: 2,
            },
            {
                llist: new LList(),
                mass: [6, 3],
                index: 1,
                element: 2,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                index: 3,
                element: 2,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, index, element} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.set(index, element);

            it(`should get list '${llist.toString()}' after set element ${element} in index ${index} when init list = [${mass}]`, () => {
                assert.strictEqual(actual, undefined);
            });
            llist.slice(0);
        });
    });

    describe('get', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                index: 0,
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                index: 0,
                expected: 1,
            },
            {
                llist: new LList(),
                mass: [6, 3],
                index: 1,
                expected: 3,
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                index: 3,
                expected: 6,
            },
        ];

        testData.forEach(data => {
            const {llist, mass, index, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.get(index);

            it(`should return ${expected} when list = '${llist.toString()}' and index = ${index}`, () => {
                assert.strictEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('slice', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                begin: 0,
                end: 1,
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                begin: 0,
                end: 1,
                expected: [1],
            },
            {
                llist: new LList(),
                mass: [6, 3],
                begin: 1,
                end: 2,
                expected: [3],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 1,
                end: 3,
                expected: [6, 9],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 0,
                expected: [2, 6, 9, 6 ,7],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 1,
                expected: [6, 9, 6 ,7],
            },
        ];

        testData.forEach(data => {
            const {llist, mass, begin, end, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.slice(begin, end);

            it(`should return ${expected} and list = '${llist.toString()}' when init mass = ${mass} and begin = ${begin}, end = ${end}`, () => {
                assert.deepEqual(actual, expected);
            });
            llist.slice(0);
        });
    });

    describe('splice', () => {
        const testData = [
            {
                llist: new LList(),
                mass: [],
                begin: 0,
                count: 1,
                expected: undefined,
            },
            {
                llist: new LList(),
                mass: [1],
                begin: 0,
                count: 1,
                expected: [1],
            },
            {
                llist: new LList(),
                mass: [6, 3],
                begin: 1,
                count: 2,
                expected: [3, undefined],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 1,
                count: 3,
                expected: [6, 9, 6],
            },
            {
                llist: new LList(),
                mass: [2, 6, 9, 6 ,7],
                begin: 0,
                count: 2,
                expected: [2, 6],
            },
        ];

        testData.forEach(data => {
            const {llist, mass, begin, count, expected} = data;
            mass.forEach(temp => {
                llist.push(temp);
            });

            const actual = llist.splice(begin, count);

            it(`should return ${expected} and list = '${llist.toString()}' when init mass = ${mass} and begin = ${begin}, count = ${count}`, () => {
                assert.deepEqual(actual, expected);
            });
            llist.slice(0);
        });
    })
});