module.exports = {
    'video-qs test' : function(browser) {
        const url = 'https://video-qs.herokuapp.com/quickstart/';
        const joinBtn = '#button-join';
        const roomInputField = '#room-name';
        const userInputField = '#user-name';
        const roomName = 'cake-room';
        const userName = `User1`;
    
        browser
            .url(url)
            .waitForElementVisible("body", 15000)
            .setValue(roomInputField, roomName)
            .setValue(userInputField, userName)
            .click(joinBtn)
            .pause(300000)
            .end()
    }
};
