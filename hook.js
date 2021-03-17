enable_attack_button()


function enable_attack_button() {
    var btn = document.createElement("Attack");
    btn.innerHTML = "Attack";
    btn.style = "color: red; background-color: white; position: absolute; top: 0px; left: 0px;"
    btn.addEventListener("click", () => {
        try {
            document.evaluate(
                '//img[@src="/site_elements/layout/fight/magic.png"]',
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue.click()
        } catch (error) {
            console.error('no monster found')
        }
    })
    document.body.appendChild(btn);
}