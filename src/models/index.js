// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ExerciseHistory, ExerciseDefinitions } = initSchema(schema);

export {
  ExerciseHistory,
  ExerciseDefinitions
};