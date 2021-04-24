
export class Contact {

    constructor(public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '') {

    }

    setId?() {
        // Implement your own set Id
        this._id = this.makeId()
    }


    public makeId?(length = 5) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}