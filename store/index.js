import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const createStore=()=>{
    return new Vuex.Store({
        state: {
            loadedPosts:[]
        },
        mutations:{
            setPosts(state, posts){
                state.loadedPosts=posts
            },
            addPost(state, post){
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost){
                const postIndex=state.loadedPost.findIndex(post=>{
                    editedPost.id===post.id
                })
                state.loadedPosts[postIndex]=editedPost;
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                return  axios.get('https://nuxt-ap.firebaseio.com/posts.json')
                    .then(res=>{
                        const postsArray=[];
                        for (const key in res.data){
                            postsArray.push({...res.data[key], id:key})
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e=>console.log(e))
                

            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post){
                const createdPost= {
                    ...post,
                    updatedDate: new Date()
                    }
                return axios.post('https://nuxt-ap.firebaseio.com/posts.json', createdPost)
                  .then(res=>{
                        vuexContext.commit('addPost', {...createdPost, id:res.data.name})
                    })
                  .catch(e=>{console.log(e)})
                
            },
            editPost(vuexContext, editedPost){
                return axios.put('https://nuxt-ap.firebaseio.com/posts/'+
                    editedPost.id+'.json', editedPost)
                    .then(res=>{
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e=>console.log(e))
                
            }

        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts
            }
        }
    })
}

export default createStore;
