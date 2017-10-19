describe('Protractor Demo App', function () {
    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    })
    it('first input', () => {
        let first = element(by.css('.input-small'));
        first.sendKeys('2');
        expect(first.getAttribute('value')).toEqual('2');
    });
});