import { PrismaClient } from '@prisma/client';

class Database {
  private static instance: PrismaClient;

  private constructor() {
    // Evita que se puedan crear instancias adicionales
  }

  public static getInstance(): PrismaClient {
    if (!Database.instance) {
      Database.instance = new PrismaClient();
    }
    return Database.instance;
  }
}

// Uso de la instancia singleton
const prisma = Database.getInstance();
