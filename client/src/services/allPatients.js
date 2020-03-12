import axios from 'axios';

export default {
    allPatients: async () => {
        let res = await axios.post('http://localhost:5000/all-patients', {
            user_id: 'robinsondy'
        });
        return res.data;
    }
}