import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const dbUrl: string | undefined = process.env.CONNECTION;

    if (!dbUrl) {
      throw new Error("No hay coneccion a la base de datos");
    }

    await mongoose.connect(dbUrl);
    console.log("DB Online");
  } catch (error: any) {
    console.error(error);
  }
};
