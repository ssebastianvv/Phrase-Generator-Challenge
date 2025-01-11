import { NextResponse } from 'next/server';

const subjects = ["The dog", "The turtle", "My friend", "Sebastian"];
const predicates = ["runs fast", "is very wise", "loves coding", "sings poorly"];

function create(subject: string, predicate: string): string {
  if (subject.length > 8) {
    subject += " inteligente";
  }

  if (predicate.includes("coding")) {
    predicate += "!";
  }

  return subject + " " + predicate;
}

function getRandomSubject() {
  const randomIndex = Math.floor(Math.random() * subjects.length);
  return subjects[randomIndex];
}

function getRandomPredicate() {
  const randomIndex = Math.floor(Math.random() * predicates.length);
  return predicates[randomIndex];
}

export async function GET() {
  const subject = getRandomSubject();
  const predicate = getRandomPredicate();
  const phrase = create(subject, predicate);

  return NextResponse.json({ phrase });
}
