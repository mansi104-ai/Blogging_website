import { Rule } from "postcss";
import { title } from "process";
import { validation } from "sanity";
import { defineType, defineArrayMember, defineField } from "sanity";
export default {
    name : 'post',
    type : 'document',
    title : 'Post',
    fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation : Rule => Rule.required().max(50).error("This field is required")
        }),

        //slug field

        defineField({
            name : 'slug',
            type : 'slug',
            title : 'Slug',
            options:{
                source : 'title',
                maxLength : 50,
            },


        }),

        defineField({
            name : 'summary',
            type : 'text',
            title : 'summary',
            validation: Rule => Rule.required(),
        }), 

        defineField({
            name : 'image',
            type: 'image',
            title : 'Image',

        }),

        defineField({
            title : 'Content',
            name : 'content',
            type : 'array',
            of : [
                defineArrayMember({
                    type: 'block'
                })
            ]
        }),
        // {
        //     name :'gender',
        //     type : 'string',
        //     title : 'Gender',
        //     options :{
        //         list : [
        //             {title : 'Male', value:'male'},
        //             {title : 'Female', value : 'female'},
        //         ],
        //         layout : 'radio',
        //         direction : 'horizontal',
        //     }

        // },
    ]
}