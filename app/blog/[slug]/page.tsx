type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

exort default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
