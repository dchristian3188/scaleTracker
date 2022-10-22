/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ExerciseDefinitions, ExerciseHistory } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PracticeCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    ExcerciseHistory?: ExerciseHistory;
    excerciseDefs?: ExerciseDefinitions;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function PracticeCard(props: PracticeCardProps): React.ReactElement;
