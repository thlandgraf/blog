# The Plugins Manifest, API and the resulting Prompt
To build a plugin, understanding the end-to-end flow is crucial. It begins with creating a manifest file, hosting it on your domain, and filling it with essential metadata about your plugin. This includes authentication details and an OpenAPI spec for the endpoints you wish to expose. The model will then interpret the OpenAPI description fields, which should provide a natural language description for the different fields.

* The `description_for_model` attribute in the `ai-plugin.json` file provides ample room (up to 8,000 characters) for the plugin prompt. But it's equally important to effectively use other properties from the OpenAPI specification to enhance the prompt output.

* Every API endpoint defined in the OpenAPI specification comes with two description properties that add to the plugin prompt. Given that each description is around 200-300 characters, making good use of these properties can considerably expand the available prompt space.

* The OpenAPI Path Description, when present, is displayed just before the type declaration in the dynamically generated pseudo-code namespace of the plugin prompt. If the Path Description is not provided, the OpenAPI Summary takes its place.

* Only descriptions that are specific to request properties are included in the plugin prompt. This strategy is advantageous as it offers more prompt space for each component, considering each description can be 200-300 characters long.
## ai-plugin.json
### name_for_model

### description_for_model

## openapi.yaml
Fill up the descriptions with up to 300 characters to describe a field.
Use the `|` to break lines in the yaml file for better readability. Like so:
```yml
description: | 
    Each time before create a GMAT Script, query the description.
    Accepts search query objects array. Break down complex questions into sub-questions. 
    Split queries if ResponseTooLargeError occurs.
```
### tags
In the OpenAPI Specification, a tag is used to group related operations together. Each operation (like get, put, post, delete, etc.) can be assigned one or more tags. These tags are then used by documentation generation tools to categorize the operations, making the API easier to understand and navigate.

For example, if you have an API that deals with Users and Orders, you might tag all the operations that deal with users (like creating a new user, getting user details, updating user information, etc.) with the Users tag, and all the operations that deal with orders (like creating a new order, getting order details, updating order status, etc.) with the Orders tag.

At present, there's no concrete proof that using tags in your OpenAPI specification directly impacts how ChatGPT handles plugins. However, tagging is a best practice in designing APIs as it helps organize operations in a clean and understandable way. Even though we don't have empirical evidence of its influence on ChatGPT, it's a good habit to adopt. After all, maintaining clarity and order in your openapi.yaml file can only be beneficial, and certainly won't cause any harm. So, let's embrace the use of tags in our OpenAPI specifications.

see: [Grouping Operations With Tags](https://swagger.io/docs/specification/grouping-operations-with-tags/)

## debugging the plugin's prompt:
Actually, you can ask ChatGPT, what it knows about the plugin:
> What is the plugin AstroGPT capable of?

> How does the QueryRequest schema of the plugin look?

> How does the query_blueprints operation of the AstroGPT plugin work?

> How do you use query_blueprints?

compare the results with, what you intended in your `openapi.yaml` and `ai-plugin.json`.

## see also:
* [Mastering ChatGPT Plugins: Optimizing Prompt Space in the Dynamic Plugin Prompt](https://wfhbrian.com/mastering-chatgpt-plugins-plugin-prompt-space/)
