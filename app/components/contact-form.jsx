import { Send } from "lucide-react";

import { contact } from "../lib/site-content";

export default function ContactForm() {
  return (
    <form
      className="contact-form reveal"
      action={`https://wa.me/${contact.whatsappNumber}`}
      method="get"
      target="_blank"
    >
      <input type="hidden" name="text" value="Olá, NotiP Tech! Quero conversar sobre um projeto." />
      <div className="form-row">
        <label>
          Nome
          <input name="name" type="text" placeholder="Seu nome" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" placeholder="voce@email.com" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          WhatsApp
          <input name="phone" type="tel" placeholder="(00) 00000-0000" required />
        </label>
        <label>
          Tipo de projeto
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option>Landing de conversão</option>
            <option>Site institucional</option>
            <option>Sistema sob medida</option>
            <option>Manutenção ou melhorias</option>
            <option>Quero ajuda para definir</option>
          </select>
        </label>
      </div>

      <label>
        Mensagem
        <textarea
          name="message"
          rows="5"
          placeholder="Conte o objetivo do projeto, público e o que você quer melhorar."
          required
        />
      </label>

      <button className="btn btn-primary form-submit" type="submit">
        <Send size={18} />
        Enviar mensagem
      </button>

      <p className="form-feedback" role="status" hidden>
        Mensagem preparada no WhatsApp. A conversa pode ser enviada por lá.
      </p>
    </form>
  );
}
