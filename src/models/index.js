// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LeaveReview, Revi } = initSchema(schema);

export {
  LeaveReview,
  Revi
};