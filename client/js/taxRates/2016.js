var Rates = [
  {
    min: 0,
    max: 11000,
    tax: 0
  },
  {
    min: 11000,
    max: 18000,
    tax: 25
  },
  {
    min: 18000,
    max: 31000,
    tax: 35
  },
  {
    min: 31000,
    max: 60000,
    tax: 42
  },
  {
    min: 60000,
    max: 90000,
    tax: 48
  },
  {
    min: 90000,
    max: 1000000,
    tax: 50
  },
  {
    min: 1000000,
    max: null,
    tax: 55
  }
]

module.exports = Rates;