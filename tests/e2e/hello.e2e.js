const HelloPage = require('../pages/hello.page');

describe('My hello world e2e test', () => {
    it('should toggle', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    });

    it('should NOT toggle', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('he1llo')
        await expect(HelloPage.helloTitle).not.toBeExisting()

    });
});


