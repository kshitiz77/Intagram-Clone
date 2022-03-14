import { USERS } from "./users";

export const POSTS = [
    {
        postImg : require('../assets/Iron-Man-Img.jpg'),
        user : USERS[0].user,
        profileImg : USERS[0].img,
        likes : 101,
        caption : 'Iron Man is a superhero appearing in American comic books published by Marvel Comics.',
        comment:[
            {
                user : 'Thanos',
                comment : 'I found the stones',
            },
        ],
    },
]