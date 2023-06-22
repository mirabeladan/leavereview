/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Party } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PartyUpdateFormInputValues = {
    Field0?: string;
    Field1?: string;
};
export declare type PartyUpdateFormValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartyUpdateFormOverridesProps = {
    PartyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PartyUpdateFormProps = React.PropsWithChildren<{
    overrides?: PartyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    party?: Party;
    onSubmit?: (fields: PartyUpdateFormInputValues) => PartyUpdateFormInputValues;
    onSuccess?: (fields: PartyUpdateFormInputValues) => void;
    onError?: (fields: PartyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PartyUpdateFormInputValues) => PartyUpdateFormInputValues;
    onValidate?: PartyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PartyUpdateForm(props: PartyUpdateFormProps): React.ReactElement;
