import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: 'HI There',
  })
})

app.listen(8000, () => {
  console.log('Backend is working')
})
