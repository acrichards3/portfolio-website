import { createTRPCRouter } from './trpc';
import { exampleRouter } from './routers/example';
import { experienceRouter } from './routers/experience';
import { projectRouter } from './routers/project';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  experience: experienceRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
