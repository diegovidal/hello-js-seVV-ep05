
const contatos = [
    { idcontato: 1, nomecontato: "Diego Vidal", telefone: "852510928" },
    { idcontato: 2, nomecontato: "Yuri", telefone: "748373837" },
    { idcontato: 3, nomecontato: "Leonardo", telefone: "9282910292" }
]

exports.up = function(knex, Promise) {
  
    return knex('contato').insert(contatos)
};

exports.down = function(knex, Promise) {
  
    return knex("contato").del()
        .whereIn("idcontato", contatos.map(e => e.idcontato))
};
