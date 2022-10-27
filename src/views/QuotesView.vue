<template>
    <v-card>
        <v-data-table :headers="headers" :items="report" :items-per-page="5" class="elevation-1"></v-data-table>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from '../components/BottomNav'
export default {
    components: {
        BottomNav,
    },
    data() {
        return {
            dialog: false,
            plus: false,
            deletes: false,
            pencil: false,
            direction: 'left',
            fab: false,
            fling: true,
            hover: false,
            tabs: null,
            top: true,
            right: true,
            bottom: false,
            left: false,
            transition: 'scale-transition',
            tabs: null,
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Area', value: 'area' },
                { text: 'Quote No', value: 'quote' },

            ],
            report: [
                {
                    name: 'S. Razack',
                    area: 'Ravensmead',
                    quote: 'HQ QTE 472',
                },
                {
                    name: 'J. Isaacs',
                    area: 'Mitchells Plain',
                    quote: 'HQ QTE 473',
                },
                {
                    name: 'C. Adonis',
                    area: 'Ravensmead',
                    quote: 'HQ QTE 474',
                },
                {
                    name: 'M. Rinquest',
                    area: 'Ravensmead',
                    quote: 'HQ QTE 475',
                },
                {
                    name: 'E. Van Wyk',
                    area: 'Wynberg',
                    quote: 'HQ QTE 476',
                },
                {
                    name: 'E. Elliott',
                    area: 'Mitchells Plain',
                    quote: 'HQ QTE 477',
                },

            ],

            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }

    },
    watch: {
        top(val) {
            this.bottom = !val
        },
        right(val) {
            this.left = !val
        },
        bottom(val) {
            this.top = !val
        },
        left(val) {
            this.right = !val
        },
    },
    methods: {
        clickIcon(results) {
            var icon = document.getElementById('change');
            if (results == "plus") {
                this.plus = true
                this.deletes = false
                this.pencil = false
                this.dialog = true
            }
            if (results == "pencil") {
                this.pencil = true
                this.plus = false
                this.dialog = true
            }
            if (results == "delete") {
                this.deletes = true
                this.plus = false
                this.pencil = false
            }
        }
    }
}
</script>

<style scoped>
/* Helper classes */
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
    position: absolute;
}

#create .v-btn--floating {
    position: relative;
}

.overflow {
    position: static;
}

.container--fluid {
    max-width: 100%;
    display: none !important;
}


.account {
    color: orange !important;
}

.mdi-account-circle::before {
    content: "\F0009";
    color: black !important;
}

.v-application .primary--text {
    color: orange !important;
    caret-color: #1976d2 !important;
}

.mdi-microphone::before {
    content: "\F036C";
    color: orange !important;
}

.v-toolbar__content {
    background-color: black;
    color: white;
}
</style>