
import createSchema from 'part:@sanity/base/schema-creator'
import laptop from './laptop';
import component from './component';
import product from './product';
import banner from './banner';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import user from './user';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',

  types: schemaTypes.concat([
    product, banner, laptop, component, categor, user
  ]),
})
