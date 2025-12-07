import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Muitas tentativas. Aguarde 15 minutos." }
});

app.post("/api/send-email", emailLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Validação
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Todos os campos são obrigatórios" 
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: "Email inválido" 
    });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "j.tanguila2005@gmail.com",
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `
    });

    return res.json({ success: true, data });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Erro ao enviar email. Tente novamente." 
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 Servidor rodando na porta 5000");
});