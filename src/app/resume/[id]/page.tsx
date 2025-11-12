import ATS from "@/components/ATS";
import Details from "@/components/details";
import Summary from "@/components/summary";
import { db } from "@/db";
import { resumeUploads } from "@/db/schema";
import { requireAuth } from "@/lib/auth-utils";
import { Feedback } from "@/types";
import { and, eq } from "drizzle-orm";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userSession = await requireAuth();

  const { id } = await params;

  const [resume] = await db
    .select()
    .from(resumeUploads)
    .where(
      and(
        eq(resumeUploads.id, id),
        eq(resumeUploads.userId, userSession.user.id)
      )
    );

  if (!resume) {
    throw new Error("bhai baad me aana");
  }

  const feedback = resume.feedback as Feedback;

  return (
    <main className="pt-0!">
      <nav className="resume-nav">
        <Link href="/" className="back-button">
          <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
          <span className="text-gray-800 text-sm font-semibold">
            Back to Homepage
          </span>
        </Link>
      </nav>
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <section className="feedback-section bg-[url('/images/bg-small.svg') bg-cover h-[100vh] sticky top-0 items-center justify-center">
          {
            <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
              <a
                href={resume.resumeImageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={resume.resumeImageUrl}
                  className="w-full h-full object-contain rounded-2xl"
                  title="resume"
                />
              </a>
            </div>
          }
        </section>
        <section className="feedback-section">
          <h2 className="text-4xl text-black! font-bold">Resume Review</h2>(
          <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
            <Summary feedback={feedback} />
            <ATS
              score={feedback.ATS.score || 0}
              suggestions={feedback.ATS.tips || []}
            />
            <Details feedback={feedback} />
          </div>
          )
        </section>
      </div>
    </main>
  );
}
