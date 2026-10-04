'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const Support = require('../../plugins/support')

test('support works standalone', async (t) => {
  const fastify = Fastify()
  fastify.register(Support)

  await fastify.ready()
  t.assert.strictEqual(fastify.someSupport(), 'hugs')
})

// You can also use plugin with opts in fastify v2
//
// test('support works standalone', (t, done) => {
//   t.plan(2)
//   const fastify = Fastify()
//   fastify.register(Support)
//
//   fastify.ready((err) => {
//     t.assert.ifError(err)
//     t.assert.strictEqual(fastify.someSupport(), 'hugs')
//     done()
//   })
// })
