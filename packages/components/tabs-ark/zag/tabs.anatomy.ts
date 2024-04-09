import { createAnatomy } from "./common/create-anatomy";

export const anatomy = createAnatomy("tabs").parts([
	"root",
	"list",
	"trigger",
	"indicator",
	"content",
]);
export const parts = anatomy.build();
