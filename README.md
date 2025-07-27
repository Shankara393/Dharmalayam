# Dharmalayam

This repository contains a minimal scaffolding of the Dharmalayam project described in the specification. It includes a TypeScript Express server and Prisma schema representing the main database models.

## Setup

1. Install dependencies (requires internet access):
   ```bash
   npm install
   ```
2. Provide a PostgreSQL connection string in a `.env` file:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/dharmalayam
   ```
3. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Note

The environment used for generating this repository does not have internet access, so dependencies cannot be installed or commands executed here. Ensure you run the above steps in an environment with internet connectivity.
