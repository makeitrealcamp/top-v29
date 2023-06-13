import supertest from 'supertest';
import { faker } from '@faker-js/faker';

import app from '../../app';

const request = supertest(app);

describe('User Controller', () => {
  describe('GET /api/users', () => {
    test('should return 200 OK', async () => {
      const response = await request.get('/api/users');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/users/:id', () => {
    test('should return 200 OK', async () => {
      // Arrange
      const userId = 'clim0htvt0000yqxxltkx53b0';

      // Act
      const response = await request.get(`/api/users/${userId}`);

      // Assert
      expect(response.status).toBe(200);
    });

    test('should return 404 Not Found', async () => {
      // Arrange
      const userId = 999;

      // Act
      const response = await request.get(`/api/users/${userId}`);

      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('POST /api/users', () => {
    // test('should return 201 Created', async () => {
    //   // Arrange
    //   const user = {
    //     id: 'clios1jaf0000yqv6pe6tayxz',
    //     email: faker.internet.email(),
    //     name: faker.person.fullName(),
    //     avatar: faker.image.avatar(),
    //   };

    //   // Act
    //   const response = await request.post('/api/users').send(user);

    //   // Assert
    //   expect(response.status).toBe(201);
    //   expect(response.body).toEqual(user);
    // });

    test('should return 400 Bad Request', async () => {
      // Arrange
      const user = {
        email: faker.internet.email(),
      };
      const expectedResponse = {
        message: 'Missing required fields: email and name',
      };

      // Act
      const response = await request.post('/api/users').send(user);

      // Assert
      expect(response.status).toBe(400);
      expect(response.body).toEqual(expectedResponse);
    });
  });

  describe('PATCH /api/users/:id', () => {
    test('should return 200 OK', async () => {
      // Arrange
      const userId = 'clim0j8dl0004yqxxlh0st1ck';
      const user = {
        id: userId,
        email: faker.internet.email(),
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
      };

      // Act
      const response = await request.patch(`/api/users/${userId}`).send(user);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual(user);
    });

    test('should return 404 Not Found', async () => {
      // Arrange
      const userId = 999;
      const user = {
        id: userId,
        email: faker.internet.email(),
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
      };
      const expectedResponse = { message: 'User not found' };

      // Act
      const response = await request.patch(`/api/users/${userId}`).send(user);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toEqual(expectedResponse);
    });
  });

  describe('DELETE /api/users/:id', () => {
    // test('should return 200 OK', async () => {
    //   // Arrange
    //   const userId = 'clim0j8dl0004yqxxlh0st1ck';
    //   const status = 204;

    //   // Act
    //   const response = await request.delete(`/api/users/${userId}`);

    //   // Assert
    //   expect(response.status).toBe(status);
    // });

    test('should return 404 Not Found', async () => {
      // Arrange
      const userId = 999;
      const expectedResponse = { message: 'User not found' };

      // Act
      const response = await request.delete(`/api/users/${userId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toEqual(expectedResponse);
    });
  });
});
