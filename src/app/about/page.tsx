import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import joinClassNames from '../../library/joinClassNames'

import portraitImage from '@/assets/portrait.jpg'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon
} from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={joinClassNames(className ?? '', 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.'
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Patrick Lawrence. I live in Southeastern Pennsylvania,
            where I design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve got a bit of a double life going on. By day, I&apos;m
              your friendly neighborhood junior engineer, and by night, I&apos;m
              the ultimate Netflix binge-watcher. But let&apos;s stick to the
              more professional side of things for now, shall we?
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100">
              Code Creator and Dreamer
            </h2>
            <p>
              I&apos;m not your average web developer; I&apos;m a code creator
              and a dreamer. From the first time I laid eyes on the world of web
              development, I knew I was meant to be here. I thrive on the thrill
              of turning lines of code into beautiful, functional websites that
              people can interact with, and I&apos;m always up for a challenge.
              Whether it&apos;s crafting responsive designs, optimizing back-end
              databases, or making a user&apos;s experience smoother than a
              perfectly scooped ice cream cone on a hot summer&apos;s day,
              I&apos;m all in.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100">
              Front-End Enthusiast
            </h2>
            <p>
              I&apos;m the one who believes that a pixel-perfect user interface
              can bring a tear to your eye. I breathe life into websites with
              HTML, CSS, and JavaScript. I make sure that your site not only
              looks good on the surface but also provides a seamless, intuitive,
              and user-friendly experience. From crafting stunning animations to
              making sure the buttons are in the right place, I&apos;m on it
              like a squirrel on a nut hunt.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100">
              Back-End Sorcerer
            </h2>
            <p>
              I don&apos;t just stop at the surface; I dig deep into the back
              end, too. With server-side scripting and databases, I create the
              magic that keeps your website running smoothly. I&apos;ve got a
              knack for optimizing performance, handling data securely, and
              ensuring your web app functions flawlessly. It&apos;s like being a
              chef in the kitchen, making sure all the ingredients come together
              to create a masterpiece.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100">
              Your Friendly, Tech-Savvy Neighbor
            </h2>
            <p>
              I&apos;m not just a developer; I&apos;m your friendly, tech-savvy
              neighbor. I love what I do, and I&apos;m always eager to share my
              passion and knowledge with others. When I&apos;m not glued to my
              computer, you&apos;ll find me mentoring aspiring developers,
              speaking at tech meetups, or writing articles to help the web
              development community grow. I believe in the power of sharing
              knowledge and helping others reach their full potential. So, if
              you&apos;re looking for a web developer who&apos;s not only
              passionate about turning your web dreams into reality but also
              someone who might give you the inside scoop on the latest
              binge-worthy series, you&apos;ve come to the right place.
              Let&apos;s connect, collaborate, and create something together!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/patricklawrence__"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow me on Instagram
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/plawre"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect with me on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.github.com/patrickjameslawrence"
              icon={GitHubIcon}
              className="mt-4"
            >
              See my code on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:plawre@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              plawre@icloud.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
