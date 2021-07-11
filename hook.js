let root = document.createElement("ul");
root.className = "silver-world-helper"
enable_attack_button(root)
enable_levelup_button(root)
document.body.appendChild(root);


function enable_attack_button(root) {
    let btn = document.createElement("li");
    btn.className = "silver-world-helper"
    btn.innerHTML = "Attack";
    btn.style = "color: red"
    action = () => {
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
    btn.addEventListener("click", action)
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyK") {
            action()
        }
    }, false);
    root.appendChild(btn);
}


function enable_levelup_button(root) {
    let btn = document.createElement("li");
    btn.className = "silver-world-helper"
    btn.innerHTML = "Level up";
    btn.style = "color: blue"
    action = () => {
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
    btn.addEventListener("click", action)
    document.addEventListener('keypress', (event) => {
        if (event.code == "KeyL") {
            action()
        }
    }, false);
    root.appendChild(btn);
}