export interface User {
    name: string;
    password: string;
    status: Status;
    userImgUrl: string;
    email: string;
}

enum Status {admin, writer, user}

export let users: User[] = [
    {
        name: '',
        password: '',
        status: Status.user,
        userImgUrl: '',
        email: ''
    },
    {
        name: 'Adminchik',
        password: 'iloveyoubaby',
        status: Status.admin,
        userImgUrl: 'https://i.pinimg.com/564x/87/a8/a3/87a8a378128df67cc09df6eda20be10f.jpg',
        email: 'adminchik@russian.hater.com'
    },
    {
        name: 'Serhii',
        password: 'iftodaywasyourlastday',
        status: Status.writer,
        userImgUrl: 'https://i.pinimg.com/564x/fa/3b/9c/fa3b9c4a5b49b4a88a9fe53e8248a31a.jpg',
        email: 'shugarmommy@russian.hater.com'
    }

]

export let autorisation: boolean = false;

export function setAutorisation(user:User){ currentUser = user; autorisation = true; console.log('user is set')}
export function logout(){currentUser = users[0]; autorisation = false;}

export let currentUser : User = users[1];
