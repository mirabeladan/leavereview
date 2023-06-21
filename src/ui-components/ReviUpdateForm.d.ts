/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Revi } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviUpdateFormInputValues = {};
export declare type ReviUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviUpdateFormOverridesProps = {
    ReviUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ReviUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    revi?: Revi;
    onSubmit?: (fields: ReviUpdateFormInputValues) => ReviUpdateFormInputValues;
    onSuccess?: (fields: ReviUpdateFormInputValues) => void;
    onError?: (fields: ReviUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviUpdateFormInputValues) => ReviUpdateFormInputValues;
    onValidate?: ReviUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviUpdateForm(props: ReviUpdateFormProps): React.ReactElement;
