/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeaveReviewCreateFormInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type LeaveReviewCreateFormValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeaveReviewCreateFormOverridesProps = {
    LeaveReviewCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeaveReviewCreateFormProps = React.PropsWithChildren<{
    overrides?: LeaveReviewCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeaveReviewCreateFormInputValues) => LeaveReviewCreateFormInputValues;
    onSuccess?: (fields: LeaveReviewCreateFormInputValues) => void;
    onError?: (fields: LeaveReviewCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeaveReviewCreateFormInputValues) => LeaveReviewCreateFormInputValues;
    onValidate?: LeaveReviewCreateFormValidationValues;
} & React.CSSProperties>;
export default function LeaveReviewCreateForm(props: LeaveReviewCreateFormProps): React.ReactElement;
