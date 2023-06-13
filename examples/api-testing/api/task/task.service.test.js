const { getAllTask, getOneTask } = require('./task.service');

describe('Task Service', () => {
  describe('getAllTask', () => {
    test('should return an instance of array', () => {
      // Arrange
      const expected = Array;

      // Act
      const result = getAllTask();

      // Assert
      expect(result).toBeInstanceOf(expected);
    });

    test('should return an array of tasks', () => {
      // Arrange
      const expected = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          completed: true,
        },
      ];

      // Act
      const result = getAllTask();

      // Assert
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            completed: expect.any(Boolean),
          }),
        ]),
      );
    });
  });

  describe('getOneTask', () => {
    test('should return and one task object', () => {
      // Arrange
      const taskId = 1;
      const expected = {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        completed: true,
      };

      // Act
      const result = getOneTask(taskId);

      // Assert
      expect(result).not.toBeNull();
      expect(result).toEqual(expected);
    });

    test('should return null if task is not found', () => {
      // Arrange
      const taskId = 999;
      const expected = null;

      // Act
      const result = getOneTask(taskId);

      // Assert
      expect(result).toBeNull();
      expect(result).toEqual(expected);
    });
  });
});
