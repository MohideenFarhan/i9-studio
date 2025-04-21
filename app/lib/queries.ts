// import { PrismaClient } from "@prisma/client";

// const db = new PrismaClient();

// export const getFunnelPageDetails = async (funnelPageId: string) => {
//   const response = await db.funnelPage.findUnique({
//     where: {
//       id: funnelPageId,
//     },
//   });
//   return response;
// };

// export const getMedia = async (subaccoutId: string) => {
//   const mediafiles = await db.subAccount.findUnique({
//     where: {
//       id: subaccoutId,
//     },
//     include: {
//       Media: true,
//     },
//   });
//   return mediafiles;
// };
