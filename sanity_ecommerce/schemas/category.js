export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {
        name: 'parent',
        type: 'reference',
        to: [{type: 'laptop'}],
        // This ensures we cannot select other "children"
        options: {
          filter: '!defined(parent)',
        },
      },
    ],
    // Customise the preview so parents are visualised in the studio
  }