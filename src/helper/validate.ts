import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = await req.body
        console.log("this is the body of the request ",body)
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })

      return next()
    } catch (err: any) {
        console.log(err)
      const errMsg = JSON.parse(err.message)
      return res.status(400).json({
        status: "Bad Request",
        message: errMsg[0].message,
      })
    }
  }

export default validate
