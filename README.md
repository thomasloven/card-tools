card-tools version 2
====================

This is a collection of tools to simplify creating custom cards for [Home Assistant](https://home-assistant.io)

## Installation instructions

If you see "Can't find card-tools. [...]" in your Home Assistant UI, follow these instructions.

To install `card-tools` follow [this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).

The recommended type of this plugin is: `module`

```yaml
resources:
  url: /local/card-tools.js
  type: module
```

## User instructions

That's all. You don't need to do anything else.

## Card Developer Instructions

There are two ways you can get access to the card-tools functions.

1. Import the package

  ```bash
  > npm install --save thomasloven/lovelace-card-tools
  ```

  And then

  ```javascript
  import { LitElement } from "@card-tools/lit-element";
  ```
