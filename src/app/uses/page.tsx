import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.'
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Apple M1 MacBook Air, 8GB RAM (2020 model)">
            I was using an old Windows laptop before this monster and the
            difference is night and day. I’ve never had speed issues with this
            thing, even under the incredibly heavy loads I’ve put it through.
            It’s crazy to think that this is just the entry level M-series
            machine. I can’t imagine how fast the newest MacBook Air model is.
          </Tool>
          <Tool title="Apple Studio Display, Standard glass, Tilt-adjustable stand">
            The only display on the market if you want something HiDPI with
            quality integrated peripherals. When you’re reading hundreds of
            thousands of tiny characters on a screen everyday, every pixel you
            can get counts.
          </Tool>
          <Tool title="Apple Magic Keyboard with Touch ID">
            I’ve been using the Magic Keyboard for years and I love it. The only
            thing I don’t like is that the function keys are a little different
            from the ones on my MacBook Air. I’m not sure why Apple decided to
            change them but I’m sure it was for a good reason. I just wish I
            could remember what that reason was.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Clatina High Swivel Executive Chair, Grey Fabric">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in a nice chair. This one is
            comfortable and matches the rest of my office setup.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Visual Studio Code is still the best text editor
            ever made.
          </Tool>
          <Tool title="GitHub Copilot">
            Great tool for assisting with code suggestions and improving
            productivity during development. It won’t code everything for you,
            thankfully, but it definitely helps eliminate some of the
            boilerplate code I find myself constantly writing.
          </Tool>
          <Tool title="Postman">
            This is a great tool for testing APIs. I use it all the time to test
            my APIs and make sure they’re working correctly. It’s super easy to
            use and has a ton of features that makes my backend development less
            cumbersome.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I’m not a designer but I do a lot of design work. Figma is the best
            tool I’ve found for doing that. It’s easy to use and has a ton of
            features that make it perfect for web design. I can’t imagine
            working without it and the best part is that it’s completely free.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Microsoft Teams">
            Working with a mostly remote team is hard and Microsoft Teams just
            makes a lot of the pain points of it easier. The native integration
            with other Microsoft applications is a nice bonus too.
          </Tool>
          <Tool title="Apple Music">
            I used to be a Spotify user but I switched to Apple Music when I got
            my MacBook Air and all my other Apple devices. I love the sound
            quality and the user experience is just amazing. It’s just a way
            better product for me than what Spotify is offering.
          </Tool>
          <Tool title="Apple Reminders">
            I’m a big fan of the Reminders app on iOS. It’s simple, easy to use,
            and it just works. I’ve tried a lot of other to-do list apps but
            none of them have ever come close to the simplicity and ease of use
            that Reminders has.
          </Tool>
          <Tool title="Focus Modes, iOS">
            Simple tool for blocking distracting apps and notifications when I
            need to just do the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
