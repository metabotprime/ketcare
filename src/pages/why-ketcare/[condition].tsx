import type { GetStaticPaths, GetStaticProps } from 'next';
import { CONDITIONS, getCondition, type Condition } from '@/lib/conditions';
import { TreatmentPage } from '@/components/treatment/TreatmentPage';

type ConditionPageProps = {
  condition: Condition;
};

export default function ConditionPage({ condition }: ConditionPageProps) {
  return <TreatmentPage condition={condition} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: CONDITIONS.map((c) => ({ params: { condition: c.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ConditionPageProps> = async ({
  params,
}) => {
  const slug = params?.condition as string;
  const condition = getCondition(slug);

  if (!condition) {
    return { notFound: true };
  }

  return {
    props: { condition },
    revalidate: 86400, // stable content; daily revalidation per brief
  };
};
