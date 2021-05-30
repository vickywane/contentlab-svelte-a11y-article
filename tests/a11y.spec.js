const pa11y = require("pa11y")

pa11y('http://localhost:3000', {
    includeWarnings: true,
    level: "warning",
    runners : [
        "htmlcs", "axe"
    ]
}).then((results) => {
    // Do something with the results

    console.log(results)
});