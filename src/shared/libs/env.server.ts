import { z } from 'zod';

const schema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

const parsed = schema.safeParse(process.env);
if (!parsed.success) {
  throw new Error(JSON.stringify(z.treeifyError(parsed.error), undefined, 2));
}

export const SERVER_ENV = parsed.data;
