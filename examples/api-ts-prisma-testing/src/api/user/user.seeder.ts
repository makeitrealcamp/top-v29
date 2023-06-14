import { faker } from '@faker-js/faker';

export const userSeeder = [
  {
    id: 'clim0htvt0000yqxxltkx53b0',
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  },
  {
    id: 'clim0iiow0002yqxxnnqmpkmp',
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  },
  {
    id: 'clim0j8dl0004yqxxlh0st1ck',
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  },
];
