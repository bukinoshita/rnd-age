'use strict'

const rndDate = require('rnd-date')

const rndAge = (from, to) => {
  return new Promise((resolve, reject) => {
    rndDate(from, to)
      .then(res => {
        const difference = Date.now() - res.getTime()
        const ageDate = new Date(difference)

        resolve(Math.abs(ageDate.getUTCFullYear() - 1970))
      })
      .catch(err => reject(err))
  })
}

module.exports = rndAge
