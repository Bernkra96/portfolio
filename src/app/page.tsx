import fs from 'fs/promises';
import Image from 'next/image';
import React from 'react';

export default async function Home() {
  const pageInfoFile = await fs.readFile(
    process.cwd() + '/src/app/page-text-data.json',
    'utf8',
  );
  const pageEducationFile = await fs.readFile(
    process.cwd() + '/src/app/page-education-data.json',
    'utf8',
  );
  const pageJobFile = await fs.readFile(
    process.cwd() + '/src/app/page-job-data.json',
    'utf8',
  );
  const pageProjectsFile = await fs.readFile(
    process.cwd() + '/src/app/page-projects-data.json',
    'utf8',
  );

  const pageTextData = JSON.parse(pageInfoFile);
  const pageEducationData = JSON.parse(pageEducationFile);
  const pageJobData = JSON.parse(pageJobFile);
  const pageProjectsData = JSON.parse(pageProjectsFile);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
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
          {pageTextData.firstTitle}
        </h1>

        <h2 className="text-5xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {' '}
          {pageTextData.title}
        </h2>
        <div></div>
        <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          {pageTextData.content}
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row  ">
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
          {pageTextData.techSkills.title}
        </h3>

        <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          {pageTextData.techSkills.content}
        </p>
        <h3 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold">
          {pageTextData.personalSkills.title}
        </h3>

        <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          {pageTextData.personalSkills.content}
        </p>

        <h2
          className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold"
          id="store"
        >
          {' '}
          Store
        </h2>
        <ul className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          {pageTextData.stores.map(
            (storeData: { linkUrl: string; linkText: string }) => (
              <li
                className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
                key={storeData.linkText}
              >
                <a
                  className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 "
                  href={storeData.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {storeData.linkText}
                </a>
              </li>
            ),
          )}
        </ul>

        <h2
          className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold"
          id="projects"
        >
          {' '}
          Projects
        </h2>

        <ul className="flex flex-col gap-8 row-start-2 items-center ">
          {pageProjectsData.map(
            (jobData: {
              link: { url: string; text: string };
              videoPresentation: { url: string; text: string };
              gitLink: { url: string; text: string };
              description: string;
              technologies: string[];
              title: string;
              dateStart: string;
              dateEnd: string;
              content: string;
            }) => (
              <li
                className="flex flex-col gap-8 row-start-2 items-center"
                key={jobData.title}
              >
                <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
                  {jobData.title}
                </h3>

                <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                  {jobData.link ? (
                    <a
                      className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                      href={jobData.link?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {jobData.link?.text}
                    </a>
                  ) : null}
                  {jobData.videoPresentation ? (
                    <a
                      className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                      href={jobData.videoPresentation?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {jobData.videoPresentation?.text}
                    </a>
                  ) : null}{' '}
                  {jobData.gitLink ? (
                    <a
                      className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                      href={jobData.gitLink?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {jobData.gitLink?.text}
                    </a>
                  ) : null}
                </div>
                <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
                  {jobData.description}
                </p>
                <p className="text-2xl space-x-4  text-center first-letter: sm:text-left font-[family-name:var(--font-geist-mono)">
                  Technologies used: {jobData.technologies.join(', ')}
                </p>
              </li>
            ),
          )}
        </ul>

        <h3
          className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold"
          id="jobs"
        >
          {' '}
          Jobs
        </h3>
        <ul className="flex flex-col gap-8 row-start-2 items-center ">
          {pageJobData.map(
            (jobData: {
              title: string;
              dateStart: string;
              dateEnd: string;
              content: string;
            }) => (
              <li
                key={jobData.title}
                className="flex flex-col gap-8 row-start-2 items-center"
              >
                <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
                  {jobData.title}
                </h3>
                <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
                  {jobData.dateStart} - {jobData.dateEnd}
                </p>
                <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
                  {jobData.content}
                </p>
              </li>
            ),
          )}
        </ul>

        <h3
          className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-bold"
          id="education"
        >
          Education
        </h3>
        <ul className="flex flex-col gap-8 row-start-2 items-center  ">
          {pageEducationData.map(
            (educationData: {
              title: string;
              date: string;
              content: string;
            }) => (
              <li
                key={educationData.title}
                className="flex flex-col gap-8 row-start-2 items-center  "
              >
                <h3 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono) font-semibold ">
                  {educationData.title}
                </h3>
                <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
                  {educationData.date}
                </p>
                <p className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)">
                  {educationData.content}
                </p>
              </li>
            ),
          )}
        </ul>

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
    </div>
  );
}
