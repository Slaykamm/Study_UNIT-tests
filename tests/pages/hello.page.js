

const Page = require('./page');

class HelloPage extends Page {
    get toggleBtn() {
        return $('#toggle');
    }

    get helloTitle() {
        return $('#hello');
    }

    get helloInput() {
        return $('#search');
    }

    async toggleTitleWithInput (text) {
        await this.helloInput.setValue(text);
        await this.toggleBtn.click()
    }

    open () {
        return super.open('/hello');
    }
}

module.exports = new HelloPage();
