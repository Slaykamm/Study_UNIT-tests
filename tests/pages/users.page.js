

const Page = require('./page');


class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading');
    }

    get usersList() {
        return $('#users-list');
    }

    get usersItems() {
        return browser.react$$('User')
    }

    async loadData() {
        try {
            await this.open()
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('user was not loaded')
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length;

            if (!usersCount) {
                throw new Error('Users were not found')
            }

            await this.usersItems[0].$('#user-delete').click()
            const usersCountAfterDelete = await this.usersItems.length;
            if (usersCount - usersCountAfterDelete !== 1) {
                throw new Error('Delete was not happened or was deleted more than 1 user')
            }


        } catch (e) {
            throw new Error('User WAS NOT DELETED' + e.message)
        }
    }

    open () {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();
