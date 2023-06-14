import { PrismaClient } from '@prisma/client';

import { userSeeder } from '../src/api/user/user.seeder';

const prisma = new PrismaClient();

async function main() {
  const createUsers = await prisma.user.createMany({
    data: userSeeder,
    skipDuplicates: true,
  });

  console.log({ createUsers });
}

main()
  .then(() => {
    console.log('Seed complete');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
