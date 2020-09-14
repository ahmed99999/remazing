import Http from './httpService';

export default class Client {

    constructor(id = null) {
        this.id = id;
    }

    static async getClients() {
        try {
            const { data: clients } = await Http.get("/clients");
            return clients;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getClient() {
        try {
            const { data: client } = await Http.get(`/clients/${this.id}`);
            return client;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}