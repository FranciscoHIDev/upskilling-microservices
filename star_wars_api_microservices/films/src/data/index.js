const axios = require("axios")

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Film")
        return result.data
    }
}