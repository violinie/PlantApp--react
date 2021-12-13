const data = [
  {
    id: 1,
    title: "Philodendron scandens",
    image: "https://via.placeholder.com/350",
    difficulty: 1,
    lightExposure: "low",
  },
  {
    id: 2,
    title: "Philodendron scandens Brasil",
    image: "https://via.placeholder.com/350",
    difficulty: 2,
    lightExposure: "medium",
  },
  {
    id: 3,
    title: "Monstera adansonii",
    image: "https://via.placeholder.com/350",
    difficulty: 1,
    lightExposure: "high",
  },
  {
    id: 4,
    title: "Monstera deliciosa",
    image: "https://via.placeholder.com/350",
    difficulty: 1,
    lightExposure: "medium",
  },
  {
    id: 5,
    title: "Peperomia argyreia",
    image: "https://via.placeholder.com/350",
    difficulty: 3,
    lightExposure: "medium",
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
