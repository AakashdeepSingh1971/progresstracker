import firebase from 'firebase-admin';
import { createUserOptions, User } from './types';

export class Database {
    private _serviceAccount = require(process.env.GOOGLE_SERVICE_ACC_PATH || "");
    constructor() {
        this.init();
    }

    init() {
        firebase.initializeApp({
            credential: firebase.credential.cert(this._serviceAccount),
            databaseURL: 'https://aakash-proj-default-rtdb.firebaseio.com/'
        })
    }

    async getUser(username: string) {
        const snap = await firebase.database().ref(`users/${username}`).once('value');
        if (snap.exists()) return snap.toJSON() as User;
        return false;
    }

    async createUser(user: createUserOptions) {
        if (!user.password) return false;
        if (!user.username) return false;

        const snap = await firebase.database().ref(`users/${user.username}`).once('value');
        if (snap.exists()) return false;

    }

}