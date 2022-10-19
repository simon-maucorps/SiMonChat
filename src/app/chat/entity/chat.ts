import { User } from "./user";
export interface Chat {
    /** Identifiant unique du chat */
    id: number;
    /** Utilisateur du chat */
    user: User;
    
  }