xdescribe('frist test', () => {
    it('hello jasmine', () => {
        expect(true).toBe(true);
    });

    it('toEqual', () => {
        let a = 12;
        expect(a).toEqual(12);
    });

    it('less & greater', () => {
        let pi = 3.14159;
        let e = 2.78;
        expect(pi).not.toBeLessThan(e);
        expect(pi).toBeGreaterThan(e);
    })
});

describe('before & after', () => {
    var foo = 0;
    beforeEach(() => {
        foo += 1;
    });

    afterEach(() => {
        foo = 0;
    })

    it('each', () => {
        expect(foo).toEqual(1);
    });

    it('more each', () => {
        expect(foo).toEqual(1);
    });
});

describe('before all', () => {
    var foo = 0;
    beforeAll(() => {
        foo += 1;
    });

    it('each 1', () => {
        expect(foo).toEqual(1);
    })

    it('each 2', () => {
        expect(foo).not.toEqual(2);
    });
})