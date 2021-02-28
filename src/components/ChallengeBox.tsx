import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  
  const contextData = useContext(ChallengesContext);
  console.log(contextData)
  
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo Desafio</strong>
            <p>Levante faça uma caminda de 3 minutos</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>Falhei</button>
            <button type="button" className={styles.challengeSuccededButton}>Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
