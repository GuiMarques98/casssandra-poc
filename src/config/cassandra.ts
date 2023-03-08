import { Client, auth } from "cassandra-driver";
import env from './env';
import bluebird from 'bluebird';

// Needs to implement other if use in datacenter
const cassandraAuth = new auth.DsePlainTextAuthProvider(env.cassandra.password, env.cassandra.user)

const cassandraClient = new Client({
    contactPoints: [env.cassandra.contactPoints],
    localDataCenter: 'datacenter1',
    authProvider:  cassandraAuth,
    keyspace: 'curia',
    promiseFactory: bluebird.fromCallback
});


export default cassandraClient;