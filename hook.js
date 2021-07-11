enable_attack_shortcut()
enable_levelup_shortcut()
enable_pickup_shortcut()


function enable_attack_shortcut() {
    let action = () => {
        try {
            document.evaluate(
                '//img[@src="/site_elements/layout/fight/magic.png"]',
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue.click()
        } catch (error) {
            console.log(error)
            console.log('no monster found')
        }
    }
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyK") {
            action()
        }
    }, false);
}


function enable_pickup_shortcut() {
    let action = () => {
        try {
            document.evaluate(
                '//*[@class="element_on_floor"]/*',
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue.click()
        } catch (error) {
            console.log(error)
            console.log('no item to pickup')
        }
    }
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyP") {
            action()
        }
    }, false);
}


function enable_levelup_shortcut() {
    let action = () => {
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
            console.log(error)
            console.log('You can\'t level up at the moment')
        }
    }
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyL") {
            action()
        }
    }, false);
}