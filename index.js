import { remote } from "webdriverio"


async function main () {
    const browser = await remote({
        capabilities:{
            browserName: 'chrome'
        }
    })

    //code testing
    try{
        await browser.url('https://www.saucedemo.com/')
        //$ untuk mencari sebuah elemen. kenapa pake #, karena dia merupakan id
        const loginButton = await browser.$('#login-button')
        await loginButton.click()

    } finally {
        browser.pause(1000)
        browser.deleteSession()

    }
}

main ()