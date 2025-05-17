# The ChatGPT Plugins Manifest, API and the resulting Prompt
To build a plugin, understanding the end-to-end flow is crucial. It begins with creating a manifest file, hosting it on your domain, and filling it with essential metadata about your plugin. This includes authentication details and an OpenAPI spec for the endpoints you wish to expose. The model will then interpret the OpenAPI description fields, which should provide a natural language description for the different fields.

* The `description_for_model` attribute in the `ai-plugin.json` file provides ample room (up to 8000 characters) for the plugin prompt. But it's equally important to effectively use other properties from the OpenAPI specification to enhance the prompt output.

* Every API endpoint defined in the OpenAPI specification description properties that add to the plugin prompt. Given that each description is around 300 characters, making good use of these properties can considerably expand the available prompt space.

* The OpenAPI Path Description, when present, is displayed just before the type declaration in the dynamically generated pseudo-code namespace of the plugin prompt. If the Path Description is not provided, the OpenAPI Summary takes its place.

* Only descriptions that are specific to request properties are included in the plugin prompt. This strategy is advantageous as it offers more prompt space for each component, considering each description can be 300 characters long.

The 8000 caracters plus the Nx300 characters seems a lot, but as you will see. You'll need them, be economical with them.

A Prompt:
> Write: [...] in less than 8000/300 characters obtaining all necessary information

in ChatGPT is your friend.
## ai-plugin.json
The most important fields in the ai-plugin.json are `name_for_model` and `description_for_model`
### name_for_model
This is the namespace for the plugin in ChatGPT.
### description_for_model
When developing a plugin, I typically maintain the `description_for_model` in a separate `description_for_model.md` file. This file is then rendered into the `ai-plugin.json` during the request process. It's important to remember to replace all `"` characters with `'` and all carriage returns with `\n`. This approach of formatting the model's description as a markdown file has two significant benefits. Firstly, it enhances readability for the programmer, making the file easier to navigate and understand. Secondly, it provides a clear structure for the description - hoping, that this does help ChatGPT understand it's intention.
## openapi.yaml
In the world of RESTful APIs, the openapi.yaml file is a well-known tool for documentation and integration. It's often used as input for documentation tools like Swagger or for code generation. However, when it comes to developing a plugin for ChatGPT, the use of the openapi.yaml file takes on a slightly different role. ChatGPT retrieves this file via an HTTP GET request and, in conjunction with the ai-plugin.json file, constructs what's known as the 'plugin prompt'. This internal representation guides ChatGPT in deciding how to interact with the plugin's API. But unlike traditional procedural calls, these interactions are orchestrated by AI-generated RESTful calls. As a plugin developer, it's crucial to understand this distinction and carefully craft the openapi.yaml and ai-plugin.json files to ensure the desired API calls are made.

### description
To help the API to understand, when calling a API endpoint, the most important part is to add `description` fields in the `opanapi.yaml`.

In the process of developing a plugin for ChatGPT, one of the key steps is to ensure that the API understands when to call a specific API endpoint. This is where the `description` fields in the openapi.yaml file come into play. These fields, which can contain up to 300 characters, provide a detailed explanation of each field. To enhance readability in the yaml file, you can use the `|` character to break lines. This makes the file easier to navigate and to read.
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

[Join the Discussion or ask Questions on this Topic](https://github.com/thlandgraf/blog/discussions/categories/the-plugins-manifest-api-and-the-resulting-prompt){:target="_blank"}
