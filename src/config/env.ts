import { config } from 'dotenv'
config()

export default {
    cassandra: {
        port: process.env.CASSANDRA_CQL_PORT_NUMBER || 9042,
        contactPoints: process.env.CASSANDRA_HOST || '127.0.0.1:7000',
        user: process.env.CASSANDRA_USER || 'cassandra',
        password: process.env.CASSANDRA_PASSWORD || 'cassandra'
    }
}