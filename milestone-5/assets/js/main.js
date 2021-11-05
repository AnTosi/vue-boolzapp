Vue.config.devtools = true;

var writtenMessage;

// var contactsFilter;

// var filtered; 

var index;

var textPreview;



const app = new Vue ({


el: "#root",

data: {

    activeContact: 0,

    contactsFilter: "",

    cancelOpen: true,

    // chevron_index: `chevron + ${index}`,
    
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
            // if (array.lenght > 0) {

                // I need this if because if I cancel all elements from the array it returns an error
                let lastElementIndex = array.length - 1;
                // console.log(lastElementIndex);
                return lastElementIndex
            // } else {
            //     let lastElementIndex = -1;
            //     return lastElementIndex
            // }

            //currently commented the if part because it crashes a lot of stuff
            
        },

        // textPreview (lastElementIndex){
        //     if (lastElementIndex == -1) {
        //         return ""
        //     } else {
        //         return "{{previewCharacters(contact.messages[lastOfArray(contact.messages)].text)}}..."
        //     }

        // },

        // {{contact.messages[lastOfArray(contact.messages)].date}}

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

        openCloseMenu (index){
            // console.log(document.getElementById(`dropdown${index}`).classList);
            if (document.getElementById(`dropdown${index}`).classList.contains("show")) {
                document.getElementById(`dropdown${index}`).classList.remove("show")
            } else {
                document.getElementById(`dropdown${index}`).classList.add("show")
            }
        },

        deleteMessage(index){
            console.log(index);
            this.contacts[this.activeContact].messages.splice(index, 1);

        }


        // toggleOption (){
        //     if (this.classList.contains("option")){
        //         console.log(this.classList);
        //         this.classList.remove("option");
        //     } else {
        //         this.classList.add("option");
        //     }
        // },

        // openCancelMenu(index){
        //     if (document.getElementById(index).classList.contains("openedCancelMenu") {
        //         document.getElementById(index).classList.remove("openedCancelMenu")
        //     } else
        // }
        // log(cancelOpen) {
        //     console.log(this.cancelOpen);
        // }
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