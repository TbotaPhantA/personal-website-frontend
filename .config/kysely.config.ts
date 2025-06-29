import { defineConfig } from 'kysely-ctl'
import SQLite from 'better-sqlite3';
import { SqliteDialect } from 'kysely';

export const dialect = new SqliteDialect({
	database: new SQLite('data.sqlite')
});

export default defineConfig({
	dialect: dialect,
	  migrations: {
	    migrationFolder: "migrations",
	  },
	  seeds: {
	    seedFolder: "seeds",
	  }
	//   plugins: [],
})
