function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Menggunakan Jest untuk menguji fungsi
describe('Mathematical Operations', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('adds negative numbers', () => {
        expect(add(-1, -1)).toBe(-2);
    });

    test('subtracts negative numbers', () => {
        expect(subtract(-1, -1)).toBe(0);
    });
});
