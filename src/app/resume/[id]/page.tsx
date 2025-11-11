import { db } from "@/db";
import { resumeUploads } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [resume] = await db
    .select()
    .from(resumeUploads)
    .where(eq(resumeUploads.id, id));

  if (!resume) {
    throw new Error("bhai baad me aana");
  }

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
        <section className="feedback-section"></section>
      </div>
    </main>
  );
}
