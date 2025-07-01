"use client"

import Image from "next/image";
import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="max-w-3xl mx-auto p-6 flex flex-col items-center">
        <Image
          src="/images/tyler.jpg"
          alt="Tyler Baker"
          width={160}
          height={160}
          className="rounded-full mb-6 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <div className="text-lg leading-relaxed space-y-4 text-center">
          <p>
            Hi, I’m Tyler — game developer, chaos wrangler, and full-time bug whisperer.
          </p>
          <p>
            I build games in Unity because I love making ideas come to life, even if it means spending
            three hours fixing something that turned out to be a missing semicolon. I’ve worked on
            everything from small experiments to full gameplay loops, and I’m always chasing that
            <em> “ohhh this is sick” </em> moment — for both players and myself.
          </p>
          <p>
            I don’t limit myself to one kind of project. I like weird mechanics, unexpected ideas, and
            finding fun in the details. If a game makes someone laugh, rage, or pause for a second and
            say <em>“wait, that was kinda clever”</em>, I’m happy.
          </p>
          <p>
            Outside of development, I’m probably streaming, tinkering with something new, or wondering
            why my code worked the first time (which is always suspicious).
          </p>
          <p>
            I take what I do seriously — but not <em>too</em> seriously. Games are meant to be fun,
            and I bring that energy into everything I make.
          </p>
        </div>
      </main>
    </PageWrapper>
  );
}
