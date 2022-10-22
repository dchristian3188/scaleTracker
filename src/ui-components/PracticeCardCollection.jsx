/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { ExerciseDefinitions, ExerciseHistory } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PracticeCard from "./PracticeCard";
import { Collection } from "@aws-amplify/ui-react";
export default function PracticeCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const exerciseHistoryItems = useDataStoreBinding({
    type: "collection",
    model: ExerciseHistory,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ExerciseDefinitions,
  }).items.map((item) => ({
    ...item,
    ExerciseHistories: exerciseHistoryItems.filter(
      (model) => model.exercisedefinitionsID === item.id
    ),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "PracticeCardCollection")}
    >
      {(item, index) => (
        <PracticeCard
          excerciseDefs={item}
          ExcerciseHistory={item}
          height="auto"
          width="auto"
          margin="10px 10px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PracticeCard>
      )}
    </Collection>
  );
}
