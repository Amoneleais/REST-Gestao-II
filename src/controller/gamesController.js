const games = [{
    id: "1",
    title: "Final Fantasy",
    genre: "RPG"
},
{
    id: "2",
    title: "Pitfall",
    genre: "Platform"
},
{
    id: "3",
    title: "Metal Gear Solid",
    genre: "Action"
}
]

const gamesController = {
    getAll: async (req, res) => {
        try{
            return res.send(games);
        }catch(err){
            return res.send(err);
        }
    }
};

module.exports = gamesController;