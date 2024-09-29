import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="rounded-full justify-center"
          src="https://avatars.githubusercontent.com/u/110023253?v=4"
          alt="Bernhard Image"
          width={280}
          height={280}
          priority
        />
        <h1 className="text-7xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-extrabold">
          {' '}
          Bernhard portfolio
        </h1>

        <h2 className="text-5xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {' '}
          WEB / APP / GAME DEVELOPER
        </h2>

        <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          I have always had a strong technical interest and started learning
          programming and building development projects myself. I started with
          Arduino programming, continued learning Swift, then Python and
          continued with web development using React, JavaScript, Next.js and
          other technologies. Meanwhile I have published several web and mobile
          applications and did some game development with Unity and game
          engines. I am a dedicated versatile developer looking for a new
          challenge, where I am able to further expend and deepen my tech
          knowledge.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border bg-gray-300  dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.linkedin.com/in/bernhard-kratky/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </div>

        <h3 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {' '}
          TECH SKILLS & TOOLS
        </h3>

        <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          JavaScript TypeScript React Native React Next.js Node.js HTML CSS
          Python Swift Swift UI C# PostgresSQL Migrations Rest API Tailwind CSS
          Figma Git GitHub Unity Unity Ui Toolkit WebGL Dotween OBS DaVinci
          Resolve
        </p>
        <h3 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {' '}
          Personal Skills
        </h3>

        <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          Lifelong learner and curious personality Continuously improving Calm
          and stress resistant Reliant and resilient Willingness to work hard
          and take challenges Creative and out of the box thinker
        </p>

        <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          Scrum
        </p>

        <h2 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {' '}
          Stores
        </h2>
        <a
          href="https://bernkra.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Games on Itch.io
        </a>
        <a
          href="https://apps.apple.com/ch/developer/bernhard-kratky/id1635313235"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple App Store
        </a>

        <h2 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {' '}
          Projects
        </h2>

        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
              Science Game Edu-game for YouLernit
            </h3>

            <a
              href="https://www.linkedin.com/in/bernhard-kratky/"
              target="_blank"
              rel="noopener noreferrer"
            >
              On Linkedin
            </a>

            <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
              A Video Edu-game, where the Player must Build Up food Chains to
              make Points. It is a Card Game, where you have hour Hand Cards
              that can Place to the Table Cards, but you must get the same place
              or higher in the Food Chain. Develop educational game ideas for
              kids up to the age of 14, focusing on Physics and Biology.
            </p>
            <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
              Technologies used: Game in Unity for WebGL C# for Scripts Unity UI
              Toolkit for UI of Menus and same Button Dotween for Animation /
              Unity Audio Mixer
            </p>
          </div>

          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
              Jump Game
            </h3>

            <a
              href="https://bernkra.itch.io/jump-game-000"
              target="_blank"
              rel="noopener noreferrer"
            >
              On Web
            </a>

            <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
              D2 Jump and Run Game, with multiple levels.
            </p>
            <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
              Technologies used: Unity, C#, Unity for WebGL
            </p>
          </div>

          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
              Canvas View
            </h3>

            <a
              href="https://final-project-uplevelt.fly.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              On Web
            </a>

            <a
              href="https://youtu.be/TIJNlu8PHhc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video presentation
            </a>

            <a
              href="https://github.com/Bernkra96/final-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              On Git
            </a>

            <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
              A social media web application, where users can login and make
              posts on the page or comment on posts. Users can delete their
              posts/comments. and admins can delete all. Key features: Design
              from scratch with Tailwind CCS Admin control via Rest API and
              database check User authentication with session tokens and cookies
              User authorization with REST API Database creation and management
              with PostgreSQL Implementation of database migration Files written
              in TypeScript Deployment via Fly.io
            </p>
            <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
              Technologies used: Next.js, TypeScript, Tailwind CCS, Docker,
              Fly.io, Cookies, Migrations, Rest API
            </p>
          </div>
        </div>

        <h3 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {' '}
          Jobs
        </h3>
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
            Volunteer Edu-game programmer
          </h3>
          <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
            2024.06 - 2024.09
          </p>
          <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
            YouLearnt, Manchester GB, Remote from Vienna
          </p>
        </div>

        <h3 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          Education
        </h3>
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
            Full Stack Web Development Boot camp
          </h3>
          <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
            2023
          </p>
          <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
            UpLeveled GmbH
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.linkedin.com/in/bernhard-kratky/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/bernhard-kratky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
            alt="Linkedin icon"
            width={32}
            height={32}
          />
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Bernkra96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
            alt="Github icon"
            width={32}
            height={32}
          />
        </a>
      </footer>
    </div>
  );
}

// Remove cookie or perform other actions

//Project Tamped
// <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//            <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
//              Title Project
//            </h3>
//
//            <a
//              href="https://www.linkedin.com/in/bernhard-kratky/"
//              target="_blank"
//              rel="noopener noreferrer"
//            >
//              https://www.linkedin.com/in/bernhard-kratky/
//            </a>
//
//            <a
//              href="https://www.linkedin.com/in/bernhard-kratky/"
//              target="_blank"
//              rel="noopener noreferrer"
//            >
//              https://www.linkedin.com/in/bernhard-kratky/
//            </a>
//
//            <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
//      Title Project Text
// </p>
// </div>
// </div>
