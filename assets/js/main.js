/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: []
        }
    },
    mounted() {
        //chiamata ajax all'interno di un ciclo for
        for (let index = 0; index < 10; index++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    //console.log(response.data.response);

                    this.emailList.push(response.data.response)
                });
            //console.log(this.emailList);

        }
    }
}).mount('#app');