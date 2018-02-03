
exports.up = (knex) =>
    knex.schema.table('contato', (tb) =>
        tb.string('telefone'))

exports.down = (knex) => knex.schema.table('contato', (tb) => {

    tb.dropColumn('telefone')
})
