import { USERS } from "./users";

export const POSTS = [
    {
        postImg : require('../assets/images/Iron-Man-Img.jpg'),
        user : USERS[0].user,
        profileImg : USERS[0].img,
        likes : 101,
        caption : 'Iron Man is a superhero appearing in American comic books published by Marvel Comics.',
        commentCount: 4,
        postTime: `12 hours`,
        comment:[
            {
                user : 'Thanos',
                comment : 'I found the stones',
            },
        ],
    },
    {
        postImg : require('../assets/images/Thor.jpg'),
        user : USERS[1].user,
        profileImg : USERS[1].img,
        likes : 201,
        caption : 'Thor is a superhero appearing in American comic books published by Marvel Comics.',
        commentCount: 5,
        postTime: `20 hours`,
        comment:[
            {
                user : 'Thanos',
                comment : 'I found the stones',
            },
        ],
    },
]