import { Router } from "express";
import ErrorException from "../exceptions/ErrorException";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  throw new ErrorException(
    "Un error ha ocurrido",
    StatusCodes.NOT_FOUND,
    ReasonPhrases.NOT_FOUND

  );
  res.json({message:"Lista de usuarios"})
});

export default router;