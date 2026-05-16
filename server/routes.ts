import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = contactMessageSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          success: false, 
          error: parsed.error.errors[0]?.message || "Invalid form data" 
        });
      }

      const { name, email, message } = parsed.data;
      const result = await sendContactEmail(name, email, message);

      if (result.success) {
        return res.json({ success: true, message: "Message sent successfully" });
      } else {
        return res.status(500).json({ success: false, error: result.error });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to send message. Please try again." 
      });
    }
  });

  return httpServer;
}
