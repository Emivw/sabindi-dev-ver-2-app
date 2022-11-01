<<<<<<< HEAD
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
        "https://proptechapi.herokuapp.com/dars"
      );
      let res = await fetched.json();
      context.commit("setDars", res.dar);
    },
    async getDar(context, id) {
      let fetched = await fetch(api + 'dars/' + id);
      let res = await fetched.json();
      context.commit('setDars', res.results)
    },
=======
import Vue from "vue";
import Vuex from "vuex";
// ES6 Modules or TypeScript
import swal from "sweetalert";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

const api = "https://proptechapi.herokuapp.com/";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    // Leads
    leads: null,
    lead: null,
    // Quotes
    quotes: null,
    quote: null,
    // Material
    materials: null,
    material: null,
    sellers: null,
    errMsg: null,
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    // Leads
    setLeads(state, leads) {
      state.leads = leads;
    },
    setLead(state, lead) {
      state.lead = lead;
    },

    // Quotes
    setQuotes(state, quotes) {
      state.quotes = quotes;
    },
    setQuote(state, quote) {
      state.quote = quote;
    },

    // Materials
    setMaterials(state, materials) {
      state.materials = materials;
    },
    setMaterial(state, material) {
      state.material = material;
    },

    setSellers(state, sellers) {
      state.sellers = sellers;
    },
    setErrMsg(state, errMsg) {
      state.errMsg = errMsg;
    },
  },
  actions: {
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
    // async getUser(context,id) {
    //   let fetched = await fetch("https://proptechapi.herokuapp.com/users"+id);
    //   let res = await fetched.json();
    //   context.commit("setUsers", res.users);
    // },
<<<<<<< HEAD
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
=======
    async register(context, payload) {
      fetch("https://proptechapi.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (payload == "") {
            swal({
              icon: "error",
              title: "Values needed",
              text: "Enter values",
              button: "OK",
            });
          } else if (data.msg == "The email already exist") {
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
            swal({
              icon: "error",
              title: "The email already exist",
              text: "Please try another email",
<<<<<<< HEAD
              button: "OK"
            })
=======
              button: "OK",
            });
            localStorage.removeItem("users");
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
          } else {
            swal({
              icon: "success",
              title: "Registered",
<<<<<<< HEAD
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
=======
              buttons: "OK",
            });
            context.commit("setUser", payload);
            router.push("/about");
          }
        });
    },
    async login(context, payload) {
      fetch("https://proptechapi.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == "Email does not exist") {
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
            swal({
              icon: "error",
              title: "Email does not exist",
              text: "Type in the proper email",
<<<<<<< HEAD
              buttons: "Try Again"
            })
          } else {
            if (data.msg == 'Incorrect Password') {
              swal({
                icon: "error",
                title: "Incorrect Password",
                buttons: "Try Again"
              })
=======
              buttons: "Try Again",
            });
          } else {
            if (data.msg == "Incorrect Password") {
              swal({
                icon: "error",
                title: "Incorrect Password",
                buttons: "Try Again",
              });
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
            } else {
              swal({
                icon: "success",
                title: `Welcome Builders, ${data.msg[0].userName}`,
                buttons: "OK",
<<<<<<< HEAD
                closeOnClickOutside: false
              })

              context.commit('setUser', data.msg[0]);
              router.push('/about')
            }
          }
        })

=======
                closeOnClickOutside: false,
              });
              context.commit("setUser", data.msg[0]);
              router.push("/about");
            }
          }
        });
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
    },
    // async getLeads(context) {
    //   fetch('http://localhost:1517/leads')
    //     .then((res) => res.json())
    //     .then((data) => context.state.leads = data.leads)
    // },
    async getSellers(context) {
<<<<<<< HEAD
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
=======
      fetch("http://localhost:1517/sellers")
        .then((res) => res.json())
        .then((data) => (context.state.sellers = data.buyers));
    },

    // Get leads
    async getLeads(context) {
      let fetched = await fetch(api + "leads");
      let res = await fetched.json();
      context.commit("setLeads", res.leads);
    },
    async getLead(context, id) {
      let fetched = await fetch(api + "leads/" + id);
      let res = await fetched.json();
      context.commit("setLead", res.results);
    },
    async createLead(context, payload) {
      fetch(api + "leads", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Item added`,
            buttons: "OK",
<<<<<<< HEAD
            closeOnClickOutside: false
          })
          context.dispatch('getLeads')
          // context.commit('setProducts', data.msg)
        })
    },
    async createDar(context, payload) {
      fetch('https://proptechapi.herokuapp.com/dars', {
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
      fetch(api +'dars/' + id, {
      // fetch("https://cyber-loox.herokuapp.com/products/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        })
        .then((res) => res.json())
        .then((data) => {
          context.dispatch("getDars");
          swal({
            icon: "success",
            title: "The dar was deleted",
            button: "OK"
          })
        });
    },
    async updateDar(context,payload){
      const {darid, claimNumber, date, reportNumber, damageType, facility, damageSeverity, inspectionCategory, leakDetectionMethod, damageLocationInternal, damageLocationexternal, damageStatusConcealed, damageStatusNotConcealed, repairActionRecommendation, executiveSummary, authBy} = payload;
      fetch(api +'dars/' + darid, {
=======
            closeOnClickOutside: false,
          });
          context.dispatch("getLeads");
          // context.commit('setProducts', data.msg)
        });
    },
    async updateLead(context, payload) {
      const { lid, entryType, leadName, leadEmail, leadNumber, leadNote, uID } =
        payload;
      fetch(api + "leads/" + id, {
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
<<<<<<< HEAD
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
=======
          if (data.msg == "Edited") {
            swal({
              icon: "success",
              title: "The lead was edited successfully",
              button: "OK",
            });
            context.dispatch("getLeads", data.msg);
          }
        });
      console.log(data);
    },
    async deleteLead(context, id) {
      fetch(api + "leads/" + id, {
        // fetch("https://cyber-loox.herokuapp.com/products/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getLeads");
          swal({
            icon: "success",
            title: "The lead was deleted",
<<<<<<< HEAD
            button: "OK"
          })
        });
    },
  },
  modules: {
  }
})
=======
            button: "OK",
          });
        });
    },

    // Quotes
    async getQuotes(context) {
      let fetched = await fetch(api + "quotes");
      let res = await fetched.json();
      console.log(res.quotes);
      context.commit("setQuotes", res.quotes);
    },
    async getQuote(context, id) {
      let fetched = await fetch(api + "quotes/" + id);
      let res = await fetched.json();
      console.log(res.quote);
      context.commit("setQuote", res.results);
    },
    async createQuote(context, payload) {
      fetch(api + "quotes", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Quote added`,
            buttons: "OK",
            closeOnClickOutside: false,
          });
          context.dispatch("getQuotes");
          // context.commit('setProducts', data.msg)
        });
    },
    async updateQuote(context, payload) {
      const {
        entryType,
        uID,
        cusName,
        cusNo,
        cusAddresss,
        damageType,
        insCat,
        leakDetectMethod,
        dmgLocation,
        dmgStatus,
        RepRecom,
        qtDesc,
        summary,
        jobCat,
        qteMaterials,
        scope,
        total,
        addNote,
      } = payload;
      fetch(api + "quotes/" + id, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg == "Edited") {
            swal({
              icon: "success",
              title: "The quote was edited successfully",
              button: "OK",
            });
            context.dispatch("getQuotes", data.msg);
          }
        });
    },
    async deleteQuote(context, id) {
      fetch(api + "quotes/" + id, {
        // fetch("https://cyber-loox.herokuapp.com/products/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getQuotes");
          swal({
            icon: "success",
            title: "The quote was deleted",
            button: "OK",
          });
        });
    },

    // Materials
    async getMaterials(context) {
      let fetched = await fetch(api + "materials");
      let res = await fetched.json();
      console.log(res);
      context.commit("setMaterials", res.leads);
    },

    async getMaterial(context, id) {
      let fetched = await fetch(api + "materials/" + id);
      let res = await fetched.json();
      context.commit("setMaterial", res.results);
    },
    async createMaterial(context, payload) {
      fetch(api + "materials", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Material added`,
            buttons: "OK",
            closeOnClickOutside: false,
          });
          context.dispatch("getMaterials");
          // context.commit('setProducts', data.msg)
        });
    },
    async updateMaterial(context, payload) {
      const {} = payload;
      fetch(api + "materials/" + id, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg == "Edited") {
            swal({
              icon: "success",
              title: "The material was edited successfully",
              button: "OK",
            });
            context.dispatch("getMaterials", data.msg);
          }
        });
    },
    async deleteMaterial(context, id) {
      fetch(api + "materials/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getMaterials");
          swal({
            icon: "success",
            title: "The material was deleted",
            button: "OK",
          });
        });
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
>>>>>>> a16babf0c14a336f0237ca34118a35c4fbd2fde9
