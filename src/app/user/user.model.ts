

export class User {
    constructor(
        public id: number,
        public firstname: String,
        public lastname: String,
        public birthdate: Date,
        public cin: number,
        public email: String,
        public address: String,
        public phone: number,
        public login:String,
        public mdp:String
    ) {}
}
