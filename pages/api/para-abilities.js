import paraAbilities from './para-abilities.json'

export default function handler(req, res) {
  res.status(200).json(paraAbilities)
}
