import { Router } from "express";
import ErrorException from "../exceptions/ErrorException";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { getUsers } from "../controller/userController";

const router = Router();

router.get("/", getUsers);
export default router;
