import axios from "axios";

const skills = {
    namespaced: true,
    state: {
        data: []
    },
    actions: {
        fetch() {
            this.$axios.get('/skills/34').then(responce => {
                console.log(responce);
                
            })
        }
    }
}

export default skills;