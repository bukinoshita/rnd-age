'use strict'

import test from 'ava'
import rndAge from './..'

test('should return a random age', async t => {
  const randomAge = await rndAge(1994, 2017).then(res => res)

  t.is(typeof randomAge, 'number')
})

test('should return an error', async t => {
  const randomAge = await rndAge(1994, 1993).catch(err => err)

  t.is(randomAge, 'Invalid date. Start date should be higher than end date')
})
