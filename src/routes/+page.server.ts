import { Client } from "@notionhq/client";
import type { PageServerLoad } from "./$types";
import type { PageData } from "$lib";

const auth = "secret_oVNAZOlHcIuL5hkUnOcTt68n7VKQLRSdUn6unEoZHlD";

const Notion = new Client({ auth });

export const load: PageServerLoad = async () => {
    const db = await Notion.databases.query({ auth, database_id: "2f26105a25a14a4c991ad358e0e4b7e2" });

    const pages = db.results.map(x => x.id);
    const pages_data: PageData[] = [];
    
    for (const page_id of pages) {
        const page = await Notion.pages.retrieve({ auth, page_id });
        const page_data: PageData = {
            // @ts-ignore
            title: page.properties.Name.title[0].plain_text,
            // @ts-ignore
            description: page.properties.description.rich_text[0].plain_text,
            id: page_id
        } 
        
        pages_data.push(page_data);
    }

    return { pages_data }
}
  