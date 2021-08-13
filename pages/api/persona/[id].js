import personas from '../personas.json'

export default function personaHandler(req, res) {
  const {
    query: { id },
    method,
  } = req

  const persona = personas.filter(item => item.id === id)[0]

  switch (method) {
    case 'GET':
      res.status(200).json({ ...persona })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
