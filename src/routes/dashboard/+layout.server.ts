import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const fromUrl = event.url.pathname + event.url.search;
	if (!session?.user) {
		throw redirect(303, `/login?redirectTo=${fromUrl}`);
    }
    
	return {
		session,
	};
};