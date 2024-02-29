import { Client } from "@notionhq/client";
import type { PageServerLoad } from "./$types";
import type { PageData } from "$lib";

const auth = "secret_oVNAZOlHcIuL5hkUnOcTt68n7VKQLRSdUn6unEoZHlD";

const Notion = new Client({ auth });

export const load: PageServerLoad = async ({ params }: any) => {
    const blocks = await Notion.blocks.children.list({ auth, block_id: params.slug });

    const page = await Notion.pages.retrieve({ auth, page_id: params.slug });
    const properties: PageData = {
        // @ts-ignore
        title: page.properties.Name.title[0].plain_text,
        // @ts-ignore
        description: page.properties.description.rich_text[0].plain_text,
        id: params.slug
    }; 

    return { blocks, properties }
}
  