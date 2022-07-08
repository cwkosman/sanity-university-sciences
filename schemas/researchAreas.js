import {defineType, defineField} from 'sanity'

export const researchArea = defineType({
  name: 'researchArea',
  type: 'document',
  title: 'Research Area',
  fields: [
    // TODO: Make list of dummy research areas, have departmentMember reference them
  ],
})
