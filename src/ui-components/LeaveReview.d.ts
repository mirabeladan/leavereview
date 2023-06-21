/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeaveReviewInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type LeaveReviewValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeaveReviewOverridesProps = {
    LeaveReviewGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    Field2?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type LeaveReviewProps = React.PropsWithChildren<{
    overrides?: LeaveReviewOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeaveReviewInputValues) => LeaveReviewInputValues;
    onSuccess?: (fields: LeaveReviewInputValues) => void;
    onError?: (fields: LeaveReviewInputValues, errorMessage: string) => void;
    onChange?: (fields: LeaveReviewInputValues) => LeaveReviewInputValues;
    onValidate?: LeaveReviewValidationValues;
} & React.CSSProperties>;
export default function LeaveReview(props: LeaveReviewProps): React.ReactElement;
