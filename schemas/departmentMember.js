import {defineType, defineField} from 'sanity'

import isNotAdmin from './utils/isNotAdmin'

export const departmentMember = defineType({
  name: 'departmentMember',
  type: 'document',
  title: 'Department Member',
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      options: ['Faculty', 'Staff', 'Graduate Student'],
      readOnly: isNotAdmin,
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Atrribution',
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'officeNumber',
      type: 'string',
      title: 'Office Number',
      validation: function (rule) {
        return rule
          .regex(/^([A-Z]){0,3} (\d){1,4}$/)
          .error(
            'Use up to 3 letter building code followed by up to 4 digit room number. For example, "ESB 3104"'
          )
      },
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      validation: function (rule) {
        return rule
          .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
          .error('Use a valid 9 or 10 digit phone number')
      },
    }),
    defineField({
      name: 'acceptingStudents',
      type: 'boolean',
      title: 'Accepting Students',
    }),
  ],
})
