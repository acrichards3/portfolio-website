import { createTRPCRouter, publicProcedure } from '../trpc';

export const projectRouter = createTRPCRouter({
  getProjects: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.project.findMany({
      select: {
        id: true,
        from: true,
        to: true,
        name: true,
        description: true,
        url: true,
        github: true,
        stackItems: true,
      },
    });
  }),
});
