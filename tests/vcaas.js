module.exports = {
    'VCaaS test' : function(browser) {
        
        const shotsDir = './screenshots';
        const joinBtn = 'div[imarker="joinButton"]';
        const saveBtn = 'div[imarker="saveBtn"]';
        const loginBtn = 'div[imarker="loginButton"]';
        const micListOpen = 'div[imarker="microphoneListMarker"]';
        const cameraListOpen = 'div[imarker="cameraListMarker"]';
        const userInputField = `//div[@class='GMYH5D2G-D'][1]/div[@class='GMYH5D2NMB flexInputWrapper GMYH5D2I0D'][1]/div[@class='ivcsTextboxWrapper'][1]/input[@class='ivcs-textbox-content'][1]`;
        const userInputFieldBlank = `//div[@class='GMYH5D2G-D'][1]/div[@class='GMYH5D2NMB flexInputWrapper GMYH5D2I0D'][1]/div[@class='ivcsTextboxWrapper'][1]/input[@class='ivcs-textbox-content watermark'][1]`;
        const confRoomInputField = `//input[@class='ivcs-textbox-content'][1]`;
        
        const url = 'https://vc.orange-business.ru/#login_by_id';
    
        const confRoom = process.env.CONFROOM || 222;                //conference room number
        const ip = require("ip").address();                          //get client IP
        const userName = process.env.LOGIN || `Robo-${ip}`;          //make up USERNAME
        const jobTimer = process.env.LIFETIME || 30;                 // session timeout in seconds
        
        console.log('## WebRTC TEST');
        console.log(`-- CONFROOM = ${confRoom}`);
        console.log(`-- USERNAME = ${userName}`);
        console.log(`-- LIFETIME = ${jobTimer}`);
        console.log();
        
        browser
            // .maximizeWindow()
            .url(url)
            .waitForElementVisible("body", 15000)
            .setValue('xpath', confRoomInputField, confRoom)
            .click(loginBtn)
            .clearValue('xpath', userInputField)
            .setValue('xpath', userInputFieldBlank, userName)
            .click(joinBtn)
            .pause(3000)
            // .click(micListOpen)
            // .pause(3000)
            // .click(cameraListOpen)
            // .waitForElementVisible(saveBtn, 15000)
            .click(saveBtn)
            .pause(3000)
            // .saveScreenshot(`${shotsDir}/test.jpeg`)
            .pause(jobTimer * 1000)
            .end()
    }
};
