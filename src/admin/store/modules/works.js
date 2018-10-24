const works = {
    namespaced: true,
    state: {
      data: []
    },
    mutations: {
      loadWorks: (state, works) => state.data = works,
      addNewWork: (state, newWork) => state.data.push(newWork),
      removeWork: (state, workId) => state.data = state.data.filter(work => work.id !== workId)
    },
    actions: {
      fetch({commit}) {
        this.$axios.get('/works/34').then(
          response => {
            commit('loadWorks', response.data);
          },
          error => {
            console.error(error)
          }
        );
      },
      add({commit}, work) {
        const formData = new FormData();

        Object.keys(work).forEach(key => formData.append(key, work[key]));
        console.log (work)
        this.$axios.post('/works', formData).then(
          response => {
            // commit('addNewWork', response.data);
          },
          error => {
            console.error(error)
          }
        );
      },
      remove({commit}, workId) {
        this.$axios.delete(`/works/${workId}`).then(
          response => {
            commit('removeWork', workId)
          },
          error => {
            console.error(error)
          }
        )
      }
    }
  }
  
  export default works;