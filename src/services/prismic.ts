import * as Prismic from '@prismicio/client';

export function getPrismicClient() {
    const endpoint = Prismic.getRepositoryEndpoint(process.env.PRISMIC_REPO_NAME);

    const prismic = Prismic.createClient(endpoint, 
    {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
    });

    return prismic;
}