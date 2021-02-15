import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: [],
  token: null
})

export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts
  },
  addPost (state, post) {
    console.log(post)
    state.postsLoaded.push(post)
  },
  editPost (state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },
  addComment (state, comment) {
    console.log(comment)
    state.commentsLoaded.push(comment)
  },
  setToken (state, token) {
    state.token = token
  },
  destroyToken (state) {
    state.token = null
  },
}

export const actions = {
  nuxtServerInit ({commit}, contex) {
    return axios.get('https://blog-nuxt-4fccf-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        console.log(res)
        const postsArray = []
        for (let key in res.data) {
          postsArray.push( { ...res.data[key], id: key } )
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  authUser ({commit}, authData) {
    const key = 'AIzaSyAAiUV5hZW5jvGIaG14tGHHRZEbJKHs-xA'
    // return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then((res) => { commit('setToken', res.data.idToken) })
      .catch(e => console.log(e))
  },
  logoutUser({commit}) {
    commit('destroyToken')
  },
  addPost ({commit}, post) {
    console.log(post)
    return axios.post('https://blog-nuxt-4fccf-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        //отправляем в mutation
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch(e => console.log(e))
  },
  editPost ({commit, state}, post) {
    return axios.put(`https://blog-nuxt-4fccf-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  addComment ({commit}, comment) {
  //addComment (comment) {
    //console.log(1)
    //console.log(comment)
    return axios.post('https://blog-nuxt-4fccf-default-rtdb.firebaseio.com/comments.json', comment)
      .then(res => {
        //отправляем в mutation
        commit('addComment', { ...comment, id: res.data.name })
      })
      .catch(e => console.log(e))
  }
}


export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  },
  checkAuthUser (state) {
    return state.token != null
  }
}
