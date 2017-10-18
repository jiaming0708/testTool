xdescribe('spy', () => {
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
});

describe('spy return', () => {
    var foo, bar = null;
    var fetchBar;
    beforeEach(() => {
        foo = {
            setBar: (value) => {
                bar = value;
            },
            getBar: () => {
                return bar;
            },
            getBar1: () => {
                return bar;
            }
        }

        spyOn(foo, 'getBar').and.returnValue(456);
        spyOn(foo, 'getBar1').and.callFake(() => {
            return 789;
        });

        foo.setBar(123);
        fetchBar = foo.getBar();
    });

    it('real bar', () => {
        expect(bar).toEqual(123);
    });
    
    it('return value', () => {
        expect(fetchBar).toEqual(456);
    });

    it('call fake', () => {
        expect(foo.getBar1()).toEqual(789);
    })
});