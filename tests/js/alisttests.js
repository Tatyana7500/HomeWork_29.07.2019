describe('HomeWork 29.07.2019', () => {
        describe('init', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    expected: [],
                },
                {
                    arr: new AList(),
                    mass: [1],
                    expected: [1],
                },
                {
                    arr: new AList(),
                    mass: [1, 6],
                    expected: [1, 6],
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    expected: [7, 5, 9, 6, 4],
                },
            ];

            testData.forEach(data => {
                const {arr, mass, expected} = data;

                const actual = arr.init(mass);

                it(`should return [${expected}] when initial mass = [${mass}]`, () => {
                    assert.deepEqual(actual, expected);
                });
            });
        });

        describe('toString', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    expected: '[]',
                },
                {
                    arr: new AList(),
                    mass: [1],
                    expected: '[1]',
                },
                {
                    arr: new AList(),
                    mass: [1, 6],
                    expected: '[1, 6]',
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    expected: '[7, 5, 9, 6, 4]',
                },
            ];

            testData.forEach(data => {
                const {arr, mass, expected} = data;
                arr.init(mass);
                const actual = arr.toString();

                it(`should return ${expected} when arr = ${arr}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('getSize', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    expected: null,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    expected: 1,
                },
                {
                    arr: new AList(),
                    mass: [1, 6],
                    expected: 2,
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    expected: 5,
                },
            ];

            testData.forEach(data => {
                const {arr, mass, expected} = data;
                arr.init(mass);
                const actual = arr.getSize();

                it(`should return ${expected} when arr = ${arr}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('push', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    element: 2,
                    expected: 1,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    element: 3,
                    expected: 2,
                },
                {
                    arr: new AList(),
                    mass: [1, 6],
                    element: 3,
                    expected: 3,
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    element: -2,
                    expected: 6,
                },
            ];

            testData.forEach(data => {
                const {arr, mass, element, expected} = data;
                arr.init(mass);
                const actual = arr.push(element);

                it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}], element = ${element}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('pop', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    expected: undefined,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    expected: 1,
                },
                {
                    arr: new AList(),
                    mass: [1, 6],
                    expected: 6,
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    expected: 4,
                },
            ];

            testData.forEach(data => {
                const {arr, mass, expected} = data;
                arr.init(mass);
                const actual = arr.pop();

                it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}]`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('shift', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    element: 2,
                    expected: 1,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    element: 3,
                    expected: 2,
                },
                {
                    arr: new AList(),
                    mass: [1, 6],
                    element: 3,
                    expected: 3,
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    element: -2,
                    expected: 6,
                },
            ];

            testData.forEach(data => {
                const {arr, mass, element, expected} = data;
                arr.init(mass);
                const actual = arr.shift(element);

                it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}], element = ${element}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('unshift', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    expected: undefined,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    expected: 1,
                },
                {
                    arr: new AList(),
                    mass: [1, 6],
                    expected: 1,
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    expected: 7,
                },
            ];

            testData.forEach(data => {
                const {arr, mass, expected} = data;
                arr.init(mass);
                const actual = arr.unshift();

                it(`should return ${expected} and result arr ${arr} when initial arr = [${mass}]`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('sort', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    expected: -1,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    expected: [1],
                },
                {
                    arr: new AList(),
                    mass: [9, 6],
                    expected: [6, 9],
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    expected: [4, 5, 6, 7, 9],
                },
            ];

            testData.forEach(data => {
                const {arr, mass, expected} = data;
                arr.init(mass);
                const actual = arr.sort();

                it(`should return [${expected}] when initial arr = [${mass}]`, () => {
                    assert.deepEqual(actual, expected);
                });
            });
        });

        describe('set', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    index: 0,
                    element: 1,
                    expected: [1],
                },
                {
                    arr: new AList(),
                    mass: [1],
                    index: 1,
                    element: 2,
                    expected: [1, 2],
                },
                {
                    arr: new AList(),
                    mass: [9, 6],
                    index: 1,
                    element: 2,
                    expected: [9, 2],
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    index: 3,
                    element: 10,
                    expected: [7, 5, 9, 10, 4],
                },
            ];

            testData.forEach(data => {
                const {arr, mass, index, element, expected} = data;
                arr.init(mass);
                const actual = arr.set(index, element);

                it(`should return [${expected}] when initial arr = [${mass}], index = ${index}, element = ${element}`, () => {
                    assert.deepEqual(actual, expected);
                });
            });
        });

        describe('get', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    index: 0,
                    expected: undefined,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    index: 0,
                    expected: 1,
                },
                {
                    arr: new AList(),
                    mass: [9, 6],
                    index: 1,
                    expected: 6,
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    index: 3,
                    expected: 6,
                },
            ];

            testData.forEach(data => {
                const {arr, mass, index, expected} = data;
                arr.init(mass);
                const actual = arr.get(index);

                it(`should return ${expected} when arr = [${mass}] and index = ${index}`, () => {
                    assert.strictEqual(actual, expected);
                });
            });
        });

        describe('slice', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    begin: 0,
                    end: 2,
                    expected: undefined,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    begin: 0,
                    end: 1,
                    expected: [1],
                },
                {
                    arr: new AList(),
                    mass: [9, 6],
                    begin: 0,
                    end: 1,
                    expected: [9],
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    begin: 1,
                    end: 3,
                    expected: [5, 9],
                },
            ];

            testData.forEach(data => {
                const {arr, mass, begin, end, expected} = data;
                arr.init(mass);
                const actual = arr.slice(begin, end);

                it(`should return [${expected}] and result arr = ${arr} when initial arr = [${mass}] and begin = ${begin}, end = ${end}`, () => {
                    assert.deepEqual(actual, expected);
                });
            });
        });

        describe('splice', () => {
            const testData = [
                {
                    arr: new AList(),
                    mass: [],
                    begin: 0,
                    count: 2,
                    expected: undefined,
                },
                {
                    arr: new AList(),
                    mass: [1],
                    begin: 0,
                    count: 1,
                    expected: [1],
                },
            ];

            testData.forEach(data => {
                const {arr, mass, begin, count, expected} = data;
                arr.init(mass);
                const actual = arr.splice(begin, count);

                it(`should return [${expected}] and result arr = ${arr} when initial arr = [${mass}] and begin = ${begin}, count = ${count}`, () => {
                    assert.deepEqual(actual, expected);
                });
            });

            const testDataWithElement = [
                {
                    arr: new AList(),
                    mass: [9, 6],
                    begin: 1,
                    count: 1,
                    element1: 10,
                    element2: 11,
                    element3: 12,
                    expected: [6],
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    begin: 1,
                    count: 4,
                    element1: 10,
                    element2: 11,
                    element3: 12,
                    expected: [5, 9, 6, 4],
                },
                {
                    arr: new AList(),
                    mass: [7, 5, 9, 6, 4],
                    begin: 1,
                    count: 3,
                    element1: 10,
                    element2: 11,
                    element3: 12,
                    expected: [5, 9, 6],
                },
            ];

            testDataWithElement.forEach(data => {
                const {arr, mass, begin, count, element1, element2, element3, expected} = data;
                arr.init(mass);
                const actual = arr.splice(begin, count, element1, element2, element3);

                it(`should return [${expected}] and result arr = ${arr} when initial arr = [${mass}] and begin = ${begin}, count = ${count}, element for insert = ${element1}, ${element2}, ${element3}`, () => {
                    assert.deepEqual(actual, expected);
                });
            });
        });
    });