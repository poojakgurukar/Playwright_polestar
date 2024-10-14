import { test, expect } from '@playwright/test';
import request from 'supertest';

const API_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Testing', () => {
  test('GET /posts/1', async () => {
    const response = await request(API_URL).get('/posts/1');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
  });

  test('POST /posts', async () => {
    test.setTimeout(30000);
    const response = await request(API_URL)
      .post('/posts')
      .send({
        title: 'foo',
        body: 'bar',
        userId: 1,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
