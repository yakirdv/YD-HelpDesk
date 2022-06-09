import express from "express";
const router = express.Router();
import { signUp, login, newSupportTicket, updateSupportTicket, closeSupportTicket, test } from "../controllers/controller";

router
    .post("/sign-up", signUp)
    .get("/login", login)
    .get("/test", test)
    .post("/new-Support-Ticket", newSupportTicket)
    .post("/update-Support-Ticket", updateSupportTicket)
    .patch("/close-Suppor-Ticket", closeSupportTicket);

export default router;
