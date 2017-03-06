export const STORAGE_KEY = 'todos-vuejs'


export const state = {
  scores: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
  addScore (state, { text, goal,jidian }) {
    state.scores.push({
      text,
      goal,
      jidian
    })
  },

}