
exports.up = function(knex) {
  knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('emnail').notNullable();
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