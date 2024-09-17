# Regole di Utilizzo Condiviso di GIT

1. **Creazione di un Nuovo Branch**
   - Ogni sviluppatore deve creare un nuovo branch per ogni nuova funzionalità o bug fix.
   - Il nome del branch deve seguire il formato: `feat/nome-funzionalita` o `fix/nome-bug`.

2. **Commit**
   - I commit devono essere frequenti e descrittivi.
   - Utilizzare messaggi di commit chiari e concisi che descrivano le modifiche apportate.   
   - Utilizzare prefissi specifici per ogni tipologia di commit per facilitare la comprensione del tipo di modifica apportata.
   - Esempi di prefissi:
     - `init:` per inizializzazione del progetto o di branch
     - `feat:` per nuove funzionalità (es. `feat: aggiunta autenticazione utente`)
     - `fix:` per correzioni di bug (es. `fix: risolto problema di caricamento pagina`)
     - `docs:` per modifiche alla documentazione (es. `docs: aggiornato README con istruzioni di installazione`)
     - `style:` per modifiche di stile (es. `style: formattazione del codice`)
     - `refactor:` per refactoring del codice (es. `refactor: ottimizzazione della funzione di calcolo`)
     - `test:` per aggiunta o modifica di test (es. `test: aggiunti test per la funzione di login`)
     - `chore:` per altre modifiche minori (es. `chore: aggiornamento dipendenze`)

3. **Pull Request**
   - Prima di creare una pull request, assicurarsi che il branch sia aggiornato con il branch principale (`main` o `master`).
   - Le pull request devono essere revisionate da almeno un altro sviluppatore prima di essere unite al branch principale.
   - Fornire una descrizione dettagliata delle modifiche nella pull request.

4. **Merge**
   - Utilizzare il metodo di merge `squash and merge` per mantenere una storia dei commit pulita.
   - Risolvere eventuali conflitti di merge prima di completare la pull request.

5. **Backup e Sicurezza**
   - Effettuare regolarmente il push dei cambiamenti per evitare la perdita di dati.
   - Non includere informazioni sensibili nei commit o nei messaggi di commit.

6. **Documentazione**
   - Aggiornare la documentazione del progetto con ogni nuova funzionalità o modifica significativa.
   - Assicurarsi che i commenti nel codice siano chiari e utili.

# Buon lavoro e buon coding!
