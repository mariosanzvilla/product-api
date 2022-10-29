import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/", (req: Request, res: Response) => {
    return res.status(200).send("Qué pasa Heroku!!");
  });

  app.get("/products", (req: Request, res: Response) => {
    return res.status(200).send(CoursesData);
  });
};
