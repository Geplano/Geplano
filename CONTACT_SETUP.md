# Configuração do Formulário de Contato

## Enviando Emails com Resend

O formulário de contato usa o serviço [Resend](https://resend.com) para enviar
emails.

### Passos para Configurar:

1. **Criar conta no Resend** (gratuito)
   - Acesse: https://resend.com
   - Crie uma conta gratuitamente

2. **Obter API Key**
   - Vá para: https://resend.com/api-keys
   - Crie uma nova API key
   - Copie a chave gerada

3. **Configurar variáveis de ambiente**

   Crie um arquivo `.env.local` na raiz do projeto com:

   ```env
   RESEND_API_KEY=re_sua_chave_aqui
   CONTACT_EMAIL=pedrolucasmota2005@gmail.com
   FROM_EMAIL=onboarding@resend.dev
   ```

4. **Personalizar o email de destino**

   Para alterar o email que receberá as mensagens, edite:
   - Arquivo: `src/components/layout/Contact/contact.types.ts`
   - Linha: `export const CONTACT_EMAIL = 'pedrolucasmota2005@gmail.com';`

5. **Personalizar textos do formulário**

   No mesmo arquivo `contact.types.ts`, você pode alterar todos os textos:

   ```typescript
   export const CONTACT_FORM_TEXTS = {
     title: "Entre em Contato Conosco",
     namePlaceholder: "Seu Nome",
     emailPlaceholder: "Seu E-mail",
     phonePlaceholder: "Seu Telefone",
     messagePlaceholder: "Sua Mensagem",
     submitButton: "Enviar Mensagem",
     successMessage: "Mensagem enviada com sucesso!",
     errorMessage: "Erro ao enviar mensagem. Tente novamente.",
   };
   ```

## Domínio Personalizado (Opcional)

Para usar seu próprio domínio no email remetente:

1. Adicione seu domínio no Resend
2. Configure os registros DNS conforme instruções
3. Atualize a variável `FROM_EMAIL` com seu domínio verificado

Exemplo: `FROM_EMAIL=contato@geplano.com.br`

## Teste Local

Para testar localmente:

```bash
npm run dev
```

Acesse http://localhost:3000, vá até a seção de contato e envie uma mensagem
teste.

## Email de Exemplo

O email enviado incluirá:

- Nome do cliente
- Email (com link mailto)
- Telefone (com link tel)
- Mensagem formatada
- Data/hora do envio
- Design profissional com cores da Geplano
