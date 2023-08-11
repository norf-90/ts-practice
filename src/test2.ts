enum Status {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

let resp: [{ question: string; answer: string; tags: string[]; likes: number; status: Status }];

async function getFaqs(req: {
  topicId: number;
  status?: Status;
}): Promise<{ question: string; answer: string; tags: string[]; likes: number; status: Status }[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data: {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: Status;
  }[] = await res.json();
  return data;
}
