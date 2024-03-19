const request = require('supertest');
const { app } = require('../../app');

describe('Games API', () => {
    describe('GET /games', () => {
        it('should return all games', async () => {
            const res = await request(app).get('/api/games');
            expect(res.status).toBe(200);
        });
    });

    describe('POST /games', () => {
        it('should create a new game', async () => {
            const newGame = {
                title: 'New Game',
                genre: 'Adventure'
            };

            const res = await request(app).post('/api/games').send(newGame);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body.title).toBe(newGame.title);
            expect(res.body.genre).toBe(newGame.genre);
        });

        it('should return status 400 if title or genre is missing', async () => {
            const incompleteGame = {
                title: 'Incomplete Game'
            };

            const res = await request(app).post('/api/games').send(incompleteGame);
            expect(res.status).toBe(400);
            expect(res.text).toBe('Title and genre are required.');
        });
    });
});