import { NiFiAPIError } from "../nifi/NiFiAPIError";
import { ProcessGroupDoesNotExistError } from "../nifi/ProcessGroupDoesNotExistError";
import { ConnectionDoesNotExistError } from "../nifi/ConnectionDoesNotExistError";
import { ClusterNodeIsDisconnectedFromClusterError } from "../nifi/ClusterNodeIsDisconnectedFromClusterError";
import { ClusterSocketTimeoutError } from "../nifi/ClusterSocketTimeoutError";
import { ClusterUnknownHostError } from "../nifi/ClusterUnknownHostError";
import { ControllerServiceIsNotDisabledError } from "../nifi/ControllerServiceIsNotDisabledError";
import { ClusterStillVotingFlowError } from "../nifi/ClusterStillVotingFlowError";
import { AuthorizationError } from "../nifi/AuthorizationError";
import { FlowIsRunningError } from "../nifi/FlowIsRunningError";
import { ControllerServiceDoesNotExistsError } from "../nifi/ControllerServiceDoesNotExistsError";
import { ProcessorDoesNotExistError } from "../nifi/ProcessorDoesNotExistError";
import { UnknownNiFiAPIError } from "../nifi/UnknownNiFiAPIError";


export class NiFiAPIErrorFactory {

    public static getNiFiAPIError(message: string): NiFiAPIError {
        if (message.includes("Unable to locate group with id")) {
            return new ProcessGroupDoesNotExistError(message, message);
        } else if (message.includes("Unable to find connection with id")) {
            return new ConnectionDoesNotExistError(message, message);
        } else if (message.includes("is currently disconnected") || message.endsWith("because the node is not connected")
            || message.endsWith("Nodes are currently disconnected")) {
            return new ClusterNodeIsDisconnectedFromClusterError(message, message);
        } else if (message.includes("due to java.net.SocketTimeoutException: Read timed out")) {
            return new ClusterSocketTimeoutError(message, message);
        } else if (message.includes("java.net.UnknownHostException:")
            || message.startsWith("javax.ws.rs.ProcessingException: java.net.UnknownHostException:")) {
            return new ClusterUnknownHostError(message, message);
        } else if (message.includes("because it is not disabled")) {
            return new ControllerServiceIsNotDisabledError(message, message);
        } else if (message === "Cluster is still in the process of voting on the appropriate Data FlowSnippet.") {
            return new ClusterStillVotingFlowError(message, message);
        } else if (message.includes('Unable to validate the access token.')) {
            return new AuthorizationError(message);
        } else if (message.includes("is running") || message.endsWith("is not stopped")) {
            return new FlowIsRunningError(message, message);
        }
        else if (message.includes("Unable to locate controller service with id")) {
            return new ControllerServiceDoesNotExistsError(message, message)
        }
        else if (message.includes("Unable to find processor with id")) {
            return new ProcessorDoesNotExistError(message, message)
        }

        return new UnknownNiFiAPIError(message, message);
    }
}