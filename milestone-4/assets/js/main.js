Vue.config.devtools = true;

var writtenMessage;

var contactsFilter;

var filtered; 



const app = new Vue ({


el: "#root",

data: {

    activeContact: 0,
    
    contacts: [
        {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'Hai portato a spasso il cane?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'Ricordati di dargli da mangiare',
        status: 'sent'
        },
        {
        date: '10/01/2020 16:15:22',
        text: 'Tutto fatto!',
        status: 'received'
        }
        ],
        },
        {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
        {
        date: '20/03/2020 16:30:00',
        text: 'Ciao come stai?',
        status: 'sent'
        },
        {
        date: '20/03/2020 16:30:55',
        text: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
        },
        {
        date: '20/03/2020 16:35:00',
        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent'
        }
        ],
        },
        {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
        {
        date: '28/03/2020 10:10:40',
        text: 'La Marianna va in campagna',
        status: 'received'
        },
        {
        date: '28/03/2020 10:20:10',
        text: 'Sicuro di non aver sbagliato chat?',
        status: 'sent'
        },
        {
        date: '28/03/2020 16:15:22',
        text: 'Ah scusa!',
        status: 'received'
        }
        ],
        },
        {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'Si, ma preferirei andare al cinema',
        status: 'received'
        }
        ],
        },
        ]

},

    methods: {

        /**
         * This function returns the index of the last element of an array without needing to know the length of the array itself
         * @param {array} array this is the array whose last index is needed
         * @returns the index of the last element of the array
         */
        lastOfArray(array){
            let lastElementIndex = array.length - 1;
            console.log(lastElementIndex);
            return lastElementIndex
            
        },


        /**
         * This select the first 30 characters of a string, regardless of how long it is
         * @param {string} string the string we need to cut
         * @returns first 30 characters of the string
         */
        previewCharacters(string){
            let preview = string.slice(0,30);
            return preview
        },


        /**
         * This change the "activeContact" parameter to the index of the item selected (in this case used @click)
         * @param {number} index the index of the item
         */
        selectThis (index){
            this.activeContact = index;
        },


        /**
         * This get the string and push it in the according array, then clear the string
         * @param {string} writtenMessage 
         */
        sendMessage (writtenMessage){
            this.contacts[this.activeContact].messages.push({date: dayjs(new Date()).format(`DD/MM/YYYY HH:mm:ss`), text: writtenMessage, status: `sent`});
            this.writtenMessage = ``;
            // setTimeout(function()
            // {
            //     this.contacts[this.activeContact].messages.push({date: `5asda 1233`, text: ok, status: `received`});           
            // }, 1000)
        },


        /**
         * this sets an automatic answer ("ok") after a 1 second delay with it's own date and time, it push it to the active message array (so that it's printed thanks to the v-for cycle)
         */
        autoAnswer(){
            setTimeout(() => {
                this.contacts[this.activeContact].messages.push({date: dayjs(new Date()).format(`DD/MM/YYYY HH:mm:ss`), text: `ok`, status: `received`});
            }, 1000);
            
        },

        // procFilter(contactsFilter, filtered){
        //     filtered = contactsFilter;
        //     console.log(filtered);
        // },

        // filter(){
        //     if (contact.name.includes(filtered)){
        //          true;
        //     }
        // }

    },

})