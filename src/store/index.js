import Vue from 'vue'
import Vuex from 'vuex'
// ES6 Modules or TypeScript
import swal from 'sweetalert';
import router from '@/router';


const api = 'https://proptechapi.herokuapp.com/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    user: null,
    leads: null,
    lead: null,
    dars: null,
    dar: null,
    sellers: null,
    errMsg: null
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user 
    },
    setLeads(state, leads) {
      state.leads = leads 
    },
    setLead(state, lead) {
      state.lead = lead 
    },
    setDars(state, dars) {
      state.dars = dars 
    },
    setDar(state, dar) {
      state.dar = dar 
    },
    setSellers(state, sellers) {
      state.sellers = sellers 
    },
    setErrMsg(state, errMsg) {
      state.errMsg = errMsg
    }
  },
  actions: {
    async getLeads(context) {
      let fetched = await fetch(api +'leads');
      let res = await fetched.json()
      context.commit('setLeads', res.leads)
    },
    async getLead(context, id) {
      let fetched = await fetch(api +'leads/' + id);
      let res = await fetched.json();
      context.commit('setLeads', res.results)
    },
    async getDars(context) {
      let fetched = await fetch(
        "https://proptechapi.herokuapp.com/dar"
      );
      let res = await fetched.json();
      context.commit("setDars", res.dar);
    },
    async getDar(context, id) {
      let fetched = await fetch(api + 'dar/' + id);
      let res = await fetched.json();
      context.commit('setDars', res.results)
    },
    // async getUser(context,id) {
    //   let fetched = await fetch("https://proptechapi.herokuapp.com/users"+id);
    //   let res = await fetched.json();
    //   context.commit("setUsers", res.users);
    // },
    async register(context, payload)  {
      fetch('https://proptechapi.herokuapp.com/register', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == "The email already exist") {
            swal({
              icon: "error",
              title: "The email already exist",
              text: "Please try another email",
              button: "OK"
            })
          } else {
            swal({
              icon: "success",
              title: "Registered",
              buttons: "OK"
            })
            context.commit('setUser', payload)
            console.log(data);
          }
        })
    },
    async login(context, payload) {
      fetch('https://proptechapi.herokuapp.com/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == 'Email does not exist') {
            swal({
              icon: "error",
              title: "Email does not exist",
              text: "Type in the proper email",
              buttons: "Try Again"
            })
          } else {
            if (data.msg == 'Incorrect Password') {
              swal({
                icon: "error",
                title: "Incorrect Password",
                buttons: "Try Again"
              })
            } else {
              swal({
                icon: "success",
                title: `Welcome Builders, ${data.msg[0].userName}`,
                buttons: "OK",
                closeOnClickOutside: false
              })

              context.commit('setUser', data.msg[0]);
              router.push('/about')
            }
          }
        })

    },
    // async getLeads(context) {
    //   fetch('http://localhost:1517/leads')
    //     .then((res) => res.json())
    //     .then((data) => context.state.leads = data.leads)
    // },
    async getSellers(context) {
      fetch('http://localhost:1517/sellers')
        .then((res) => res.json())
        .then((data) => context.state.sellers = data.buyers)
    },
    async createLead(context, payload) {
      fetch(api +'leads', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Item added`,
            buttons: "OK",
            closeOnClickOutside: false
          })
          context.dispatch('getLeads')
          // context.commit('setProducts', data.msg)
        })
    },
    async createDar(context, payload) {
      fetch('https://proptechapi.herokuapp.com/dar', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Damage Assessment Report Made`,
            buttons: "OK",
            closeOnClickOutside: false
          })
          context.dispatch('getDars')
          // context.commit('setProducts', data.msg)
        })
    },
    async deleteDar(context, id) {
      fetch(api +'dar/' + id, {
      // fetch("https://cyber-loox.herokuapp.com/products/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getLeads");
          swal({
            icon: "success",
            title: "The dar was deleted",
            button: "OK"
          })
        });
    },
    async updateDar(context,payload){
      const {darid, claimNumber, date, reportNumber, damageType, facility, damageSeverity, inspectionCategory, leakDetectionMethod, damageLocationInternal, damageLocationexternal, damageStatusConcealed, damageStatusNotConcealed, repairActionRecommendation, executiveSummary, authBy} = payload;
      fetch(api +'dar/' + darid, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getDars", data.msg);
        });
      },
    async updateLead(context,payload){
      const {lid, entryType, leadName, leadEmail, leadNumber, leadNote, uID} = payload;
      fetch(api +'leads/' + lid, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getLeads", data.msg);
        });
      },
    async deleteLead(context, id) {
      fetch(api +'leads/' + id, {
      // fetch("https://cyber-loox.herokuapp.com/products/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getLeads");
          swal({
            icon: "success",
            title: "The lead was deleted",
            button: "OK"
          })
        });
    },
  },
  modules: {
  }
})
