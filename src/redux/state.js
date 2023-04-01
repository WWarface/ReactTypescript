import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            { message: "Ya segodnya seriy", id: "0" },
            { message: "ee kak rulit", id: "1" },
            { message: "a zalubku ce zroblu a zalubky", id: "2" }
        ]
    },

    dialogPage: {
        dialogs: [
            { id: '0', name: 'Hrtntrue', url: 'https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg', isActive: true },
            { id: '1', name: 'Slava', url: 'https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large', isActive: false },
            { id: '2', name: 'Ivakhiv1', url: 'https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3', isActive: false },
            { id: '3', name: 'Custom4mo', url: 'https://www.racedepartment.com/attachments/fleetari3-png.430600/', isActive: false }
        ],

        messages: [
            { message: "Hi negros!", id: "0" },
            { message: "Hi negros AXE!", id: "1" },
            { message: "Ubili nekra!", id: "2" }
        ],

        newMessageText: 'type text here'
    },
       

    friendsPage: {
        friendDialogs: [
            { id: '0', name: 'Hrtntrue', url: 'https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg'},
            { id: '1', name: 'Slava', url: 'https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large'},
            { id: '2', name: 'Ivakhiv1', url: 'https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3'},
            { id: '3', name: 'Kasha', url: 'https://i.pinimg.com/280x280_RS/87/3d/46/873d46ee85823fd0da288476969b6fbc.jpg'},
            { id: '4', name: 'Masha', url: 'https://assets1.ignimgs.com/2018/06/21/hollowknight-1280-1529623462572.jpg'},
            { id: '5', name: 'Natasha', url: 'https://preview.redd.it/y4delam4f5t51.jpg?width=1920&format=pjpg&auto=webp&s=36ffc9624bbcc62f3ae265954bc640eadf7aee73'},
            { id: '6', name: 'Omega', url: 'https://i.redd.it/39o99a40cln61.jpg'}           
        ]
    }          
};

window.state = state;


export let addMessage = () => {
    let message = {message: state.dialogPage.newMessageText, id: state.dialogPage.messages.length+1};

    state.dialogPage.messages.push(message);

    state.dialogPage.newMessageText = '';
    
    renderEntireTree(state);
};

export let updateMessageText = (newText) => {
    state.dialogPage.newMessageText = newText;
    renderEntireTree(state);
};

export default state
