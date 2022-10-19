import { User } from "./user";

export interface Message {
    /** Identifiant unique du message */
    id: number;
    /** Contenu du message */
    message: string;
    /** Personne qui envoi le message */
    from : User;
    /** Date de l'envoi du message */
    date:Date;
  }