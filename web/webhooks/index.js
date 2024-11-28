/**
 * @see https://shopify.dev/api/admin-graphql/2024-01/enums/WebhookSubscriptionTopic
 */

export const WebhookList = {
	/**
	 * Customers can request their data from a store owner. When this happens,
	 * Shopify invokes this privacy webhook.
	 *
	 * https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks#customers-data_request
	 */
	CUSTOMERS_DATA_REQUEST: {
	  deliveryMethod: 'http',
		callbackUrl: '/api/webhooks',
	  	callback: async (topic, shop, body, webhookId) => {
			const payload = JSON.parse(body);
		},
	},
  
	/**
	 * Store owners can request that data is deleted on behalf of a customer. When
	 * this happens, Shopify invokes this privacy webhook.
	 *
	 * https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks#customers-redact
	 */
	CUSTOMERS_REDACT: {
	  deliveryMethod: 'http',
		callbackUrl: '/api/webhooks',
		callback: async (topic, shop, body, webhookId) => {
			const payload = JSON.parse(body);
		},
	},
  
	/**
	 * 48 hours after a store owner uninstalls your app, Shopify invokes this
	 * privacy webhook.
	 *
	 * https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks#shop-redact
	 */
	SHOP_REDACT: {
	  deliveryMethod: 'http',
		callbackUrl: '/api/webhooks',
		callback: async (topic, shop, body, webhookId) => {
			const payload = JSON.parse(body);
		},
	},
};