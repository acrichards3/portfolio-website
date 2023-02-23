import { createTRPCRouter, publicProcedure } from '../trpc';

export const experienceRouter = createTRPCRouter({
  getExperience: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.experience.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        company: true,
        location: true,
        to: true,
        from: true,
      },
    });
  }),
});
