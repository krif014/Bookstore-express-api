const test = require('node:test');
const assert = require('node:assert/strict');
const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/app');
const Book = require('../src/models/bookModel');

let mongoServer;

test.before(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

test.beforeEach(async () => {
  await Book.deleteMany({});
});

test.after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test('book API creates, lists, reads, updates, and deletes books', async () => {
  const created = await request(app)
    .post('/api/books')
    .send({
      title: 'Things Fall Apart',
      author: 'Chinua Achebe',
      price: 12.5
    })
    .expect(201);

  assert.equal(created.body.title, 'Things Fall Apart');
  assert.equal(created.body.author, 'Chinua Achebe');
  assert.equal(created.body.price, 12.5);

  const listed = await request(app).get('/api/books').expect(200);
  assert.equal(listed.body.length, 1);

  const found = await request(app).get(`/api/books/${created.body._id}`).expect(200);
  assert.equal(found.body._id, created.body._id);

  const updated = await request(app)
    .put(`/api/books/${created.body._id}`)
    .send({ price: 15 })
    .expect(200);

  assert.equal(updated.body.price, 15);

  await request(app).delete(`/api/books/${created.body._id}`).expect(200);

  await request(app).get(`/api/books/${created.body._id}`).expect(404);
});

test('book API returns 404 when the book id is invalid or missing', async () => {
  await request(app).get('/api/books/not-a-valid-id').expect(404);
  await request(app).put('/api/books/not-a-valid-id').send({ price: 20 }).expect(404);
  await request(app).delete('/api/books/not-a-valid-id').expect(404);

  const missingId = new mongoose.Types.ObjectId();
  await request(app).get(`/api/books/${missingId}`).expect(404);
  await request(app).put(`/api/books/${missingId}`).send({ price: 20 }).expect(404);
  await request(app).delete(`/api/books/${missingId}`).expect(404);
});

test('book API validates required book fields', async () => {
  await request(app)
    .post('/api/books')
    .send({
      title: 'Incomplete Book'
    })
    .expect(400);
});

test('swagger docs describe all book endpoints', async () => {
  const response = await request(app).get('/api-docs.json').expect(200);
  const paths = response.body.paths;

  assert.equal(response.body.openapi, '3.0.3');
  assert.ok(paths['/api/books'].post);
  assert.ok(paths['/api/books'].get);
  assert.ok(paths['/api/books/{id}'].get);
  assert.ok(paths['/api/books/{id}'].put);
  assert.ok(paths['/api/books/{id}'].delete);
});
