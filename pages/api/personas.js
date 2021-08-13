import personas from './personas.json'

export default function handler(req, res) {
  res.status(200).json(personas)
}
