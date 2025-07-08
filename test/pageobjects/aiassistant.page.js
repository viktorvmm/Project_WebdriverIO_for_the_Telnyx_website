class AIAssistantPage {
    get openButton() { return $("div.c-bGYNvC"); }
    get chatWidget() { return $("div.c-byFbxF.c-byFbxF-inHVAk-open-true"); }
    get chatHeader() { return $(".c-gRBNgU"); }
    get chatInput() { return $("textarea.c-fJsHXZ"); }
    get sendButton() { return $("button.c-cODSYQ.c-gGVcDH"); }
    get lastBotMessage() { return $(".c-bCIlIy.c-khViZk"); }
}

module.exports = new AIAssistantPage(); 