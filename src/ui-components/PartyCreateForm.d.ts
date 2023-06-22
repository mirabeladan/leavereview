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
export declare type PartyCreateFormInputValues = {
    Field2?: string;
    Field0?: string;
    Field1?: string;
};
export declare type PartyCreateFormValidationValues = {
    Field2?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartyCreateFormOverridesProps = {
    PartyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field2?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type PartyCreateFormProps = React.PropsWithChildren<{
    overrides?: PartyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PartyCreateFormInputValues) => PartyCreateFormInputValues;
    onSuccess?: (fields: PartyCreateFormInputValues) => void;
    onError?: (fields: PartyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PartyCreateFormInputValues) => PartyCreateFormInputValues;
    onValidate?: PartyCreateFormValidationValues;
} & React.CSSProperties>;
export default function PartyCreateForm(props: PartyCreateFormProps): React.ReactElement;
