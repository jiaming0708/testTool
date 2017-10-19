describe('Protractor Demo App', function () {
    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    })
    it('first input', () => {
        let first = element(by.css('.input-small'));
        first.sendKeys('2');
        expect(first.getAttribute('value')).toEqual('2');
    });
    
    it('two input', () => {
        let els = element.all(by.css('.input-small'));
        let first = els.get(0);
        // let first = els.first(); same as get(0)
        first.sendKeys('2');
        let sec = els.get(1);
        // let sec = els.last(); same as get(1)
        sec.sendKeys('4');
    });

    fit('calculate', () => {
        let els = element.all(by.css('.input-small'));
        let first = els.get(0);
        // let first = els.first(); same as get(0)
        first.sendKeys('2');
        let sec = els.get(1);
        // let sec = els.last();
        sec.sendKeys('4');
        element(by.id('gobutton')).click();
        expect($('h2').getText()).toEqual('6');
    })
});