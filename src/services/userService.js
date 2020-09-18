import Http from './httpService';

export default class User {

    constructor(id = null) {
        this.id = id;
    }

    async getUser() {
        try {
            const { data: user } = await Http.get('/user');
            return user;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}