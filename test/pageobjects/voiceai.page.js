class VoiceAIPage {
    get title() { return $("h1=Voice AI Agents"); }
    get subtitle() { return $("p=Build, test, and launch voice AI agents cheaper, faster, and with total control. Deploy AI agents on a trusted network with one-click telephony integration for smooth, real-time, human-like voice experiences."); }
    get startBuildingBtn() { return $("//a[.//span[text()='Start building for free']]"); }
    get contactUsBtn() { return $("//a[.//span[text()='Contact us']]"); }
}

module.exports = new VoiceAIPage(); 