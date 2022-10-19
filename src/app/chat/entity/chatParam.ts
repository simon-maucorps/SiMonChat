export interface ChatParam {
  /** Nombre de chat actif */
  chatNumber: number;

  /** Paramètres utilisés uniquement lors du test de génération automatique de */
  /** Nombre de phrase maximum par message */
  maxSentence: number;
  /** Nombre de phrase minimum par message */
  minSentence: number;
  /** Nombre de mot maximum par phrase */
  maxWord: number;
  /** Nombre de mot minimum par phrase */
  minWord: number;
  /** Nombre de message envoyé lors d'un test */
  testMessageNumber: number;
}