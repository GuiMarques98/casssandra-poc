CREATE KEYSPACE IF NOT EXISTS curia
WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };