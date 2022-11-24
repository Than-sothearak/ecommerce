export default {
    name: 'laptop',
    title: 'Laptop',
    type: 'document',
    fields: [
        {
            name: 'model',
            title: 'Model',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image'}],
            option: {
                hotspot: true,
            }
        },
        { name: 'brand',
      title: 'Brand',
      type: 'string',

    },
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'model',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
    },
    {
        name: 'details',
        title: 'Details',
        type: 'string',
    }
    ,{
        name: 'cpu',
        title: 'Cpu',
        type: 'string',
    }
    ,{
        name: 'ram',
        title: 'Ram',
        type: 'string',
    },{
        name: 'graphich',
        title: 'Graphich',
        type: 'string',
    },{
        name: 'display',
        title: 'Display',
        type: 'string',
    },{
        name: 'os',
        title: 'Os',
        type: 'string',
    },{
        name: 'keyboard',
        title: 'Keyboard',
        type: 'string',
    },{
        name: 'battery',
        title: 'Battery',
        type: 'string',
    },{
        name: 'countInStock',
        title: 'CountInStock',
        type: 'number',
      },
    ]
       
    
}