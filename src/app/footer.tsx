import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap  items-center justify-center rounded-t-lg  bg-green-300/75  dark:bg-green-700/75 backdrop-blur-lg  ">
      <div className="flex flex-col gap-0.5 row-start-1 items-start sm:items-start">
        <p className="text-1 text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          Bernhard Kratky
        </p>
        <p className="text-1 text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          Vienna AT
        </p>
        <p className="text-1 text-center sm:text-left font-[family-name:var(--font-geist-mono)">
          bernkra@gmail.com
        </p>
      </div>

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
  );
}
