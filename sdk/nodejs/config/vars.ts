// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("azuredevops-extensions");

/**
 * The url of the Azure DevOps instance which should be used.
 */
export declare const orgServiceUrl: string | undefined;
Object.defineProperty(exports, "orgServiceUrl", {
    get() {
        return __config.get("orgServiceUrl") ?? utilities.getEnv("AZDO_ORG_SERVICE_URL");
    },
    enumerable: true,
});

/**
 * The personal access token which should be used.
 */
export declare const personalAccessToken: string | undefined;
Object.defineProperty(exports, "personalAccessToken", {
    get() {
        return __config.get("personalAccessToken") ?? utilities.getEnv("AZDO_PERSONAL_ACCESS_TOKEN");
    },
    enumerable: true,
});

/**
 * The number of attempts.
 */
export declare const numberOfAttempts: number | undefined;
Object.defineProperty(exports, "numberOfAttempts", {
    get() {
        return __config.get("numberOfAttempts") ?? utilities.getEnv("NUMBER_OF_ATTEMPTS");
    },
    enumerable: true,
});

