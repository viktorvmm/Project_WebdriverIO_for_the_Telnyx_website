class FooterPage {
    get linkedInButton() {
        return $("a[href='https://www.linkedin.com/company/telnyx/']");
    }
}

module.exports = new FooterPage(); 