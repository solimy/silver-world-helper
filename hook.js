chrome.storage.sync.get({
    enable_auto_loop: false,
}, (items) => {
    if(items.enable_auto_loop) {
        let interval = setInterval(() => {
            try {
                pa = /\d+/g.exec(document.evaluate(
                    '//div[@class="label-pa"]/text()',
                    document,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                    ).singleNodeValue.nodeValue
                )[0];
            } catch (error) {
                pa = 0;
                console.error(error)
                console.info('pa indicator not found')
            }
            if (pa <= 50) {
                clearInterval(interval)
                console.info('low pa, disabling loop')
                return;
            }
            action_attack()
            action_pickup()
            action_levelup()
        }, 1000)
    }
})

enable_attack_shortcut()
enable_levelup_shortcut()
enable_pickup_shortcut()

function action_attack() {
    try {
        document.evaluate(
            '//img[@src="/site_elements/layout/fight/magic.png"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue.click()
    } catch (error) {
        console.error(error)
        console.info('no monster found')
    }
}

function enable_attack_shortcut() {
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyK") {
            action_attack()
        }
    }, false);
}

function action_pickup() {
    try {
        document.evaluate(
            '//*[@class="element_on_floor"]/*',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue.click()
    } catch (error) {
        console.error(error)
        console.info('no item to pickup')
    }
}

function enable_pickup_shortcut() {
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyP") {
            action_pickup()
        }
    }, false);
}

function action_levelup() {
    try {
        document.evaluate(
            '//input[@name="constitution"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue.value = 1
        document.evaluate(
            '//input[@name="agilite"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue.value = 1
        document.evaluate(
            '//input[@name="intelligence"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue.value = 3
        document.evaluate(
            '//*[@value="Placer les caractéristiques"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue.click()
    } catch (error) {
        console.error(error)
        console.info('You can\'t level up at the moment')
    }
}

function enable_levelup_shortcut() {
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyL") {
            action_levelup()
        }
    }, false);
}