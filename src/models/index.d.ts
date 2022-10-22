import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type ExerciseHistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExerciseDefinitionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerExerciseHistory = {
  readonly id: string;
  readonly date?: string | null;
  readonly speed?: string | null;
  readonly exercisedefinitionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseHistory = {
  readonly id: string;
  readonly date?: string | null;
  readonly speed?: string | null;
  readonly exercisedefinitionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseHistory = LazyLoading extends LazyLoadingDisabled ? EagerExerciseHistory : LazyExerciseHistory

export declare const ExerciseHistory: (new (init: ModelInit<ExerciseHistory, ExerciseHistoryMetaData>) => ExerciseHistory) & {
  copyOf(source: ExerciseHistory, mutator: (draft: MutableModel<ExerciseHistory, ExerciseHistoryMetaData>) => MutableModel<ExerciseHistory, ExerciseHistoryMetaData> | void): ExerciseHistory;
}

type EagerExerciseDefinitions = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly ExerciseHistories?: (ExerciseHistory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExerciseDefinitions = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly ExerciseHistories: AsyncCollection<ExerciseHistory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExerciseDefinitions = LazyLoading extends LazyLoadingDisabled ? EagerExerciseDefinitions : LazyExerciseDefinitions

export declare const ExerciseDefinitions: (new (init: ModelInit<ExerciseDefinitions, ExerciseDefinitionsMetaData>) => ExerciseDefinitions) & {
  copyOf(source: ExerciseDefinitions, mutator: (draft: MutableModel<ExerciseDefinitions, ExerciseDefinitionsMetaData>) => MutableModel<ExerciseDefinitions, ExerciseDefinitionsMetaData> | void): ExerciseDefinitions;
}