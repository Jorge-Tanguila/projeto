import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "j.tanguila2005@gmail.com",   // <-- TEU EMAIL AQUI
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
    return res.json({ success: false, message: error.message });
  }
});

app.listen(5000, () => {
  console.log("🚀 Servidor rodando na porta 5000");
});