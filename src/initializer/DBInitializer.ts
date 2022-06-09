/* eslint-disable @typescript-eslint/no-unsafe-call */
import DbStartUp from '@src/interface/DbStartUp';
import LoggerUtil from '@src/util/LoggerUtil';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

class DbInitializer implements DbStartUp {
    private _mongoServer?: MongoMemoryServer;

    public async open(): Promise<void> {
        LoggerUtil.debug('Connecting to inMemory mongo db');
        this._mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(this._mongoServer.getUri(), {
            useNewUrlParser: true,
            dbName: 'inMemory',
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        mongoose.connection.on('connected', () => {
            LoggerUtil.debug('Mongo: connected');
        });

        mongoose.connection.on('disconnected', () => {
            LoggerUtil.error('Mongo: disconnected');
        });

        mongoose.connection.on('error', (err) => {
            LoggerUtil.error(`Mongo:  ${JSON.stringify(err)}`);
        });
    }

    public async close(): Promise<void> {
        await mongoose.disconnect();
        await this._mongoServer?.stop();
    }
}

export default new DbInitializer();
