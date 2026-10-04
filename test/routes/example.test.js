'use strict'

const { test } = require('node:test')
const { build } = require('../helper')

test('example is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/example'
  })
  t.assert.strictEqual(res.payload, 'this is an example')
})

// inject callback style:
//
// test('example is loaded', (t, done) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.assert.ifError(err)
//     t.assert.strictEqual(res.payload, 'this is an example')
//     done()
//   })
// })
