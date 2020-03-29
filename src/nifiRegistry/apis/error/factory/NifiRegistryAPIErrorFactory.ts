import { NifiRegistryAPIError } from "../registry/NifiRegistryAPIError";import { BucketNameAlreadyExists } from "../registry/BucketNameAlreadyExists";import { UserOrUserGroupAlreadyExists } from "../registry/UserOrUserGroupAlreadyExists";import { BucketDoesNotExist } from "../registry/BucketDoesNotExist";import { BucketNameBlank } from "../registry/BucketNameBlank";import { FlowNotFoundError } from "../registry/FlowNotFoundError";import { FlowVersionNotFoundError } from "../registry/FlowVersionNotFoundError";import { UserGroupIdCannotBeSpecified } from "../registry/UserGroupIdCannotBeSpecified";import { UserGroupIdentityMustBeSpecified } from "../registry/UserGroupIdentityMustBeSpecified";import { UserNotFound } from "../registry/UserNotFound";import { UserIdentifierCannotBeSent } from "../registry/UserIdentifierCannotBeSent";import { UserIdentityMustBeSpecified } from "../registry/UserIdentityMustBeSpecified";import { AccessPolicyIdCannotBeSpecified } from "../registry/AccessPolicyIdCannotBeSpecified";
import { PolicyNotFound } from "../registry/PolicyNotFound";
import { MultiplePoliciesError } from "../registry/MultiplePoliciesError";
import { UserGroupDoesNotExist } from "../registry/UserGroupDoesNotExist";
import { UserGroupIdBodyNotEqualResource } from "../registry/UserGroupIdBodyNotEqualResource";
import { TheSpecifiedGroupDoesNotSupportModification } from "../registry/TheSpecifiedGroupDoesNotSupportModification";
import { InvalidAction } from "../registry/InvalidAction";
import { ResourceMustBeSpecified } from "../registry/ResourceMustBeSpecified";
import { PolicyIdBodyNotEqualResource } from "../registry/PolicyIdBodyNotEqualResource";
import { UnknownNifiRegistryApiError } from "../registry/UnknownNifiRegistryApiError";



export class NifiRegistryAPIErrorFactory {

    public static getNifiRegistryAPIError(message: string): NifiRegistryAPIError {
        if (message.includes("A bucket with the same name already exists")) {
            return new BucketNameAlreadyExists("A bucket with the same name already exists");
        } else if (message.includes("User/user group already exists with the identity")) {
            return new UserOrUserGroupAlreadyExists("User/user group already exists with the identity");
        }
        else if (message.includes("The specified bucket ID does not exist in this registry")) {
            return new BucketDoesNotExist("The specified bucket ID does not exist in this registry")
        }
        else if (message.includes("No policy found for action")) {
            return new PolicyNotFound(message);
        }
        else if (message.includes("Found multiple policies for")) {
            return new MultiplePoliciesError(message);
        }
        else if (message.includes("Cannot create Bucket - name must not be blank")) {
            return new BucketNameBlank(message);
        } else if (message.includes("404 - The specified flow ID does not exist in this bucket.")) {
            return new FlowNotFoundError(message)
        } else if (message.includes("404 - The specified versioned flow snapshot does not exist for this flow.")) {
            return new FlowVersionNotFoundError(message);
        } else if (message.includes('The specified user group ID does not exist in this registry.')) {
            return new UserGroupDoesNotExist(message);
        }else if (message.includes('User group ID cannot be specified when creating a new group.')) {
            return new UserGroupIdCannotBeSpecified(message);
        }else if (message.includes('User group identity must be specified when creating a new group.')) {
            return new UserGroupIdentityMustBeSpecified(message);
        }else if (message.includes('does not equal the user group id of the requested resource')) {
            return new UserGroupIdBodyNotEqualResource(message);
        }else if (message.includes('The specified group does not support modification.')) {
            return new TheSpecifiedGroupDoesNotSupportModification(message);
        }else if (message.includes('The specified user ID does not exist in this registry.')) {
            return new UserNotFound(message);
        }else if (message.includes('User identifier cannot be specified when creating a new user.')) {
            return new UserIdentifierCannotBeSent(message);
        }else if (message.includes('User identity must be specified when creating a new user.')) {
            return new UserIdentityMustBeSpecified(message);
        }else if (message.includes('Access policy ID cannot be specified when creating a new policy.')) {
            return new AccessPolicyIdCannotBeSpecified(message);
        }else if (message.includes('is invalid. Must be one of [read, write, delete]')) {
            return new InvalidAction(message);
        }else if (message.includes('Resource must be specified when creating a new access policy.')) {
            return new ResourceMustBeSpecified(message);
        }else if (message.includes('The policy id in the request body')) {
            return new PolicyIdBodyNotEqualResource(message);
        }else if (message.includes('The specified policy does not exist in this registry.')) {
            return new PolicyNotFound(message);
        }


        return new UnknownNifiRegistryApiError(message)
    }
}