<template>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            >
            <v-text-field color="orange" v-for="input in inputs"
              :key="label"
              :v-model="input.vmodel"
              :label="input.label"
              :type="input.type"
              :suffix="input.suffix"
              outlined
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
              color="orange"
              text
              @click="submit"
            >
              Login
            </v-btn>
            <v-btn
              color="orange"
              text
              to="/signup"
            >
              Signup
            </v-btn>
      </v-container>
    </v-form>
  </template>
  
  <script>
    export default {
      name: 'LoginForm',
  
      data: () => ({
        
        inputs:
         [
          {
            label: 'email',
            href: 'https://github.com/vuetifyjs/vuetify-loader',
            vmodel: 'email',
            type: "email",
            suffix: "",
            existingUser: true
          },
          {
            label: 'password',
            href: 'https://github.com/vuetifyjs/vuetify',
            vmodel: 'password',
            type: "password",
            suffix: "",
            existingUser: true
          },
        ],
      }),
    }
  </script>
  <style scoped>
   .v-form{
      display: flex;
      align-items: center;
      height: 60vh;
    }
  </style>