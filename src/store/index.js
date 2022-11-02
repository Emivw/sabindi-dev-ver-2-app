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
    // lead: null,
    // Quotes
    quotes: null,
    quote: null,
    // Material
    materials: null,
    material: null,
    // Inventory
    inventory: null,
    sellers: null,
    // work orders
    wos: null,
    wo: null,
    // purchase orders
        pos: null,
        po: null,
    //Damage Assessment Report
        dars: null,
        dar: null,
   //cart 
   mat:null,
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
    // setLead(state, leads) {
    //   state.leads = leads;
    // },
    // damage report
    setDARS(state, dars) {
      state.dars = dars;
    },
    setdar(state, dar) {
      state.dar = dar;
    },

    // work orders
    setWOS(state, wos) {
      state.wos = wos;
    },
    setWO(state, wo) {
      state.wo = wo;
    },
    // purchase orders
        setPOS(state, pos) {
          state.pos = pos;
        },
        setPO(state, po) {
          state.po = po;
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

    // Inventory
    setInventory(state, inventory) {
      state.inventory = inventory;
    },

    // Cart
    setMat(context, mat) {
      context.mat = mat
    },

    setSellers(state, sellers) {
      state.sellers = sellers;
    },
    setErrMsg(state, errMsg) {
      state.errMsg = errMsg;
    },


  },
  actions: {
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
            swal({
              icon: "error",
              title: "The email already exist",
              text: "Please try another email",
              button: "OK",
            });
            localStorage.removeItem("users");
          } else {
            swal({
              icon: "success",
              title: "Registered",
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
            swal({
              icon: "error",
              title: "Email does not exist",
              text: "Type in the proper email",
              buttons: "Try Again",
            });
          } else {
            if (data.msg == "Incorrect Password") {
              swal({
                icon: "error",
                title: "Incorrect Password",
                buttons: "Try Again",
              });
            } else {
              swal({
                icon: "success",
                title: `Welcome Builders, ${data.msg[0].userName}`,
                buttons: "OK",
                closeOnClickOutside: false,
              });
              context.commit("setUser", data.msg[0]);
              context.dispatch('getMat', data.msg[0].uid)
              router.push("/about");
            }
          }
        });
    },

        // Get damage reports
        async getDARS(context) {
          let fetched = await fetch(api + "dars");
          let res = await fetched.json();
          context.commit("setDARS", res.dars);
        },
        async getDAR(context, id) {
          let fetched = await fetch(api + "dars/" + id);
          let res = await fetched.json();
          context.commit("setdar", res.results);
        },
        async createDAR(context, payload) {
          fetch(api + "dars", {
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
                title: `Item added`,
                buttons: "OK",
                closeOnClickOutside: false,
              });
              context.dispatch("getDARS");
              // context.commit('setProducts', data.msg)
            });
        },
        async updateDAR(context, payload) {
          const { darid } = payload;
          fetch(api + "dars/" + darid, {
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
                  title: "The damage Report was edited successfully",
                  button: "OK",
                });
                context.dispatch("getDAR", data.msg);
              }
            });
        },
        async deleteDAR(context, id) {
          fetch(api + "dars/" + id, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              context.dispatch("getDARS");
              swal({
                icon: "success",
                title: "The damage report was deleted",
                button: "OK",
              });
            });
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
      context.commit("setLeads", res.results);
    },
    async createLead(context, payload) {
      fetch(api + "leads", {
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
            title: `Item added`,
            buttons: "OK",
            closeOnClickOutside: false,
          });
          context.dispatch("getLead");
          // context.commit('setProducts', data.msg)
        });
    },
    async updateLead(context, payload) {
   const { lid,entryType, leadName, leadEmail, leadNumber, leadNote, uID } =  payload;
      fetch(api + "leads/"+ lid ,{
        method: "PUT",
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
              title: "The lead was edited successfully",
              button: "OK",
            });
            console.log(data);
            context.dispatch("getLead");
            this.$router.go()
          }
        });
    },
    async deleteLead(context, id) {
      fetch(api + "leads/" + id, {
        // fetch("https://cyber-loox.herokuapp.com/products/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getLeads");
          swal({
            icon: "success",
            title: "The lead was deleted",
            button: "OK",
          });
        });
    },
          // Get purchase orders
          async getPOS(context) {
            let fetched = await fetch(api + "pos");
            let res = await fetched.json();
            context.commit("setPOS", res.purchaseOrders);
          },
          async getPO(context, id) {
            let fetched = await fetch(api + "pos/" + id);
            let res = await fetched.json();
            context.commit("setPO", res.results);
          },
          async createPO(context, payload) {
            fetch(api + "pos", {
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
                  title: `Item added`,
                  buttons: "OK",
                  closeOnClickOutside: false,
                });
                context.dispatch("getPOS");
                // context.commit('setProducts', data.msg)
              });
          },
          async updatePO(context, payload) {
            const {
              poid,
              qteID,
              otp,
              sID,
              mat 
            } =
              payload;
            fetch(api + "pos/" + poid, {
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
                    title: "The purchase order was edited successfully",
                    button: "OK",
                  });
                  context.dispatch("getPO", data.msg);
                }
              });
          },
          async deletePO(context, id) {
            fetch(api + "pos/" + id, {
              method: "DELETE",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                context.dispatch("getPO");
                swal({
                  icon: "success",
                  title: "The Purchase Order was deleted",
                  button: "OK",
                });
              });
          },

    // Get work orders
    async getWOS(context) {
      let fetched = await fetch(api + "wos");
      let res = await fetched.json();
      context.commit("setWOS", res.workOrders);
    },
    async getWO(context, id) {
      let fetched = await fetch(api + "wos/" + id);
      let res = await fetched.json();
      context.commit("setWO", res.results);
    },
    async createWO(context, payload) {
      fetch(api + "wos", {
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
            title: `Item added`,
            buttons: "OK",
            closeOnClickOutside: false,
          });
          context.dispatch("getWOS");
          // context.commit('setProducts', data.msg)
        });
    },
    async updateWO(context, payload) {
      const {
        woid,
        conID,
        workers,
        entryType,
        jobCat,
        mat,
        qteID,
        poID,
        jobDesc,
        uID,
        workStatus,
        workerNote,
        workerTimeKeeping,
      } = payload;
      fetch(api + "wos/" + woid, {
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
              title: "The work order was edited successfully",
              button: "OK",
            });
            context.dispatch("getWO", data.msg);
          }
        });
    },
    async deleteWO(context, id) {
      fetch(api + "wos/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getLeads");
          swal({
            icon: "success",
            title: "The work order was deleted",
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

    // Inventory
    async getInventory(context) {
      let fetched = await fetch(api + "inventory");
      let res = await fetched.json();
      console.log(res);
      context.commit("setInventory", res.inventory);
    },
    async createItem(context, payload) {
      fetch(api + "inventory", {
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
            title: `Item added`,
            buttons: "OK",
            closeOnClickOutside: false,
          });
          context.dispatch("getInventory");
          // context.commit('setProducts', data.msg)
        });
    },
    async updateInventory(context, payload) {
      const {} = payload;
      fetch(api + "inventory/" + id, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg === "Item has been added") {
            swal({
              icon: "success",
              title: "The item was edited successfully",
              button: "OK",
            });
            context.dispatch("getMaterials", data.msg);
          }
        });
    },
    async deleteInventory(context, id) {
      fetch(api + "inventory/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getInventory");
          swal({
            icon: "success",
            title: "The item was deleted",
            button: "OK",
          });
        });
    },
//Add Mat
    addMat(context, payload) {
      let id = context.state.user.uid
      fetch('https://proptechapi.herokuapp.com/users/' + id + '/mat', {
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
          context.dispatch('getMat', id)
          console.log(id);
        })
    },
    async getMat(context, id) {
      let fetched = await fetch('https://proptechapi.herokuapp.com/users/' + id + '/mat');
      let res = await fetched.json();
      context.commit('setMat', res.results)
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
