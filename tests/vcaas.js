module.exports = {
    'VCaaS test' : function(browser) {
        const joinBtn = 'div[imarker="joinButton"]';
        const saveBtn = 'div[imarker="saveBtn"]';
        const micListOpen = 'div[imarker="microphoneListMarker"]';
        const cameraListOpen = 'div[imarker="cameraListMarker"]';
        const userInputField = `//div[@class='GMYH5D2G-D'][1]/div[@class='GMYH5D2NMB flexInputWrapper GMYH5D2I0D'][1]/div[@class='ivcsTextboxWrapper'][1]/input[@class='ivcs-textbox-content'][1]`;
        const userInputFieldBlank = `//div[@class='GMYH5D2G-D'][1]/div[@class='GMYH5D2NMB flexInputWrapper GMYH5D2I0D'][1]/div[@class='ivcsTextboxWrapper'][1]/input[@class='ivcs-textbox-content watermark'][1]`;
        
        const url = 'https://vc.orange-business.ru/#join:t707b00ad-3f1a-4992-9816-ae777a3ec3a6';
        const userName = `User1`;
        const jobTimer = 30;        // seconds
        
        browser
            .maximizeWindow()
            .url(url)
            .waitForElementVisible("body", 15000)
            .clearValue('xpath', userInputField)
            .setValue('xpath', userInputFieldBlank, userName)
            .click(joinBtn)
            // .pause(3000)
            // .click(micListOpen)
            // .pause(3000)
            // .click(cameraListOpen)
            .waitForElementVisible(saveBtn)
            .click(saveBtn)
            .pause(jobTimer * 1000)
            .end()
    }
};
