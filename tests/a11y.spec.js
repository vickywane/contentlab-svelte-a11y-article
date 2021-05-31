const pa11y = require("pa11y")

const URL = process.env.APPLICATION_URL || 'http://localhost:3000'

pa11y(URL, {
    includeWarnings: true,
    level: "warning",
    runners : [
        "htmlcs", "axe"
    ]
}).then((results) => console.log(results));