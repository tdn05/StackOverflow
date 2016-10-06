import * as mongoose from 'mongoose';

const URL = 'mongodb://admin:Secret123!@ds035776.mlab.com:35776/coolkidsdata';

class Database {
    public static connect(){
        mongoose.connect(URL);
        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'Connection error'));

        db.once('once', console.log.bind(console,'CONNECTED'))
    }
}

export default Database;
