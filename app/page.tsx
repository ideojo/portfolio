import Image from "next/image";
import styles from "./page.module.css";
import ticketTracker from "../public/tickettracker.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>Sachin Tomy</h1>
        <p>
          Computer Science student at Sacramento State and IT help desk
          student assistant in California state government. I build web
          apps in C# and Blazor, and this site is my first in React and
          Next.js.
        </p>
      </section>

      <section>
        <h2>Projects</h2>

        <article className={styles.project}>
          <h3>TicketTracker</h3>
          <Image
            src={ticketTracker}
            alt="TicketTracker's Tickets page, with a new-ticket form and a table of tickets"
            className={styles.screenshot}
          />
          <p>
            A help desk ticketing app built with Blazor Server, C#, and
            Bootstrap. Create tickets, update their status, and see inline
            validation errors.
          </p>
          <a href="https://github.com/ideojo/TicketTracker">
            TicketTracker code on GitHub
          </a>
        </article>

        <article className={styles.project}>
          <h3>CPR Lifeline</h3>
          <p>
            A 7-person team project in my Software Engineering class, built
            with Python and Playwright. It logs into the American Heart
            Association instructor portal (Atlas), goes through each CPR
            class, accepts the enrollments, and sends the roster data to
            Google Sheets.
          </p>
          <p>
            My part was the login and the roster collection: signing in,
            paging through the class rosters, and cleaning up the data
            before it went to Google Sheets.
          </p>
        </article>
      </section>

      <section>
        <h2>Links</h2>
        <ul className={styles.links}>
          <li>
            <a href="https://github.com/ideojo">GitHub</a>
          </li>
        </ul>
      </section>
    </main>
  );
}