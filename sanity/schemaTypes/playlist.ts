import { defineField, defineType } from "sanity";

export const playlist = defineType({
    name: "playlist",
    title: "Playlist",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "select",
            title: "Select",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "startup" }]
                }
            ]
        })
    ],
})