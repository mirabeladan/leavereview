import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLeaveReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeaveReview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly Field1?: string | null;
  readonly Field2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLeaveReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeaveReview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly Field1?: string | null;
  readonly Field2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LeaveReview = LazyLoading extends LazyLoadingDisabled ? EagerLeaveReview : LazyLeaveReview

export declare const LeaveReview: (new (init: ModelInit<LeaveReview>) => LeaveReview) & {
  copyOf(source: LeaveReview, mutator: (draft: MutableModel<LeaveReview>) => MutableModel<LeaveReview> | void): LeaveReview;
}

type EagerRevi = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Revi, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRevi = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Revi, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Revi = LazyLoading extends LazyLoadingDisabled ? EagerRevi : LazyRevi

export declare const Revi: (new (init: ModelInit<Revi>) => Revi) & {
  copyOf(source: Revi, mutator: (draft: MutableModel<Revi>) => MutableModel<Revi> | void): Revi;
}