import { Injectable } from '@angular/core'

@Injectable()
export class FriendsListService {

    getFriends(){
        return FRIENDS;
    }

    getFriend(id: number){
        return FRIENDS.find(friend => friend.id == id)
    }

    sendMessage(message){
        FRIENDS.find(mess => mess.userChats.push(message))
    }

    updateUserChats(chat){
        let index = FRIENDS.findIndex(x => x.id = chat.id)
        FRIENDS[index] = chat
    }
}

const FRIENDS = [
    {
        id: 1,
        name: 'Ozor Michael',
        email: 'michaelozor25@gmail.com',
        profilePic: 'assets/dice.png',
        lastChat: '',
        friendChats: [],
        userChats: [
            {
                id: 1,
                chat: 'How are u doing'
            }
        ]
    },
    {
        id: 2,
        name: 'Ako Tavershima',
        profilePic: '',
        lastChat: '',
        friendChats: [
            {
                id: 1,
                chat: 'How u doing'
            }
        ],
        userChats: [
            {
                id: 1,
                chat: 'Hey Xup'
            }
        ]
    },
    {
        id: 3,
        name: 'Eze Nathaniel',
        profilePic: 'assets/dice.png',
        lastChat: '',
        friendChats: [],
        userChats: [
            {
                id: 1,
                chat: 'Good to see u man'
            }
        ]
    },
    {
        id: 4,
        name: 'Anokwu Michael',
        profilePic: '',
        lastChat: '',
        friendChats: [],
        userChats: [
            {
                id: 1,
                chat: ''
            }
        ]
    },
    {
        id: 5,
        name: 'Big Chop',
        profilePic: 'assets/dice.png',
        lastChat: '',
        friendChats: [
            {
                id: 1,
                chat: '48'
            }
        ],
        userChats: [
            {
                id: 1,
                chat: 'Bitchers man'
            }
        ]
    },
    {
        id: 6,
        name: 'Onwugharam Rashford',
        profilePic: '',
        lastChat: 'assets/dice.png',
        friendChats: [],
        userChats: [
            {
                id: 1,
                chat: ''
            }
        ]
    }
]
