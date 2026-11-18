class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.submit = page.getByRole('button', { name: 'Submit' });
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }
}

module.exports = { LoginPage };