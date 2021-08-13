import paraAbilities from '../para-abilities.json'

export default function paraAbilityHandler(req, res) {
  const {
    query: { id },
    method,
  } = req

  const paraAbility = paraAbilities.filter(item => item.id === id)[0]

  switch (method) {
    case 'GET':
      res.status(200).json({ ...paraAbility })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
