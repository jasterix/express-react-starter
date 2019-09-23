const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.get('/api/customers', (req, res)=> {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Mbaku', lastName: 'Oyelowa'},
    {id: 3, firstName: 'Mike', lastName: 'Krasinski'}
  ]

  res.json(customers)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
