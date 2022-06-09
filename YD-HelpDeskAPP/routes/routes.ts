import express from "express";
const router = express.Router();
import { signUp, login, newSupportTicket, updateSupportTicket, closeSupportTicket  } from "../controllers/controller";

router
    .post("/sign-up", signUp)
    .get("/login", login)

    .post("/new-Support-Ticket", newSupportTicket)
    .post("/update-Support-Ticket", updateSupportTicket)
    .patch("/close-Suppor-Ticket", closeSupportTicket)

export default router;
