export default function paraAbilityHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      res.status(200).json({ id, name: `para-ability ${id}` })
      break
    case 'PUT':
      res.status(200).json({ id, name: name || `para-ability ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
