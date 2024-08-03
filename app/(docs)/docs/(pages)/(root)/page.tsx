// > Components
import { TitleBanner } from "../../components/ui/titleBanner/title-banner";
// > Next
import Link from "next/link";
import { Cards } from "./_components/cards/cards";
import { Aside } from "../../components/aside/Aside";

export default function Introduction() {
  const ASIDE_LINKS = [
    { href: "whatIsExpress", label: "What is Express.ts?" },
    { href: "howToUseTheseDocs", label: "How to Use These Docs" },
    { href: "appRouterVsPagesRouter", label: "App Router vs Pages Router" },
    { href: "preRequisiteKnowledge", label: "Pre-Requisite Knowledge" },
    { href: "accessibility", label: "Accessibility" },
    { href: "joinOurCommunity", label: "Join our Community" },
  ];
  return (
    <>
      <Aside links={ASIDE_LINKS} />
      <div>
        <TitleBanner
          title="Introduction"
          className="text-4xl"
          content={<p className="">Welcome to the Express.ts documentation!</p>}
        />
        <TitleBanner
          id="whatIsExpress"
          title="What is Express.ts?"
          className="text-[22px] mt-10"
          content={
            <>
              <div className="grid gap-6 ">
                <p>
                  Express.ts is a React framework for building full-stack web
                  applications. You use React Components to build user
                  interfaces, and Express.ts for additional features and
                  optimizations.
                </p>
                <p>
                  Under the hood, Express.ts also abstracts and automatically
                  configures tooling needed for React, like bundling, compiling,
                  and more. This allows you to focus on building your
                  application instead of spending time with configuration.
                </p>
                <p>
                  Whether you're an individual developer or part of a larger
                  team, Express.ts can help you build interactive, dynamic, and
                  fast React applications.
                </p>
              </div>
            </>
          }
        />
        <TitleBanner
          id="howToUseTheseDocs"
          title="How to Use These Docs"
          className="text-[22px] mt-10"
          content={
            <>
              <div className="grid gap-6 ">
                <p>
                  On the left side of the screen, you'll find the docs navbar.
                  The pages of the docs are organized sequentially, from basic
                  to advanced, so you can follow them step-by-step when building
                  your application. However, you can read them in any order or
                  skip to the pages that apply to your use case.
                </p>
                <p>
                  On the right side of the screen, you'll see a table of
                  contents that makes it easier to navigate between sections of
                  a page. If you need to quickly find a page, you can use the
                  search bar at the top, or the search shortcut (
                  <span className="bg-gray-100 dark:bg-gray-200/10 px-1 rounded-sm">
                    Ctrl+K
                  </span>{" "}
                  or{" "}
                  <span className="bg-gray-100 dark:bg-gray-200/10 px-1 rounded-sm">
                    {" "}
                    Cmd+K
                  </span>
                  ).
                </p>
                <p>
                  To get started, checkout the{" "}
                  <Link className="text-purple-500" href={""}>
                    Installation{" "}
                  </Link>
                  guide.
                </p>
              </div>
            </>
          }
        />
        <TitleBanner
          id="appRouterVsPagesRouter"
          title="App Router vs Pages Router"
          className="text-[22px] mt-10"
          content={
            <>
              <div className="grid gap-6 ">
                <p>
                  Next.js has two different routers: the App Router and the
                  Pages Router. The App Router is a newer router that allows you
                  to use React's latest features, such as Server Components and
                  Streaming. The Pages Router is the original Next.js router,
                  which allowed you to build server-rendered React applications
                  and continues to be supported for older Next.js applications.
                </p>
                <p>
                  At the top of the sidebar, you'll notice a dropdown menu that
                  allows you to switch between the <strong>App Router</strong>{" "}
                  and the <strong>Pages Router</strong> features. Since there
                  are features that are unique to each directory, it's important
                  to keep track of which tab is selected.
                </p>
                <p>
                  The breadcrumbs at the top of the page will also indicate
                  whether you're viewing App Router docs or Pages Router docs.
                </p>
              </div>
            </>
          }
        />
        <TitleBanner
          id="preRequisiteKnowledge"
          title="Pre-Requisite Knowledge"
          className="text-[22px] mt-10"
          content={
            <>
              <div className="grid gap-6 ">
                <p>
                  Although our docs are designed to be beginner-friendly, we
                  need to establish a baseline so that the docs can stay focused
                  on Next.js functionality. We'll make sure to provide links to
                  relevant documentation whenever we introduce a new concept.
                </p>
                <p>
                  To get the most out of our docs, it's recommended that you
                  have a basic understanding of HTML, CSS, and React. If you
                  need to brush up on your React skills, check out our{" "}
                  <Link className="text-purple-500" href={""}>
                    React Foundations Course
                  </Link>
                  , which will introduce you to the fundamentals. Then, learn
                  more about Next.js by{" "}
                  <Link className="text-purple-500" href={""}>
                    building a dashboard application
                  </Link>
                  .
                </p>
              </div>
            </>
          }
        />
        <TitleBanner
          id="accessibility"
          title="Accessibility"
          className="text-[22px] mt-10"
          content={
            <>
              <p>
                For optimal accessibility when using a screen reader while
                reading the docs, we recommend using Firefox and NVDA, or Safari
                and VoiceOver.
              </p>
            </>
          }
        />
        <TitleBanner
          id="joinOurCommunity"
          title="Join our Community"
          className="text-[22px] mt-10"
          content={
            <>
              <p>
                If you have questions about anything related to Next.js, you're
                always welcome to ask our community on{" "}
                <Link className="text-purple-500" href={""}>
                  GitHub Discussions
                </Link>
                ,
                <Link className="text-purple-500" href={""}>
                  Discord
                </Link>
                ,
                <Link className="text-purple-500" href={""}>
                  Twitter
                </Link>
                , and {""}
                <Link className="text-purple-500" href={""}>
                  Reddit
                </Link>
                .
              </p>
            </>
          }
        />
        <Cards />
      </div>
    </>
  );
}
