
exports.up = function(knex) {
  knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();      
      table.string('uf', 2).notNullable();
  });
};

//Se der algum problema com a tabela criada no método UP, o método DOWN serve para deletar a tabela

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

/* CRIAÇÃO DE TABELAS 

   npx knex  migrate:make create_ongs
   npx knex  migrate:make create_incidents

   */
// Para executar o Migrations e criar a tabela, usa-se o comando no cmd "npx knex migrate:latest"


/**
 * Criando o banco de dados pelo npx não conseguia criar as tabelas, então baixei a extenção para o chrome do SQLiteManager 
 * criei o banco de dados por lá
 * criei as tabelas:
 * create table ongs( id varchar(50) NOT NULL PRIMARY KEY, name varchar(50), email varchar(50), whatsapp varchar(20), city varchar(20), uf varchar(2))
 * create table incidents( id INTEGER not null PRIMARY KEY AUTOINCREMENT, title varchar(20), description varchar(500), value decimal(5,2), ong_id varchar(50), FOREIGN KEY (ong_id) REFERENCES ongs(id))
 * depois baixei o arquivo do banco e coloquei na pasta src->database com o mesmo nome do arquivo original "db.sqlite"
 */