import axios from 'axios';

export default {
    getEverything: async (nextlink) => {
        let res = await axios.post('http://localhost:5000/get-everything', {
            user_id: 'robinsondy',
            next: nextlink
        });
        return res.data;
    }
}