import { test, expect } from '@playwright/test';
import request from 'supertest';

const API_URL = 'https://reqres.in';

test.describe('API Testing', () => {
  test('GET /api/users?page=2', async () => {
    const response = await request(API_URL).get('/api/users?page=2');
    
    expect(response.status).toBe(200);
    const responseBody = await response.text;
    const jsonResponse = JSON.parse(responseBody);
  // Define the email to check
  const expectedEmail = 'michael.lawson@reqres.in';

  // Check if any user in the data array has the expected email
  const userExists = jsonResponse.data.some(user => user.email === expectedEmail);
  
  
  });

  test('POST /api/users', async () => {
    test.setTimeout(30000);
    const response = await request(API_URL)
      .post('/api/users')
      .send({
        title: 'foo',
        body: 'bar',
        userId: 1,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
