import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: "feature",
      title: "Feature",
      type: "boolean"
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'string'
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField(    {
      name: 'markdownBody',
      title: 'Body',
      type: 'markdown',
      description: 'A GitHub-flavored markdown field with image uploading',
    }),
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{type: 'string' }],
    }
  ]
})
