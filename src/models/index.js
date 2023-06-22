// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Party, LeaveReview, Revi } = initSchema(schema);

export {
  Party,
  LeaveReview,
  Revi
};