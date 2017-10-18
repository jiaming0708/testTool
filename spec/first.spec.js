describe('frist test', () => {
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