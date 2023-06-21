/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviCreateFormInputValues = {};
export declare type ReviCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviCreateFormOverridesProps = {
    ReviCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ReviCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviCreateFormInputValues) => ReviCreateFormInputValues;
    onSuccess?: (fields: ReviCreateFormInputValues) => void;
    onError?: (fields: ReviCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviCreateFormInputValues) => ReviCreateFormInputValues;
    onValidate?: ReviCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviCreateForm(props: ReviCreateFormProps): React.ReactElement;
