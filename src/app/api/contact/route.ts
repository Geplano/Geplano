import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 },
      );
    }

    // Email de destino (pode ser configurado via env)
    const toEmail = process.env.CONTACT_EMAIL || "pedrolucasmota2005@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    // Log para desenvolvimento (sempre funciona)
    console.log("\n=================================");
    console.log("📧 NOVO CONTATO RECEBIDO");
    console.log("=================================");
    console.log("👤 Nome:", name);
    console.log("📧 Email:", email);
    console.log("📱 Telefone:", phone);
    console.log("💬 Mensagem:", message);
    console.log("📅 Data:", new Date().toLocaleString("pt-BR"));
    console.log("=================================\n");

    // Se a API key do Resend estiver configurada, enviar email
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
          from: `Geplano Website <${fromEmail}>`,
          to: [toEmail],
          replyTo: email, // Email do cliente para poder responder diretamente
          subject: `Novo Contato - ${name}`,
          html: `
				<!DOCTYPE html>
				<html>
				<head>
					<style>
						body {
							font-family: 'Montserrat', Arial, sans-serif;
							line-height: 1.6;
							color: #333;
							max-width: 600px;
							margin: 0 auto;
							padding: 20px;
						}
						.header {
							background: linear-gradient(135deg, #00613a 0%, #a37e2b 100%);
							color: white;
							padding: 30px;
							text-align: center;
							border-radius: 10px 10px 0 0;
						}
						.header h1 {
							margin: 0;
							font-size: 24px;
						}
						.content {
							background: #f9f9f9;
							padding: 30px;
							border-radius: 0 0 10px 10px;
						}
						.field {
							margin-bottom: 20px;
							padding: 15px;
							background: white;
							border-left: 4px solid #a37e2b;
							border-radius: 4px;
						}
						.field-label {
							font-weight: bold;
							color: #00613a;
							margin-bottom: 5px;
							font-size: 12px;
							text-transform: uppercase;
						}
						.field-value {
							color: #333;
							font-size: 16px;
						}
						.message-box {
							background: white;
							padding: 20px;
							border-radius: 8px;
							border: 1px solid #e0e0e0;
							margin-top: 10px;
							white-space: pre-wrap;
							font-size: 14px;
							line-height: 1.8;
						}
						.footer {
							margin-top: 30px;
							text-align: center;
							color: #666;
							font-size: 12px;
						}
					</style>
				</head>
				<body>
					<div class="header">
						<h1>✉️ Novo Contato - Geplano</h1>
					</div>
					<div class="content">
						<p style="color: #666; margin-top: 0;">Você recebeu uma nova mensagem através do formulário de contato do site:</p>
						
						<div class="field">
							<div class="field-label">👤 Nome</div>
							<div class="field-value">${name}</div>
						</div>
						
						<div class="field">
							<div class="field-label">📧 E-mail</div>
							<div class="field-value"><a href="mailto:${email}" style="color: #a37e2b;">${email}</a></div>
						</div>
						
						<div class="field">
							<div class="field-label">📱 Telefone</div>
							<div class="field-value"><a href="tel:${phone}" style="color: #a37e2b;">${phone}</a></div>
						</div>
						
						<div class="field">
							<div class="field-label">💬 Mensagem</div>
							<div class="message-box">${message}</div>
						</div>
					</div>
					<div class="footer">
						<p>Esta mensagem foi enviada através do formulário de contato em <strong>geplano.com.br</strong></p>
						<p>Data: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
					</div>
				</body>
				</html>
			`,
        });

        if (error) {
          console.error("❌ Erro Resend:", error);
          // Não retornar erro, apenas logar
        } else {
          console.log("✅ Email enviado com sucesso via Resend!", data);
        }
      } catch (resendError) {
        console.error("❌ Erro ao enviar via Resend:", resendError);
        // Continuar mesmo se o Resend falhar
      }
    } else {
      console.log(
        "ℹ️  Resend API Key não configurada. Dados salvos apenas no console.",
      );
    }

    // Sempre retornar sucesso (os dados estão no console)
    return NextResponse.json(
      {
        message: "Mensagem recebida com sucesso!",
        note: process.env.RESEND_API_KEY
          ? "Email enviado"
          : "Verifique o console do servidor para ver os dados",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Erro ao processar contato:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 },
    );
  }
}
