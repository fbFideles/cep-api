const axios = require('axios')

module.exports = {
    apiData: async (req, res) => {
        try {
            const viaCepResponse = await axios.get(`https://viacep.com.br/ws/${req.query.code}/json`)
        
            return res.json(viaCepResponse.data)
        } 
        catch(error) {
            console.warn(error)
        }
    } 
}