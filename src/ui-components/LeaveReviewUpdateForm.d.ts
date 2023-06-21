/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LeaveReview } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeaveReviewUpdateFormInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type LeaveReviewUpdateFormValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeaveReviewUpdateFormOverridesProps = {
    LeaveReviewUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeaveReviewUpdateFormProps = React.PropsWithChildren<{
    overrides?: LeaveReviewUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    leaveReview?: LeaveReview;
    onSubmit?: (fields: LeaveReviewUpdateFormInputValues) => LeaveReviewUpdateFormInputValues;
    onSuccess?: (fields: LeaveReviewUpdateFormInputValues) => void;
    onError?: (fields: LeaveReviewUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeaveReviewUpdateFormInputValues) => LeaveReviewUpdateFormInputValues;
    onValidate?: LeaveReviewUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LeaveReviewUpdateForm(props: LeaveReviewUpdateFormProps): React.ReactElement;
