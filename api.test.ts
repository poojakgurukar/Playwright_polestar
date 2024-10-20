import { test, expect } from '@playwright/test';
import request from 'supertest';

const API_URL = 'https://reqres.in';

test.describe('API Testing', () => {
  test('@smoke: GET /api/users', async () => {
    const response = await request(API_URL).get('/api/users?page=2');
    
    expect(response.status).toBe(200);
    const responseBody = await response.text;
    const jsonResponse = JSON.parse(responseBody);
    
  // Define the email to check
  const expectedEmail = 'michael.lawson@reqres.in';

  // Check if any user in the data array has the expected email
  const userExists = jsonResponse.data.some(user => user.email === expectedEmail);
  
  
  });

  test('@smoke: POST /api/users', async () => {
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
  
test('@smoke: Update user with PUT', async () => {
  const userId = 13; // User ID as a number
  const updatedUserData = {
      id: userId,
      email: "xyz@gmail.com",
      name: "John Doe",
      job: "Software Developer"
  };

  const response = await request(API_URL)
      .put(`/api/users/${userId}`)
      .send(updatedUserData);

  expect(response.status).toBe(200);
  const responseBody = response.body;

  console.log(responseBody); // Log actual response for debugging

  // Adjusting the expectations to match the actual response structure
  expect(responseBody).toEqual({
      ...updatedUserData, // Spread updatedUserData to include all properties
      updatedAt: expect.any(String) // Allow updatedAt to be any string
  });
});

test('@smoke: Update user with PATCH', async () => {
  const userId = 2; // Change this to the desired user ID
  const updatedUserData = {
      job: "Senior Developer"
  };

  const response = await request(API_URL)
      .patch(`/api/users/${userId}`)
      .send(updatedUserData);

  // Check the response status
  expect(response.status).toBe(200);

  // Parse the response body
  const responseText = await response.text;
  let responseBody;
  try {
      responseBody = JSON.parse(responseText);
  } catch (error) {
      throw new Error(`Failed to parse JSON: ${error.message}`);
  }
  
  console.log(responseBody); // Log actual response for debugging

  // Adjusting the expectations to match the actual response structure
  expect(responseBody).toHaveProperty('job', updatedUserData.job); 
    expect(responseBody).toHaveProperty('updatedAt'); // Check for updatedAt field

    // Check that name is present (if returned) and can be any string
   
    });



test('@smoke: Delete user with DELETE', async ({ request }) => {
 const userId = 13; // Change this to the desired user ID
    const response = await request.delete(`https://reqres.in/api/users/${userId}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(204); // No Content
});


});
