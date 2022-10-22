/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PracticeCardProps } from "./PracticeCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PracticeCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PracticeCardProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function PracticeCardCollection(props: PracticeCardCollectionProps): React.ReactElement;
