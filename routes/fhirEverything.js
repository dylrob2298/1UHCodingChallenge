const express = require('express');
const router = express.Router();
const axios = require('axios');

const CLIENT_ID = '576d25e14d9a439693c1c50e45477017';
const CLIENT_SECRET = 'Q67kPMDZNAnkoVd88Yng54MxnaROckZS';

router.post('/', function(req, res, next) {
    const user_id = req.body.user_id
    let url = 'https://api.1up.health/fhir/dstu2/Patient/f8fedcd9e6e5/$everything'
    if (req.body.next !== 0) {
        url = req.body.next
    }
    
    axios.post('https://api.1up.health/user-management/v1/user/auth-code', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        app_user_id: user_id
    })
    .then(response => {
        console.log(response.data.success)
        console.log(user_id)
        if(response.data.success === true) {
            return response.data.code
        } else {
            axios.post('https://api.1up.health/user-management/v1/user', {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                app_user_id: user_id
            })
            .then(response => {
                return response.data.code
            })
            .catch(error => console.log('Error', error));
        }
    })
    .then(response => {
        console.log(response)
        axios.post('https://api.1up.health/fhir/oauth2/token', {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code: response,
                grant_type: 'authorization_code'
            })
            .then(response => {
                const ACCESS_TOKEN = response.data.access_token
                const options = {
                    headers: {  'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + ACCESS_TOKEN}
                }

                axios.get(url, options)
                    .then(response => {
                        console.log(JSON.stringify(response.data, undefined, 2))
                        
                        let data = response.data
                        // console.log('Entries: ')
                        // console.log(JSON.stringify(response.data.entry, undefined, 2))

                        let entries = response.data.entry


                        res.send(response.data)



                    })
                    .catch(error => console.log('Error', error))
            })
            .catch(error => console.log('Error', error));
            
    })
    .catch(error => console.log('Error', error));

});

module.exports = router;