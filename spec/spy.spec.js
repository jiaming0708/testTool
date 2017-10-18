describe('spy', () => {
    var foo, bar = null;
    beforeEach(() => {
        foo = {
            setBar: (value) => {
                bar = value;
            }
        }

        spyOn(foo, 'setBar');

        foo.setBar(123);
    });

    it('check function have been called', () => {
        expect(foo.setBar).toHaveBeenCalled(); 
    });

    it('check parameter is right', () => {
        expect(foo.setBar).toHaveBeenCalledWith(123);
    });

    it('check bar is null', () => {
        expect(bar).toBeNull();
    });
})