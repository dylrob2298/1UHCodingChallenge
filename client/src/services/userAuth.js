import axios from 'axios';

export default {
    getUserAuth: async () => {
        let res = await axios.post('http://localhost:5000/user-token', {
            user_id: 'robinsondy'
        });
        return res.data;
    }
}