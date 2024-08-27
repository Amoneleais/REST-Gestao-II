const games = [
    {
        id: 1,
        title: "Final Fantasy",
        genre: "RPG"
    },
    {
        id: 2,
        title: "Pitfall",
        genre: "Platform"
    },
    {
        id: 3,
        title: "Metal Gear Solid",
        genre: "Action"
    }
];

const gamesController = {
    getAll: async (req, res) => {
        try {
            return res.status(201).send(games);
        } catch (err) {
            return res.status(500).send("Internal Server Error");
        }
    },
    create: async (req, res) => {
        try {
            if (!req.body.title || !req.body.genre) {
                return res.status(400).send("Title and genre are required.");
            }

            const game = {
                id: games.length + 1,
                title: req.body.title,
                genre: req.body.genre
            };

            games.push(game);
            return res.status(201).send(game);
        } catch (err) {
            return res.status(500).send("Internal Server Error");
        }
    }
};

module.exports = gamesController;
