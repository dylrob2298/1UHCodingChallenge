import axios from 'axios';

export default {
    connectEpic: async () => {
        let res = await axios.post('http://localhost:5000/connect-epic', {
            user_id: 'robinsondy'
        });
        return res.data;
    }
}